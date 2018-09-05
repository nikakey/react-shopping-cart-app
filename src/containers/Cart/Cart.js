import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

class Cart extends Component {
  render () {
    return (
      <Aux>
        <div>Purchase</div>
        <div>Total Price</div>
        <div>Checkout Btn</div>
      </Aux>
    );
  }
}

export default Cart;