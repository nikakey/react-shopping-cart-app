import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Products from '../../components/Products/Products';

class Stock extends Component {
  render () {
    return (
      <Aux>
        <Products />
        <div>Products Counter</div>
        <div>Price Sorter</div>
        <div>Sizes Filter</div>
      </Aux>
    );
  }
}

export default Stock;