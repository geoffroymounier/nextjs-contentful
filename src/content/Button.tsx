import React from 'react';

type ButtonProps = {
  href: string;
  label: string;
  linkType: 'a' | 'button';
  classes?: string;
  style?: any;
};

const Button: React.FC<ButtonProps> = ({
  linkType, label, href, classes, style,
}) => {
  if (linkType === 'a') {
    return (
      <a href={href} className={classes} style={style}>
        {label}
      </a>
    );
  }
  return (
    <button type="button" onClick={() => {}} className={classes} style={style}>
      {label}
    </button>
  );
};

export default React.memo(Button);
