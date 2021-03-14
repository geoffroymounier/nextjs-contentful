import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Meta } from '../../layout/Meta';
import Main from '../../templates/Main';
import PageContent from '../../layout/PageContent';
import { Config } from '../../utils/Config';
import { ContentContext } from '../../context/ContentContext';
import { fetchBlogsFromSanity, fetchPagesFromSanity } from 'utils/Sanity';

export type PageProps = {
  page: Record<string,any>;
  item: Record<string,any>;
};

type IPageUrl = {
  id: string;
};

const Blog = (props: any) => (
  <ContentContext.Provider value={{item:props.item}}>
  <Main
    header={props.page.header}
    banner={props.page.banner}
    meta={(
      <Meta
        title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
        description={Config.description}
      />
    )}
  >
    <PageContent  classes={props.page.classes} style={props.page.style}   blocks={props.page.content} />
  </Main>
  </ContentContext.Provider>
);
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const blogItems = await fetchBlogsFromSanity();

  return {
    paths: blogItems.map(({href}) => ({
      params: {
        id: href.current
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
      item: blog
    },
  };
};

export default Blog;
