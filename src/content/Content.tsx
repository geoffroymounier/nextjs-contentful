import React from 'react';

import dynamic from 'next/dynamic';
import styled from 'styled-components'
const TextEnriched = dynamic(() => import('./TextEnriched'));
const MediaEnriched = dynamic(() => import('./MediaEnriched'));
const Buttons = dynamic(()=> import('./Buttons'));


const WrappedDiv = styled.div`
position : ${props => props.hasBackground ? 'relative' : 'initial'};
${props => props.styled}`

type ContentProps = {
  items: any[];
  classes?: string;
  background?: any;
  style?: any;
};

enum Items {
  CONTENT = 'content',
  TEXT_ENRICHED = 'textEnriched',
  MEDIA_ENRICHED = 'mediaEnriched',
  BUTTON = 'buttons',
}

const validItems = {
  [Items.CONTENT]: Content, // eslint-disable-line @typescript-eslint/no-use-before-define
  [Items.TEXT_ENRICHED]: TextEnriched,
  [Items.MEDIA_ENRICHED]: MediaEnriched,
  [Items.BUTTON]: Buttons,
};

function Content({ items, background, classes, style }: ContentProps) {

  return (
    <WrappedDiv className={classes} styled={style} hasBackground={!!background}>
      {background && <MediaEnriched {...background} isBackground/>}
      {items.map((item, id) => {
        const { type } = item;
        if (validItems[type]) {
          const Component = validItems[type];
          return (
            <Component
              key={id.toString()}
              {...item} // eslint-disable-line react/jsx-props-no-spreading
            />
          );
        }
        return null;
      })}
    </WrappedDiv>
  );
}

export default React.memo(Content);
