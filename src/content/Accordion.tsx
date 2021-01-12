import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Content from './Content';
import MediaEnriched from './MediaEnriched';
import TextEnriched from './TextEnriched';

type AccordionProps = {
  header: any;
  bullet?: any;
  content: any;
  classes?: string;
  styled?: string;
  itemClasses?: string;
  itemStyle?: string;
};

const ContentWrapper = styled.div`
${props => props.styled}

`

const WrappedDiv = styled.div`
${props => props.styled}`

const Accordion: React.FC<AccordionProps> = ({
  header, bullet, content, classes, styled, itemClasses, itemStyle
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <WrappedDiv className={classes} styled={styled}>
      <div
        className={'header'}
        onClick={toggle}
      >
        {bullet && <MediaEnriched {...bullet} classes={classnames(bullet.classes,isOpen && 'open')} />}
        <TextEnriched {...header} />
      </div>
        <Content {...content} classes={classnames(content.classes, itemClasses, isOpen && 'open')} />
    </WrappedDiv>
  );
};

export default React.memo(Accordion);
