import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import BlogList from './BlogList'
import { ContentContext } from '../context/ContentContext'

const WrappedDiv = styled.div`
position : ${props => props.hasBackground ? 'relative' : 'initial'};
${props => props.styled}`

const Blog = (props) => {
  const { item: { content } } = React.useContext(ContentContext)
  if (props.nbArticles > 1) {
    return (
      <BlogList {...props}/>
    )
  }
  return (
    <WrappedDiv className={props.classes} styled={props.style} >
      {ReactHtmlParser(content)}
    </WrappedDiv>
  );
}

export default Blog