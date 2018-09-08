import React from 'react';

const productImage = (props) => (
  <div className={props.classes}>
    <img src={props.src} alt={props.alt} />
  </div>
);

export default productImage;