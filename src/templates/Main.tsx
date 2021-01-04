import React from 'react';
import Navbar from '../navigation/Navbar';
import PageContent from '../layout/PageContent';

type IMainProps = {
  meta: React.ReactNode;
  banner?: React.ReactNode;
  children: React.ReactNode;
  header?: any
};

const Main = (props: IMainProps) => {
  const [{ sticky, offset },setSticky] = React.useState({ sticky: false, offset: 0 })
  const menuHeight = React.useRef<HTMLDivElement>()
  React.useEffect(()=>{
    const handleScroll = (elTopOffset, elHeight) => {

      if (window?.pageYOffset > (elTopOffset + elHeight )) {
        setSticky({ sticky: true, offset: elHeight });
      } else {
        setSticky({ sticky: false, offset: 0 });
      }
    };
    const header = menuHeight.current

    const handleScrollEvent = () => {
      
      handleScroll(header.offsetTop, header.clientHeight)
    }

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  },[menuHeight.current,setSticky])
  return (
    <div className="antialiased w-full text-gray-700">
      {props.meta}

      <div className={'min-h-screen flex flex-col'} style={{marginTop:offset}}>
        <div>
          {props.banner && <PageContent blocks={[props.banner]} />}
          {props.header ? <Navbar ref={menuHeight} {...props.header} sticky={sticky} /> : <div ref={menuHeight}/> }

        </div>

        {props.children}

        <div className="border-t border-gray-300 text-center py-8">
          Made with
        {' '}
          <span role="img" aria-label="Love">
            ♥
        </span>
        </div>
      </div>
    </div>
  );
}
export default Main;
