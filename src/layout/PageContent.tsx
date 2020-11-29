import React from 'react';
import Content from '../content/Content'
import Navbar from '../navigation/Navbar';

enum Blocks {
  CONTENT = 'content',
  TEXT_ENRICHED = 'textEnriched',
  MENU = 'menu'
}

const validBlocks = {
  [Blocks.CONTENT]: Content,
  [Blocks.MENU]: Navbar,
};

const PageContent = ({ blocks }) => {
  return blocks.map((block,id) => {
    const type = block.type
    if (validBlocks[type]) {
      const Component = validBlocks[type]
      return <Component key={id} {...block}/>
    }
    return null
  })

}

export default React.memo(PageContent);