import React from 'react';
import { Meta } from 'layout/Meta';
import Main from 'templates/Main';
import PageContent from 'layout/PageContent';
import { Config } from 'utils/Config';

import { ContentContext } from 'context/ContentContext';
import { client, fetchBlogsFromSanity, fetchPagesFromSanity } from 'utils/Sanity';
import { useDebounceCallback } from 'utils/hooks/useDebounce';

export type PageProps = {
  page: Record<string,any>;
  item: Record<string,any>;
};


const Blog = (props: any) => {
  // const [_, setChange] = React.useState(0)
  const content = React.useRef(props.page.content)
  const article = React.useRef(props.item)
  const header = React.useRef(props.page.header)

  const updateContent = (update) => {
    article.current = update.result
      // setChange(change => change + 1)
  }
  const [debounceUpdateContent] = useDebounceCallback(updateContent,2000)
  

  React.useEffect(() => {
    const query = '*[_type == "blogItem" && href.current == $href] { ..., header->}'
    const params = {href:props.item.href.current}

    const subscription = client.listen(query, params).subscribe(debounceUpdateContent)
    return () => {
      subscription.unsubscribe()
    }
  },[])

  return (
    <ContentContext.Provider value={{ item: article.current }}>
      <Main
        header={header.current}
        banner={props.page.banner}
        meta={(
          <Meta
            title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
            description={Config.description}
          />
        )}
      >
        <PageContent blocks={content.current} />
      </Main>
    </ContentContext.Provider>
  )
};

Blog.getInitialProps = async ({ query }) => {
  const blog = (await fetchBlogsFromSanity(query!.id))[0];
  const frame = (await fetchPagesFromSanity('blog'))[0];

  return {
      page: frame,
      item: blog
    }
}

export default Blog;
