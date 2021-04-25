import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components';
import { client, internalLink } from 'utils/Sanity'
import { ContentContext } from '../context/ContentContext'

import dynamic from 'next/dynamic';

const MediaEnriched = dynamic(() => import('content/MediaEnriched'));
const BlogList = dynamic(() => import('./BlogList'));

const WrappedDiv = styled.div`
position : ${props => props.hasBackground ? 'relative' : 'initial'};
${props => props.styled}`

const WrappedMediaEnriched = (props) => {
  return <MediaEnriched {...props.node} />
}

const Blog = (props) => {
  const { item } = React.useContext(ContentContext)
  const { content, classes: innerClass, style: innerStyle } = item
  const serializers = {
    marks: {
      internalLink: ({ mark, children }) => {
        const [href, setHref] = React.useState(null)
        React.useEffect(() => {
          const getLink = async () => {
            const _ref = mark?.reference?._ref
            try {
              const page = await internalLink(_ref)
              if (page.length) {
                const { _type, href } = page[0]
                const prefix = _type === 'page' ? '' : _type === 'blogItem' ? `blog/` : `${_type}/`
                const previewPrefix = /\/preview\//.test(window.location.href) ? `preview/` : ``
                setHref(`/${previewPrefix}${prefix}${href.current}`)
              }
            } catch (e) {
              console.warn(e)
            }
           
          }
          getLink()
        })

        return href ? <a href={href}>{children}</a> : <>{children}</>

      },
      externalLink: ({ mark, children }) => {
        const { blank, href } = mark
        return blank ?
          <a href={href} target="_blank" rel="noopener">{children}</a>
          : <a href={href}>{children}</a>
      },
      replaceText: props => {
        return (
          <>
            {props.children[0].replace(/\${(\w+)}/g, (_change, match) => item[match] || '')}
          </>
        )
      }
    }
  }
  if (props.nbArticles > 1) {
    return (
      <BlogList {...props} />
    )
  }
  return (
    <WrappedDiv className={`${props.classes} ${innerClass}`} styled={`${props.style} ${innerStyle}`} >
      <BlockContent
        blocks={content}
        serializers={{
          types: { mediaEnriched: WrappedMediaEnriched },
          ...serializers
        }}
        {...client.config()}
      />
    </WrappedDiv>
  );
}

export default Blog