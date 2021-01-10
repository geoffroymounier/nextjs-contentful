import React from 'react';
import styled from 'styled-components';
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
${props => props.styled}`

const WrappedDiv = styled.div`
${props => props.styled}`

const Accordion: React.FC<AccordionProps> = ({
  header, bullet, content, classes, styled, itemClasses, itemStyle
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!toggle)
  const contentWrapperRef = React.useRef()
  return (
    <WrappedDiv className={classes} styled={styled}>
      <div
        className={'header'}
        onClick={toggle}
      >
        {bullet && <MediaEnriched {...bullet} />}
        <TextEnriched {...header} />
      </div>

      <ContentWrapper
        ref={contentWrapperRef}
        isOpen={isOpen}
        styled={itemStyle}
        className={itemClasses}
      >
        <Content {...content} />
      </ContentWrapper>
    </WrappedDiv>
  );
}
};

export default React.memo(Accordion);
