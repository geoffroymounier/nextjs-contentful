import React from 'react';
import { Meta } from 'layout/Meta';
import Main from 'templates/Main';
import PageContent from 'layout/PageContent';
import { Config } from 'utils/Config';
import { client, fetchPagesFromSanity } from 'utils/Sanity';
import { useDebounceCallback } from 'utils/hooks/useDebounce';

export type PageProps = {
  page: Record<string,any>;
};

const Page = (props: any) => {
  const [_change, setChange] = React.useState(0)
  const content = React.useRef(props.page.content)
  const header = React.useRef(props.page.header)

  const updateContent = (update) => {
    content.current = update.result.content
      setChange(change => change + 1)
  }
  const [debounceUpdateContent] = useDebounceCallback(updateContent,2000)
  
  React.useEffect(() => {
    const query = '*[_type == "page" && href.current == $href] { ..., header->}'
    const params = {href:props.page.href.current}
    const subscription = client.listen(query, params).subscribe(debounceUpdateContent)
    return () => {
      subscription.unsubscribe()
    }
  },[])
  
  return (
    <Main
      header={header.current}
      banner={props.page.banner}
      footer={props.page.footer}
      meta={(
        <Meta
          title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
          description={Config.description}
        />
      )}
    >
      <PageContent  classes={props.page.classes} style={props.page.style}  blocks={content.current} />
    </Main>
  )
};

Page.getInitialProps = async ({ query }) => {
  const page = (await fetchPagesFromSanity(query!.page || 'index'))[0]
  return { page }
}

export default Page;
