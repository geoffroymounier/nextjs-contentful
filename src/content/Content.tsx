import React from 'react';
import TextEnriched from './TextEnriched'
import MediaEnriched from './MediaEnriched'

type ContentProps = {
  items: any[];
  classes?:string
  style?:any
};

enum Items {
  CONTENT = 'content',
  TEXT_ENRICHED = 'textEnriched',
  MEDIA_ENRICHED = 'mediaEnriched',
  BUTTONS = 'buttons'
}

const validItems = {
  [Items.CONTENT]: Content,
  [Items.TEXT_ENRICHED] : TextEnriched,
  [Items.MEDIA_ENRICHED] : MediaEnriched,
  [Items.BUTTONS] : TextEnriched,
};


function Content({items,classes,style}:ContentProps) {
  return (
  <div className={classes} style={style}>
    {items.map((item,id) => {
      const type = item.type
      if (validItems[type]) {
        const Component = validItems[type]
        return <Component key={id} {...item}/>
      }
      return null
    })}

  </div>
)};

export default  Content;
