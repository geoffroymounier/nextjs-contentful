import React from 'react';

const Button = ({ linkType, label, href, classes, style }) => {

  if (linkType === 'a') {
    return <a href={href} className={classes} style={style}>{label}</a>
  } 
  return <button onClick={()=>{}} className={classes} style={style}>{label}</button>

  
}

export default Button;