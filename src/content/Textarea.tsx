import React from 'react';
import styled from 'styled-components';



const TextAreaWrapper = styled.textarea`
${props => props.styled}`



const TextArea = (props) => {

  
  return (
    <TextAreaWrapper {...props}  {...props.input}  {...props.field}  className={props.classes} styled={props.style} />
  );
};

export default React.memo(TextArea);
