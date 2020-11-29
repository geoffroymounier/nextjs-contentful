import React from 'react';

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
  return <img alt={title} className={classes} src={`${url}?fm=jpg&fl=progressive`} style={style} />;
};

export default React.memo(MediaEnriched);
