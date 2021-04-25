import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import {client} from 'utils/Sanity'
import { ContentContext } from 'context/ContentContext';

const MediaEnriched = dynamic(() => import('./MediaEnriched'));

const WrappedDiv = styled.div`${props => props.styled}`

const WrappedMediaEnriched = (props) => {
  return <MediaEnriched {...props.node} />
}

const TextEnriched = ({classes,style,content}) => {
  const { item } = React.useContext(ContentContext)
  const externalLink = ({mark,children}) => {

    return (
    <a href={mark.href} target={'_blank'} className={mark.className}>{children}</a>
  )}
  const replaceText = props => (
      <>
        {props.children[0].replace(/\${(\w+)}/g, (_change,match) => item[match] || '')}
      </>
    )
  

  return <WrappedDiv className={classes} styled={style}>
    <BlockContent
        blocks={content}
        serializers={{
          marks: {replace: replaceText, externalLink: externalLink },
          types: {mediaEnriched: WrappedMediaEnriched}
        }}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
  </WrappedDiv>;
}

export default React.memo(TextEnriched);