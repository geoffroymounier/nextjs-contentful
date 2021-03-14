import React from 'react';
import dynamic from 'next/dynamic'
import classnames from 'classnames';
import {CSSTransition} from 'react-transition-group'
import { useWidth } from '../utils/env'
import styled from 'styled-components'

const Button = dynamic(() => import('../content/Button'));
const MediaEnriched = dynamic(() => import('../content/MediaEnriched'));

enum Items {
  MEDIA_ENRICHED = 'mediaEnriched',
  BUTTON = 'button',
}

interface MenuItemProps {
  items: any,
  name: string,
  type: string,
  classes: string,
  style: string,
  link: any,
  itemClasses: string,
  itemStyle: string,
  interactionIn: string[]
  subItemType?:string;
  changeOnHover?: boolean;
}

const validItems = {
  [Items.MEDIA_ENRICHED]: MediaEnriched,
  [Items.BUTTON]: Button,
};
const WrappedDiv = styled.div`${props => props.styled}`;
const WrappedUl = styled.ul`${props => props.styled}`;
const WrappedLi = styled.li`${props => props.styled}`;

const HeaderWrapper = styled.header`${props => props.styled}`;
const MenuContext = React.createContext({
  openMenu: '',
  changeOpenMenu: (e) => { return e },
})

const MenuItem: React.FC<MenuItemProps> = React.memo((props) => {
  const buttonRef = React.useRef(null)
  
  const { openMenu, changeOpenMenu } = React.useContext(MenuContext)
  const { items, classes, style, link, itemClasses, itemStyle, interactionIn = [] } = props
  if (items?.length) {
    return (
      <WrappedDiv className={classes} styled={style}>

        {link?.length ?
          <li
            ref={buttonRef}
            onMouseEnter={() =>interactionIn.findIndex(val => val === 'hover') > -1 && changeOpenMenu(props.name)}
            onClick={() => interactionIn.findIndex(val => val === 'click') > -1 && changeOpenMenu(props.name)}
          >
            <Button {...props.link[0]} />
            {<CSSTransition in={openMenu === props.name} timeout={200} classNames="transition">
              <WrappedUl
              className={classnames('absolute z-10', itemClasses)}
              styled={itemStyle}
            >
              {items.map((item, idx) => {
                return <MenuItem key={idx} {...item}  />
              })}
            </WrappedUl>
            </CSSTransition>
            }
          </li> :
          <WrappedUl
          onMouseEnter={() =>interactionIn.findIndex(val => val === 'hover') > -1 && changeOpenMenu(props.name)}
            onClick={() => interactionIn.findIndex(val => val === 'click') > -1 && changeOpenMenu(props.name)}
            className={classnames('', itemClasses)}
            styled={itemStyle}
          >
            {items.map((item, idx) => {
              return <MenuItem key={idx} {...item} />
            })}
          </WrappedUl>
        }
      </WrappedDiv>
    )
  } else if (validItems[props["_type"]]) {
    const Component = validItems[props["_type"]]

    return (<WrappedLi className={classes} styled={style}><Component {...props} /></WrappedLi>)
  } else return null

})

const Navbar = (props: any, ref) => {
  const [openMenu, setOpenMenu] = React.useState<string>('')
  const top = ref.current?.offsetTop
  const [width] = useWidth()
  const menu = React.useMemo(() => width > 700 ? props.desktop[0] : props.mobile[0] ,[width])
  const changeOpenMenu = (e: string) => setOpenMenu(e)
  
  return (
    <>
      <div
        onClick={() => changeOpenMenu('')}
        onMouseEnter={() => changeOpenMenu('')}
        className={'transition-all inset-x-0 fixed bg-gray-500'}
        style={{
          top,
          zIndex: openMenu ? 10 : 0,
          bottom: openMenu ? '0%' : '100%',
          opacity: openMenu ? '0.5' : '0',
        }}>
      </div>
      <HeaderWrapper
        ref={ref}

        sticky={props.sticky}
        className={classnames(`${props.sticky ? 'fixed' : 'relative'} ${props.classes}`)} styled={props.styled}>

        <MenuContext.Provider value={{ openMenu, changeOpenMenu }}>
          <MenuItem {...menu} />
        </MenuContext.Provider>
      </HeaderWrapper>
    </>

  )
};

export { MenuItem }
export default React.forwardRef(Navbar);
