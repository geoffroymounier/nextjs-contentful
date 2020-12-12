import React from 'react';
import styled from 'styled-components';

const WrappedImg = styled.img`${props => props.styled}`
type MediaEnrichedProps = {
  media: {
    file: {
      url: string;
    };
    title: string;
  };
  classes?: string;
  style?: any;
};

const MediaEnriched: React.FC<MediaEnrichedProps> = ({ media, classes, style }) => {
  const {
    file: { url },
    title,
  } = media;
  return <WrappedImg alt={title} className={classes} src={`${url}?fm=jpg&fl=progressive`} styled={style} />;
};

export default React.memo(MediaEnriched);
