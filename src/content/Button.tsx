import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href: string;
  label: string;
  linkType: 'a' | 'button';
  classes?: string;
  style?: any;
  styled?: string;
};

const LinkWrapper = styled.div`${props => props.styled}`
const ButtonWrapper = styled.button`${props => props.styled}`

const Button: React.FC<ButtonProps> = ({
  linkType, label, href, classes, style, styled
}) => {
  if (linkType === 'a') {
    return (
      <LinkWrapper className={classes} styled={styled} onClick={() => window.location.href = (href)}>
        <a href={href} >
          {label}
        </a>
      </LinkWrapper>
    );
  }
  return (
    <ButtonWrapper type="button" onClick={() => {}} className={classes} styled={style}>
      {label}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
