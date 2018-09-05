import React, { Component } from 'react';

import Aux from './hoc/Aux';
import Stock from './containers/Stock/Stock';
import Cart from './containers/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Aux>
        <main>
          <Stock />
        </main>
        <Cart />
      </Aux>
    );
  }
}

export default App;
