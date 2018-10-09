import React, {Component} from 'react';

import classes from './Stock.css';
import Aux from '../../hoc/Aux';
import Products from '../../components/Products/Products';
import Features from '../../components/Features/Features';

class Stock extends Component {

  state = {
    loading: false
  }

  render () {

    return (
      <Aux>
        <div>Products Counter</div>
        <div className={classes.StockContainer}>
          <Features />
          <Products />
        </div>
      </Aux>
      
    );
  }
}

export default Stock;