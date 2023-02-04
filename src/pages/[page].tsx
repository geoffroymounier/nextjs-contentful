import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Meta } from 'layout/Meta';
import Main from 'templates/Main';
import PageContent from 'layout/PageContent';
import { client, fetchPagesFromSanity } from 'utils/Sanity';

export type PageProps = {
  page: Record<string, any>;
};

type IPageUrl = {
  page: string;
};
const Page = (props: any) => {
  const [_change, setChange] = React.useState(0);

  const page = React.useRef(props.page);

  const updateContent = React.useCallback((update) => {
    page.current = {
      ...page.current,
      content: update.result.content,
      classes: update.result.classes,
      style: update.result.style,
      title: update.result.title,
      description: update.result.description,
    };

    setChange((change) => change + 1);
  }, []);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const query = '*[_type == "page" && href.current == $href] { ..., header->}';
      const params = { href: props.page.href.current };
      const subscription = client.listen(query, params).subscribe(updateContent);
      return () => {
        subscription.unsubscribe();
      };
    } else {
      return () => {};
    }
  }, [updateContent, props.page.href.current]);

  const { content, title, description, classes, style } = page.current;
  return (
    <Main
      header={props.page.header}
      banner={props.page.banner}
      footer={props.page.footer}
      meta={<Meta title={`Nego-Plus | ${title ?? ''}`} description={description} />}
    >
      <PageContent classes={classes} style={style} blocks={content} />
    </Main>
  );
};
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const pages = await fetchPagesFromSanity();

  return {
    paths: pages
      .filter(({ href }) => href.current !== 'index' && href.current !== 'blog')
      .map(({ href }) => ({
        params: {
          page: href.current,
        },
      })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  const page = (await fetchPagesFromSanity(params!.page || 'index'))[0];

  return {
    props: {
      page,
    },
  };
};

export default Page;
