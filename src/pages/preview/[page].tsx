import React from 'react';

import {EntryCollection} from 'contentful'
import { Meta } from 'layout/Meta';
import Main from 'templates/Main';
import {fetchPages} from 'utils/Content';
import PageContent from 'layout/PageContent';
import { Config } from 'utils/Config';
import {parseData} from 'utils/Parser';

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

Page.getInitialProps = async ({ query }) => {
  const pages = parseData(await fetchPages(query!.page || 'index'));

  return { page: pages[0] }
}

export default Page;
