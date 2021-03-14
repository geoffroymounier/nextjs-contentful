import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components'
const TextEnriched = dynamic(() => import('./TextEnriched'));
const MediaEnriched = dynamic(() => import('./MediaEnriched'));
const Button = dynamic(()=> import('./Button'));
const Accordion = dynamic(()=> import('./Accordion'));


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
  BUTTON = 'button',
  ACCORDION = 'accordion'
}

const validItems = {
  [Items.CONTENT]: Content, // eslint-disable-line @typescript-eslint/no-use-before-define
  [Items.TEXT_ENRICHED]: TextEnriched,
  [Items.MEDIA_ENRICHED]: MediaEnriched,
  [Items.BUTTON]: Button,
  [Items.ACCORDION]: Accordion
};

function Content({ items, background, classes, style }: ContentProps) {
  return (
    <WrappedDiv className={classes} styled={style} hasBackground={!!background?.length}>
      {background?.length ? <MediaEnriched {...background[0]} isBackground/> : null}
      {items ? items.map((item, id) => {
        const { _type } = item;
        if (validItems[_type]) {
          const Component = validItems[_type];
          return (
            <Component
              key={id.toString()}
              {...item} // eslint-disable-line react/jsx-props-no-spreading
            />
          );
        }
        return null;
      }) : null}
    </WrappedDiv>
  );
}

export default React.memo(Content);
