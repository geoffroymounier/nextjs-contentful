import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components'

const WrappedDiv = styled.div`${props => props.styled}`


function TextEnriched({classes,style,text}) {
  return <WrappedDiv className={classes} styled={style}>{ReactHtmlParser(text)}</WrappedDiv>;
}

export default React.memo(TextEnriched);