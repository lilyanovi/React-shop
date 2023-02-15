import React from 'react';
import classes from './CardButton.module.scss'

export const CardButton = ({children, ...props}) => {
 return (
  <button {...props} className={classes.cardBtn}>
   {children}
  </button>
 );
};

// export default CardButton;