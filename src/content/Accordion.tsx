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

const WrappedDiv = styled.div`
${props => props.styled}`

const Accordion: React.FC<AccordionProps> = ({
  header, bullet, content, classes, styled, itemClasses
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <WrappedDiv className={classnames('accordion',classes)} styled={styled}>
      <div
        className={'header'}
        onClick={toggle}
      >
        {bullet && <MediaEnriched {...bullet[0]} classes={classnames(bullet[0].classes,isOpen && 'open')} />}
        <TextEnriched {...header[0]} />
      </div>
        <Content {...content[0]} classes={classnames(content[0].classes, itemClasses, (isOpen && 'open'))} />
    </WrappedDiv>
  );
};

export default React.memo(Accordion);
