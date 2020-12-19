import React from 'react';
import Button from './Button';

type ButtonProps = {
  buttons: any[];
  classes?: string;
  style?: any;
};

const Buttons: React.FC<ButtonProps> = ({
  buttons, classes, style,
}) => {
  return (
    <div className={classes} style={style}>
      {buttons.map((button,idx) =><Button key={idx} {...button}/> )}
    </div>
    
  );
};

export default React.memo(Buttons);
