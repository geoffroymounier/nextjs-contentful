import React from 'react';

const MediaEnriched = ({ media, classes, style }) => {

  const { file: {  url }, title } = media

  return <img alt={title} className={classes} src={url} style={style} />
}

export default React.memo(MediaEnriched);