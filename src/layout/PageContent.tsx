import React from 'react';
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('../content/Content'));
const Navbar = dynamic(() => import('../navigation/Navbar'));
const Banner = dynamic(() => import('./Banner'));
const Blog = dynamic(() => import('./Blog'));


enum Blocks {
  CONTENT = 'content',
  BANNER= 'banner',
  MENU = 'menu',
  BLOG = 'blog'
}

const validBlocks = {
  [Blocks.CONTENT]: Content,
  [Blocks.MENU]: Navbar,
  [Blocks.BANNER]: Banner,
  [Blocks.BLOG]: Blog
};

const PageContent = ({ blocks }) => blocks.map((block, id: number) => {
  const { _type } = block;
  if (validBlocks[_type]) {
    const Component = validBlocks[_type];
    // eslint-disable-next-line max-len
    return <Component key={id.toString()} {...block} />; // eslint-disable-line react/jsx-props-no-spreading
  }
  return null;
});

export default React.memo(PageContent);
