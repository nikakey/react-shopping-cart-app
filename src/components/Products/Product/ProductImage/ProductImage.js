import React from 'react';

import classes from './ProductImage.css';

const productImage = (props) => (
  <div className={classes[props.imgType]}>
    <img src={props.src} alt={props.alt} />
  </div>
);

export default productImage;