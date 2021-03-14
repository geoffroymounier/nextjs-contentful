import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Content = dynamic(() => import('../content/Content'));
const Navbar = dynamic(() => import('../navigation/Navbar'));
const Banner = dynamic(() => import('./Banner'));
const Blog = dynamic(() => import('./Blog'));


enum Blocks {
  CONTENT = 'content',
  BANNER = 'banner',
  MENU = 'menu',
  BLOG = 'blog'
}

const validBlocks = {
  [Blocks.CONTENT]: Content,
  [Blocks.MENU]: Navbar,
  [Blocks.BANNER]: Content,
  [Blocks.BLOG]: Blog
};

const WrappedDiv = styled.div`
${props => props.styled}`

type PageContentProps = {
  classes?: string;
  style?: string;
  blocks: any[]
}
const PageContent:React.FC<PageContentProps> = ({ blocks, classes, style }:PageContentProps) => {

  return (
    <WrappedDiv className={classes} styled={style}>
      {blocks.map((block, id: number) => {
        const { _type } = block;
        if (validBlocks[_type]) {
          const Component = validBlocks[_type];
          // eslint-disable-next-line max-len
          return <Component key={id.toString()} {...block} /> // eslint-disable-line react/jsx-props-no-spreading
        }
        return null;
      })}
    </WrappedDiv>
  );


}


export default React.memo(PageContent);
