import React from 'react';
import Button from '../content/Button'
import classnames from 'classnames';


const MenuContext = React.createContext({
  openMenu: '',
  changeOpenMenu: (e) => { return e}
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
  } else {
    return (<li className={classes} style={style}><Button {...props} /></li>)
  }

}

const Navbar = (props: any) => {
  const [openMenu, setOpenMenu] = React.useState<string>('')

  const changeOpenMenu = (e: string) => setOpenMenu(e)

  return (
    <header onMouseLeave={() => changeOpenMenu('')} className={props.classes} style={props.style}>
      <MenuContext.Provider value={{ openMenu, changeOpenMenu }}>
        <MenuItem {...props.desktop} />
      </MenuContext.Provider>
    </header>
  )
};

export {MenuItem}
export default React.memo(Navbar);
