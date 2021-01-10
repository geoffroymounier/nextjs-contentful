import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useWidth } from '../utils/env'

const WrappedImg = styled.img`
position : ${props => props.isBackground ? 'absolute' : 'initial'};
top : ${props => props.isBackground ? '0' : 'initial'};
${props => props.styled}`
type MediaEnrichedProps = {
  media: {
    file: {
      url: string;
      contentType: string;
      details: {
        image : {
          height:number,
          width:number
        }
      }
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
  isBackground?:boolean;
};

const MediaEnriched: React.FC<MediaEnrichedProps> = ({ media, tablet, mobile,isBackground, classes, style }) => {
  const mediaTypeNotSvg = !/\/svg/.test(media.file.contentType)
  const {height,width} = media.file.details.image
  const pictureRef = React.useRef<string>(`${media.file.url}${mediaTypeNotSvg  ? `?fm=jpg&fl=progressive` : ''}`)
  const [viewPortWidth] = useWidth()
  React.useEffect(() => {
    const handleResize = () => pictureRef.current = viewPortWidth > 1000 ?
      `${media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=1400` : ''}`
      : viewPortWidth > 600 ?
        `${tablet?.file?.url || media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=1000` : ''}`
        :
        `${mobile?.file?.url || tablet?.file?.url || media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=600` : ''}`
        handleResize()
  }, [viewPortWidth])

  return (<LazyLoad>
    <picture >
      <source
        media="(min-width: 1440px)"
        srcSet={`${media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=2000` : ''}`}
      />
      <source
        media="(min-width: 1000px) and (max-width : 1439px)"
        srcSet={`${media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=1400` : ''}`}
      />
      <source
        media="(min-width: 600px) and (max-width : 999px)"
        srcSet={`${tablet?.file?.url || media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=1000` : ''}`}
      />
      <WrappedImg
      height={height} width={width}
        className={classes} styled={style} isBackground={isBackground}
        alt={media.title}
        src={`${mobile?.file?.url || tablet?.file?.url || media.file.url}${mediaTypeNotSvg ? `?fm=jpg&fl=progressive&w=600` : ''}`}
      />
    </picture>
    </LazyLoad>
  )
};

export default React.memo(MediaEnriched);
