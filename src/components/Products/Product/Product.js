import React from 'react';
import classes from './Product.css';

const product = (props) => {
  return (
    <div className={classes.Product}>
      <div>{props.title}</div>
    </div>
  );
};

export default product;