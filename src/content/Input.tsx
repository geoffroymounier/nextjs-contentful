import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
${props => props.styled}`

const Input = (props) => {
  return (
    <InputWrapper {...props} {...props.input}  {...props.meta}  {...props.field} className={props.classes} styled={props.style} />
  );
};

export default React.memo(Input);
