import React from 'react';

const MediaEnriched = ({ media, name, classes, style }) => {

  const { file: { contentType, url }, title } = media

  return <img alt={title} className={classes} src={url} style={style} />
}

export default MediaEnriched;