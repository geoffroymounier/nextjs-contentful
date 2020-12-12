import React from 'react';
import dynamic from 'next/dynamic'
import classnames from 'classnames';
import styled from 'styled-components'
const MediaEnriched = dynamic(() => import('../content/MediaEnriched'));
const Button = dynamic(() => import('../content/Button'));
enum Items {
  MEDIA_ENRICHED = 'mediaEnriched',
  BUTTON = 'buttonField',
}

const validItems = {
  [Items.MEDIA_ENRICHED]: MediaEnriched,
  [Items.BUTTON]: Button,
};

const HeaderWrapper = styled.header`${props => props.styled}`;
const MenuContext = React.createContext({
  openMenu: '',
  changeOpenMenu: (e) => { return e },
})

function MenuItem(props) {
  const buttonRef = React.useRef(null)
  const { openMenu, changeOpenMenu } = React.useContext(MenuContext)
  const { items, classes, style, link, itemClasses, itemStyle } = props

  if (items?.length) {
    return (
      <div className={classes} style={style}>

        {link ?
          <div
            ref={buttonRef}
            onMouseEnter={() => changeOpenMenu(props.name)}
          >
            <Button {...props.link} />
            {openMenu === props.name && <ul
              onMouseEnter={() => changeOpenMenu(props.name)}
              className={classnames('absolute z-10', itemClasses)}
              style={itemStyle}
            >
              {items.map((item, idx) => {
                return <MenuItem key={idx} {...item} />
              })}
            </ul>}
          </div> :
          <ul
            onMouseEnter={() => changeOpenMenu(props.name)}
            className={classnames('', itemClasses)}
            style={itemStyle}
          >
            {items.map((item, idx) => {
              return <MenuItem key={idx} {...item} />
            })}
          </ul>
        }


      </div>
    )
  } else if (validItems[props.type]) {
    const Component = validItems[props.type]
    
    return (<li className={classes} style={style}><Component {...props} /></li>)
  } else return null

}

const Navbar = (props: any, ref) => {
  const [openMenu, setOpenMenu] = React.useState<string>('')
  const changeOpenMenu = (e: string) => setOpenMenu(e)

  return (
    <HeaderWrapper
      ref={ref}

      onMouseLeave={() => changeOpenMenu('')}
      sticky={props.sticky}
      className={classnames(`${props.sticky ? 'fixed' : ''} ${props.classes}`)} styled={props.styled}>
      <MenuContext.Provider value={{ openMenu, changeOpenMenu }}>
        <MenuItem {...props.desktop} />
      </MenuContext.Provider>
    </HeaderWrapper>
  )
};

export { MenuItem }
export default React.forwardRef(Navbar);
