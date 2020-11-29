import React from 'react';
import { EntryCollection } from 'contentful';
import ContentfulService from '../utils/Content';
import {parseData} from '../utils/Parser';
import { GetStaticProps } from 'next';

import { Config } from '../utils/Config';
import { Meta } from '../layout/Meta';
import PageContent from '../layout/PageContent';
import Main from '../templates/Main';


export type PageProps = {
  page: EntryCollection<any>;
};
const contentful = new ContentfulService();

const Index = (props: any) => (
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

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const pages = await contentful.fetchPages('index');
  const parsedPage = parseData(pages)[0]


  return {
    props: { 
      page: parsedPage
    }
  }

};

export default Index;
