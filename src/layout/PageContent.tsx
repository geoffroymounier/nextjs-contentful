import React from 'react';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('../content/Content'));
const Navbar = dynamic(() => import('../navigation/Navbar'));

enum Blocks {
  CONTENT = 'content',
  TEXT_ENRICHED = 'textEnriched',
  MENU = 'menu',
}

const validBlocks = {
  [Blocks.CONTENT]: Content,
  [Blocks.MENU]: Navbar,
};

const PageContent = ({ blocks }) => blocks.map((block, id: number) => {
  const { type } = block;
  if (validBlocks[type]) {
    const Component = validBlocks[type];
    // eslint-disable-next-line max-len
    return <Component key={id.toString()} {...block} />; // eslint-disable-line react/jsx-props-no-spreading
  }
  return null;
});

export default React.memo(PageContent);
