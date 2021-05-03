import React from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import styled from 'styled-components'
import { useIntersectionObserver } from 'utils/hooks/useIntersectionObserver';
const TextEnriched = dynamic(() => import('./TextEnriched'));
const MediaEnriched = dynamic(() => import('./MediaEnriched'));
const Button = dynamic(()=> import('./Button'));
const Accordion = dynamic(()=> import('./Accordion'));
const Form = dynamic(()=> import('./Form'));


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
  FORM = 'form',
  ACCORDION = 'accordion'
}

const validItems = {
  [Items.CONTENT]: Content, // eslint-disable-line @typescript-eslint/no-use-before-define
  [Items.TEXT_ENRICHED]: TextEnriched,
  [Items.FORM]: Form,
  [Items.MEDIA_ENRICHED]: MediaEnriched,
  [Items.BUTTON]: Button,
  [Items.ACCORDION]: Accordion
};

function Content({ items, background, classes, style }: ContentProps) {
  const elementRef = React.useRef(null);
  // const [inView, entry] = useIntersectionObserver(elementRef, {
  //   threshold: 0.2,
  //   rootMargin: "100px 0px 0px 0px"

  // });
//, { 'entry': entry, 'view': inView }
  return (
    <WrappedDiv  ref={elementRef} className={cn(classes)} styled={style} hasBackground={!!background?.length}>
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
