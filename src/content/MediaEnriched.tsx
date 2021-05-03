import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash'
// import { useWidth } from '../utils/env'
import { ReactSVG } from 'react-svg'
import { client } from 'utils/Sanity'
import imageUrlBuilder from '@sanity/image-url'
import { ContentContext } from 'context/ContentContext';

const builder = imageUrlBuilder(client)

const WrappedDiv = styled.div``
const WrappedImg = styled.img`
position : ${props => props.isBackground ? 'absolute' : 'initial'};
top : ${props => props.isBackground ? '0' : 'initial'};
z-index : ${props => props.isBackground ? '-1' : 'unset'};
${props => props.styled}`
type MediaEnrichedProps = {
  media: {
    file: {
      url: string;
      contentType: string;
      details: {
        image: {
          height: number,
          width: number
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
  title: string;
  classes?: string;
  style?: any;
  isBackground?: boolean;
  alternative?: string;
};

function urlFor(source) {
  return builder.image(source)
}

const MediaEnriched: React.FC<MediaEnrichedProps> = ({ media: defaultMedia, title, alternative = '', isBackground, classes, style }) => {
  const { item } = React.useContext(ContentContext)

  const alternativeMedia = alternative.replace(/\${([\w\[\]\d\.]+)}/g, (_change, match) => {
    return JSON.stringify(get(item, match) || "{}")

  })
  const media = alternativeMedia ? JSON.parse(alternativeMedia) : defaultMedia
  const pictureRef = React.useRef(urlFor(media))


  if (/\.svg/.test(pictureRef.current.url().toString() || '')) {
    return (
      <ReactSVG  beforeInjection={(svg) => {
        svg.classList.add(`svg-${title.replace(/\s/g,'-')}`)
        svg.setAttribute('style', style)
      }} src={pictureRef.current.url()} loading={() => ( <WrappedImg className={classes} styled={style} src={pictureRef.current.url()} />)} />
    )

  }
  return (
    <picture >
      <source
        media="(min-width: 1440px)"
        srcSet={`${pictureRef.current.width(2000)}`}
      />
      <source
        media="(min-width: 1000px) and (max-width : 1439px)"
        srcSet={`${pictureRef.current.width(1400)}`}
      />
      <source
        media="(min-width: 600px) and (max-width : 999px)"
        srcSet={`${pictureRef.current.width(1000)}`}
      />
      <WrappedImg
        className={classes} styled={style} isBackground={isBackground}
        alt={media.title}
        src={`${pictureRef.current.width(600)}`}
      />
    </picture>

  )
};

export default React.memo(MediaEnriched);
