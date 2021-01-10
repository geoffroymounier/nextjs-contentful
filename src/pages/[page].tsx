import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import {EntryCollection} from 'contentful'
import { Meta } from '../layout/Meta';
import Main from '../templates/Main';
import {fetchPages} from '../utils/Content';
import PageContent from '../layout/PageContent';
import { Config } from '../utils/Config';
import {parseData} from '../utils/Parser';

export type PageProps = {
  page: EntryCollection<any>;
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
    <PageContent blocks={props.page.content} />
  </Main>
);
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const pages = parseData(await fetchPages());


  return {
    paths: pages.filter(({href}) => href !== 'index' && href !== 'blog' ).map(({href}) => ({
      params: {
        page: href
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  const pages = parseData(await fetchPages(params!.page));
  
  return {
    props: {
      page: pages[0]
    },
  };
};

export default Page;
