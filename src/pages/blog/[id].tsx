import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Meta } from '../../layout/Meta';
import Main from '../../templates/Main';
import PageContent from '../../layout/PageContent';

import { ContentContext } from '../../context/ContentContext';
import { client, fetchBlogsFromSanity, fetchPagesFromSanity } from 'utils/Sanity';

export type PageProps = {
  page: Record<string, any>;
  item: Record<string, any>;
};

type IPageUrl = {
  id: string;
};

const Blog = (props: any) => {
  const [_change, setChange] = React.useState(0);
  const content = React.useRef(props.page.content);
  const article = React.useRef(props.item);
  const header = React.useRef(props.page.header);

  const updateContent = React.useCallback((update) => {
    article.current = update.result;
    setChange((change) => change + 1);
  }, []);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const query = '*[_type == "blogItem" && href.current == $href] { ..., header->}';
      const params = { href: props.item.href.current };

      const subscription = client.listen(query, params).subscribe(updateContent);
      return () => {
        subscription.unsubscribe();
      };
    } else {
      return () => {};
    }
  }, [updateContent, props.item.href.current]);

  return (
    <ContentContext.Provider value={{ item: article.current }}>
      <Main
        header={header.current}
        banner={props.page.banner}
        meta={
          <Meta
            title={`Nego-Plus | Articles | ${props.page.title ?? ''}`}
            description={props.page.description}
          />
        }
      >
        <PageContent
          classes={props.page.classes}
          style={props.page.style}
          blocks={content.current}
        />
      </Main>
    </ContentContext.Provider>
  );
};
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const blogItems = await fetchBlogsFromSanity();

  return {
    paths: blogItems.map(({ href }) => ({
      params: {
        id: href.current,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  const blog = (await fetchBlogsFromSanity(params!.id))[0];
  const frame = (await fetchPagesFromSanity('blog'))[0];

  return {
    props: {
      page: frame,
      item: blog,
    },
  };
};

export default Blog;
