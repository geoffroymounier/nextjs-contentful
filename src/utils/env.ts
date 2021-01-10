import React from 'react';
const isBrowser = () => !!process.browser
const isDev = process.env.NODE_ENV === 'development'


const useWidth = (elementRef?) => {
    const [width, setWidth] = React.useState(null);

    const updateWidth = React.useCallback(() => {
        if(elementRef) {
            const { width } = elementRef.getBoundingClientRect();
            setWidth(width);
        } else {
          const { width : windowWidth } = document.body.getBoundingClientRect();
          setWidth(windowWidth)
        }
    }, [elementRef]);

    React.useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [updateWidth])

    return [width]
}

export {useWidth,isBrowser,isDev}