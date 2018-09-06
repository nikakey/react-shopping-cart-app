import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product/Product';

class Products extends Component {

  state = {
    products: {}
  }

  componentDidMount () {
    console.log("didm");
    axios.get('https://react-shopping-cart-app.firebaseio.com/products.json')
      .then(response => {
        this.setState({products: response.data});
        console.log("GET "+this.state.products);
      })
      .catch(error => {

      });
  }

  render () {

    let products = Object.keys(this.state.products).map(prodKey => {
      return <Product title={this.state.products[prodKey].title} key={prodKey} />
    });

    return (
      <div>
        {products}
      </div>
    );
  }
}

export default Products;