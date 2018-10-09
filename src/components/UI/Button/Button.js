import React from 'react';
import classes from './Button.css';

const button = (props) => (
  <button 
    className={[classes[props.btnType], classes.BtnVisibility].join(' ')}
    onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;