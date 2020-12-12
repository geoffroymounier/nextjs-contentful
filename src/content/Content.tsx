import React from 'react';

import dynamic from 'next/dynamic';

const TextEnriched = dynamic(() => import('./TextEnriched'));
const MediaEnriched = dynamic(() => import('./MediaEnriched'));
const Buttons = dynamic(()=> import('./Buttons'));

type ContentProps = {
  items: any[];
  classes?: string;
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

function Content({ items, classes, style }: ContentProps) {
  return (
    <div className={classes} style={style}>
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
    </div>
  );
}

export default React.memo(Content);
