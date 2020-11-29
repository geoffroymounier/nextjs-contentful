import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MediaEnriched from './MediaEnriched';
import {unNestJson} from '../utils/Parser'
enum Items {
  TEXT_ENRICHED = 'textEnriched',
  MEDIA_ENRICHED = 'mediaEnriched',
  BUTTONS = 'buttons',
  BUTTON = 'buttonField'
}

const validItems = {
  // [Items.BUTTON]: Content,
  [Items.TEXT_ENRICHED] : TextEnriched,
  [Items.MEDIA_ENRICHED] : MediaEnriched,
  // [Items.BUTTONS] : TextEnriched,
};

const tagList = {
  h1 : ({children,className,style}) => <h1 className={className} style={style}>{children}</h1>,
  h2 : ({children,className,style}) => <h2 className={className} style={style}>{children}</h2>,
  h3 : ({children,className,style}) => <h3 className={className} style={style}>{children}</h3>,
  h4 : ({children,className,style}) => <h4 className={className} style={style}>{children}</h4>,
  h5 : ({children,className,style}) => <h5 className={className} style={style}>{children}</h5>,
  h6 : ({children,className,style}) => <h6 className={className} style={style}>{children}</h6>,
  label : ({children,className,style}) => <label className={className} style={style}>{children}</label>,
  p : ({children,className,style}) => <p className={className} style={style}>{children}</p>,
  span : ({children,className,style}) => <span className={className} style={style}>{children}</span>,

}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const type = node.data.target.sys.contentType.sys.id
      if (validItems[type]) {
        const Component = validItems[type]
        const props = unNestJson(node.data.target,{})
        return <Component {...props}/>
      }
      return null
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      const type = node.data.target.sys.contentType.sys.id

      if (validItems[type]) {
        const Component = validItems[type]
        const props = unNestJson(node.data.target,{})
        return <Component {...props}/>
      }
      return null
    }
  }
};

function TextEnriched({value,tag,classes,style,content}) {

  if (value && tag && tagList[tag]){
    const Tag = tagList[tag];
    return <Tag className={classes} style={style}>{value}</Tag>
  }
  return <div className={classes} style={style}>{documentToReactComponents(content,options)}</div>;
  
}

export default TextEnriched;