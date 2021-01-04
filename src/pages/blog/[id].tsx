import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import {EntryCollection} from 'contentful'
import { Meta } from '../../layout/Meta';
import Main from '../../templates/Main';
import { fetchBlogs, fetchPages } from '../../utils/Content';
import PageContent from '../../layout/PageContent';
import { Config } from '../../utils/Config';
import {parseData} from '../../utils/Parser';
import { ContentContext } from '../../context/ContentContext';

export type PageProps = {
  page: EntryCollection<any>;
  item: EntryCollection<any>;
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
    <PageContent blocks={props.page.content} />
  </Main>
  </ContentContext.Provider>
);
export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const blogItems = parseData(await fetchBlogs());


  return {
    paths: blogItems.map(({href}) => ({
      params: {
        id: href
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, IPageUrl> = async ({ params }) => {
  const blog = parseData(await fetchBlogs(params!.id));
  const frame = parseData(await fetchPages('blog'));

  return {
    props: {
      page: frame[0],
      item: blog[0]
    },
  };
};

export default Blog;
