import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components';
import {client, internalLink} from 'utils/Sanity'
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

const serializers = {
  marks: {
    internalLink: ({mark, children}) => {
      const [href, setHref] = React.useState(null)
      React.useEffect(()=>{
        const getLink = async () => {
          const {_ref} = mark.reference
          const page = await internalLink(_ref)
          if (page.length) {
            const {_type, href} = page[0]
            const prefix = _type === 'page' ? '' : _type === 'blogItem' ? `blog/` : `${_type}/`
            const previewPrefix =  /\/preview\//.test(window.location.href) ? `preview/` : ``
            setHref(`/${previewPrefix}${prefix}${href.current}`)
          }
        }
        getLink()
      })
      
      return  href ? <a href={href}>{children}</a> : <>{children}</>

    },
    externalLink: ({mark, children}) => {
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    },
    replaceText:  props => {
      return (
        <>
          {props.children[0].replace(/\${(\w+)}/,"$1")}
        </>
      )
    }
  }
}
const Blog = (props) => {
  const { item: { content, classes: innerClass, style: innerStyle } } = React.useContext(ContentContext)

  if (props.nbArticles > 1) {
    return (
      <BlogList {...props}/>
    )
  }
  return (
    <WrappedDiv className={`${props.classes} ${innerClass}`} styled={`${props.style} ${innerStyle}`} >
      <BlockContent
        blocks={content}
        serializers={{
          types: {mediaEnriched: WrappedMediaEnriched},
          ...serializers
        }}
        {...client.config()}
      />
    </WrappedDiv>
  );
}

export default Blog