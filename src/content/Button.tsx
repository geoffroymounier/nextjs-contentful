import React from 'react'
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const MediaEnriched = dynamic(() => import('content/MediaEnriched'));

type ButtonProps = {
  href: string;
  label: string;
  onClick?: (e?:any) => void;
  media?: any;
  linkType: 'a' | 'button';
  type?: string;
  classes?: string;
  style?: any;
  disabled?:boolean;
  styled?: string;
};

const LinkWrapper = styled.div`
position:relative;
${props => props.styled}`

const ButtonWrapper = styled.button`
position:relative;
${props => props.styled}`

const Button: React.FC<ButtonProps> = ({
  linkType, label, media, href, classes, style, onClick, type, disabled
}) => {

  if (linkType === 'a') {
    return (
      <LinkWrapper className={classes} styled={style} onClick={() => window.location.href = (href)} disabled={disabled}>
        <a href={href} >
          {media?.length ? <MediaEnriched {...(media)[0]}/> : label}
        </a>
      </LinkWrapper>
    );
  }
  return (
    <ButtonWrapper type={type || "button"} onClick={() => onClick?.()} className={classes} styled={style} disabled={disabled}>
      {media?.length  ? <MediaEnriched {...(media)[0]}/> : label}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
