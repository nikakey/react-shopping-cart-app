import React from 'react';

import classes from './Features.css';
import SizesFilter from './SizesFilter/SizesFilter';

const features = (props) => (
  <div className={classes.FeaturesContainer}>
    <div>Price Sorter</div>
    <SizesFilter />
  </div>
);

export default features;