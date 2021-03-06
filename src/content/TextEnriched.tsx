import React from 'react';
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import {client} from 'utils/Sanity'
import { ContentContext } from 'context/ContentContext';
import MediaEnriched from './MediaEnriched';
const WrappedDiv = styled.div`${props => props.styled}`


const WrappedMediaEnriched = (props) => {
  return <MediaEnriched {...props.node} />
}

const TextEnriched = ({classes,style,content}) => {
  const { item } = React.useContext(ContentContext)

  const replaceText = props => (
      <>
        {props.children[0].replace(/\${(\w+)}/g, (_,match) => item[match])}
      </>
    )
  

  return <WrappedDiv className={classes} styled={style}>
    <BlockContent
        blocks={content}
        serializers={{
          marks: {replace: replaceText },
          types: {mediaEnriched: WrappedMediaEnriched}
        }}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
  </WrappedDiv>;
}

export default React.memo(TextEnriched);