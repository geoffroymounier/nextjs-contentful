import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { isBrowser, getWidth } from '../utils/env'

const WrappedImg = styled.img`
position : ${props => props.isBackground ? 'absolute' : 'initial'};
top : ${props => props.isBackground ? '0' : 'initial'};
${props => props.styled}`
type MediaEnrichedProps = {
  media: {
    file: {
      url: string;
    };
    title: string;
  };
  tablet: {
    file: {
      url: string;
    };
    title: string;
  };
  mobile: {
    file: {
      url: string;
    };
    title: string;
  };
  classes?: string;
  style?: any;
};

const MediaEnriched: React.FC<MediaEnrichedProps> = ({ media, tablet, mobile,isBackground, classes, style }) => {
  const pictureRef = React.useRef<string>(`${media.file.url}?fm=jpg&fl=progressive`)


  React.useEffect(() => {
    const handleResize = (e) => pictureRef.current = e.target.innerWidth > 1000 ?
      `${media.file.url}?fm=jpg&fl=progressive&w=1400`
      : e.target.innerWidth > 600 ?
        `${tablet?.file?.url || media.file.url}?fm=jpg&fl=progressive&w=1000`
        :
        `${mobile?.file?.url || tablet?.file?.url || media.file.url}?fm=jpg&fl=progressive&w=600`
    if (isBrowser()) {
      window.addEventListener('resize', handleResize)
      handleResize({ target: { innerWidth: getWidth() } })
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <picture >
      <source
        media="(min-width: 1440px)"
        srcSet={`${media.file.url}?fm=jpg&fl=progressive&w=2000`}
      />
      <source
        media="(min-width: 1000px) and (max-width : 1439px)"
        srcSet={`${media.file.url}?fm=jpg&fl=progressive&w=1400`}
      />
      <source
        media="(min-width: 600px) and (max-width : 999px)"
        srcSet={`${tablet?.file?.url || media.file.url}?fm=jpg&fl=progressive&w=1000`}
      />
      <WrappedImg
        className={classes} styled={style} isBackground={isBackground}
        alt={media.title}
        src={`${mobile?.file?.url || tablet?.file?.url || media.file.url}?fm=jpg&fl=progressive&w=600`}
      />
    </picture>
  )
};

export default React.memo(MediaEnriched);
