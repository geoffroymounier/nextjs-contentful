import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import {EntryCollection} from 'contentful'
import { Meta } from '../layout/Meta';
import Main from '../templates/Main';
import ContentfulService from '../utils/Content';
import PageContent from '../layout/PageContent';
import { Config } from '../utils/Config';
import {parseData} from '../utils/Parser';

export type PageProps = {
  page: EntryCollection<any>;
};

const contentful = new ContentfulService();

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
  const pages = parseData(await contentful.fetchPages());


  return {
    paths: pages.filter(({href}) => href !== 'index' ).map(({href}) => ({
      params: {
        page: href
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  console.log(params)
  const pages = parseData(await contentful.fetchPages(params!.page));
  
  return {
    props: {
      page: pages[0]
    },
  };
};

export default Page;
