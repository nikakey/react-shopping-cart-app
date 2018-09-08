import React from 'react';

import ProductImage from './ProductImage/ProductImage';
import classes from './Product.css';

const product = (props) => {
  return (
    <div className={classes.ProductContainer}>
      <ProductImage classes={classes.ProductThumb} src={props.src} alt={props.alt} />
      <div className={classes.ProductTitle}>
        <h2>{props.title}</h2>
        <hr />
      </div>
      <div className={classes.ProductPrice}>
        <p>CA$ <span>{props.price}</span></p>
      </div>
    </div>
  );
};

export default product;