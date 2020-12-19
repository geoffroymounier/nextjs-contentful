import React from 'react';
import styled from 'styled-components';
import MediaEnriched from './MediaEnriched';

type ButtonProps = {
  href: string;
  label: string;
  media?: any;
  linkType: 'a' | 'button';
  classes?: string;
  style?: any;
  styled?: string;
};

const LinkWrapper = styled.div`${props => props.styled}`
const ButtonWrapper = styled.button`${props => props.styled}`

const Button: React.FC<ButtonProps> = ({
  linkType, label, media, href, classes, style
}) => {
  if (linkType === 'a') {
    return (
      <LinkWrapper className={classes} styled={style} onClick={() => window.location.href = (href)}>
        <a href={href} >
          {media ? <MediaEnriched {...media}/> : label}
        </a>
      </LinkWrapper>
    );
  }
  return (
    <ButtonWrapper type="button" onClick={() => {}} className={classes} styled={style}>
      {media ? <MediaEnriched {...media}/> : label}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
