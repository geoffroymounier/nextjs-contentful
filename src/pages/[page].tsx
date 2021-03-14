import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Meta } from 'layout/Meta';
import Main from 'templates/Main';
import PageContent from 'layout/PageContent';
import { Config } from 'utils/Config';
import { fetchPagesFromSanity } from 'utils/Sanity';

export type PageProps = {
  page: Record<string,any>;
};


type IPageUrl = {
  page: string;
};
const Page = (props: any) => (
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
);
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const pages = await fetchPagesFromSanity()

  return {
    paths: pages.filter(({href}) => href.current !== 'index' && href.current !== 'blog' ).map(({href}) => ({
      params: {
        page: href.current
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  const page = (await fetchPagesFromSanity(params!.page || 'index'))[0]
  
  return {
    props: {
      page
    },
  };
};

export default Page;
