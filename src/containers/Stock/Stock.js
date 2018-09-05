import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

class Stock extends Component {
  render () {
    return (
      <Aux>
        <div>Products</div>
        <div>Products Counter</div>
        <div>Price Sorter</div>
        <div>Sizes Filter</div>
      </Aux>
    );
  }
}

export default Stock;