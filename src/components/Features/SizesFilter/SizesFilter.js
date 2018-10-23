import React, {Component} from 'react';

import classes from './SizesFilter.css';
import SizesFilterProp from './SizesFilterProp/SizesFilterProp';

const sizes = [
  '4',
  '6',
  '6.5',
  '7',
  '7.5',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11'
];

class SizesFilter extends Component {

  render () {
    return (
      <div className={classes.SizesFilterContainer}>
        <h3>Sizes:</h3>
        <div className={classes.SizesFilter}>
          {sizes.map(size => ( 
            <SizesFilterProp
              label={size}
              key={size}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SizesFilter;