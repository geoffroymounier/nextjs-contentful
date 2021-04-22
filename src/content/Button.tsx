import React from 'react';
import styled from 'styled-components';
import MediaEnriched from './MediaEnriched';

type ButtonProps = {
  href: string;
  label: string;
  onClick?: (e?:any) => void;
  media?: any;
  linkType: 'a' | 'button';
  classes?: string;
  style?: any;
  styled?: string;
};

const LinkWrapper = styled.div`
position:relative;
${props => props.styled}`

const ButtonWrapper = styled.button`
position:relative;
${props => props.styled}`

const Button: React.FC<ButtonProps> = ({
  linkType, label, media, href, classes, style, onClick
}) => {

  if (linkType === 'a') {
    return (
      <LinkWrapper className={classes} styled={style} onClick={() => window.location.href = (href)}>
        <a href={href} >
          {media?.length ? <MediaEnriched {...(media)[0]}/> : label}
        </a>
      </LinkWrapper>
    );
  }
  return (
    <ButtonWrapper type="button" onClick={() => onClick?.()} className={classes} styled={style}>
      {media?.length ? <MediaEnriched {...(media)[0]}/> : label}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
