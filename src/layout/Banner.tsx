import React, { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from "styled-components";
import Content from '../content/Content';

const WrappedTransition = styled.div`${props => props.styled}`
const WrappedBanner = styled.div`${props => props.styled}`

const Banner = ({ items, classes, duration, style, transitionStyle }) => {

  const isVideo = items.length === 1 && /mp4/.test(items[0].media.file.contentType)

  const manualChange = useRef(false)
  const [{ itemNumber, transitionClassName }, setId] = useState({
    itemNumber: 0,
    transitionClassName: 'transition'
  })

  const onFocus = () => (manualChange.current = true)
  const onBlur = () => (manualChange.current = false)


  const manualCarouselMove = index => {
    setId({ transitionClassName, itemNumber: index })
  }
  useInterval(() => {
    if (manualChange.current === true) {
      return
    }
    setId({
      transitionClassName,
      itemNumber: (itemNumber + 1) % items.length
    })
  }, duration)

  return (
    <WrappedBanner
      onFocus={onFocus}
      onBlur={onBlur}
      styled={style}
      className={classes}>
      {items.map(
        (
          item,
          idx
        ) => (
          <CSSTransition
            key={idx.toString()}
            mountOnEnter
            unmountOnExit
            in={idx === itemNumber}
            timeout={1000}
            classNames={transitionClassName}
          >
            <WrappedTransition styled={transitionStyle}>
              <Content
                {...item}
                isVideo={isVideo}
              />
            </WrappedTransition>
          </CSSTransition>
        )
      )}
      {/* <div data-index={itemNumber} className="banner__pagination">
          <CarouselPagination
            handleClickOutside={onBlur}
            classes="banner__pagination"
            buttonType={
              backgroundMode === 'bright'
                ? 'pagination--primary'
                : 'pagination--white'
            }
            imagesLength={bannerLength}
            setIndex={manualCarouselMove}
          />
        </div> */}


    </WrappedBanner>



  )
}
const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default Banner
