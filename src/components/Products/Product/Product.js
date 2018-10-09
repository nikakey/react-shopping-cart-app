import React from 'react';

import ProductImage from './ProductImage/ProductImage';
import classes from './Product.css';
import Button from '../../UI/Button/Button';
import Drawer from '../../UI/Drawer/Drawer';

const product = (props) => {
  return (
    <div className={classes.ProductContainer}>
      <ProductImage imgType="ProductThumb" src={props.src} alt={props.alt} />
      <div className={classes.ProductTitle}>
        <h2>{props.title}</h2>
        <hr />
      </div>
      <div className={classes.ProductPrice}>
        <p>CA$ <span>{props.price}</span></p>
      </div>
      <Button btnType="BtnProduct">Add to Cart</Button>
    </div>
  );
};

export default product;