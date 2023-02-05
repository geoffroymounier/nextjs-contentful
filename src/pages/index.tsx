import React from 'react';
import { GetStaticProps } from 'next';

import { Meta } from 'layout/Meta';
import PageContent from 'layout/PageContent';
import Main from 'templates/Main';
import { client, fetchMetadataFromSanity, fetchPagesFromSanity } from 'utils/Sanity';

export type PageProps = {
  page: Record<string, any>;
  metadata: {
    site_title?: string;
    site_description?: string;
    site_url?: string;
    site_locale?: string;
    site_icon?: string;
  };
};

const Index = (props: any) => {
  const [_change, setChange] = React.useState(0);
  const header = React.useRef(props.page.header);

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
  }, []);

  const { content, title, description, classes, style } = page.current;

  return (
    <Main
      header={header.current}
      banner={props.page.banner}
      footer={props.page.footer}
      meta={<Meta config={props.metadata} title={`Accueil`} description={description} href={''} />}
    >
      <PageContent classes={classes} style={style} blocks={content} />
    </Main>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const page = (await fetchPagesFromSanity('index'))[0];
  const metadata = await fetchMetadataFromSanity();
  return {
    props: {
      metadata,
      page,
    },
  };
};

export default Index;
