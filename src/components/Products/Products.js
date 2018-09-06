import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product/Product';
import Spinner from '../UI/Spinner/Spinner';

class Products extends Component {

  state = {
    products: null
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

    let products = <Spinner />
    
    if (this.state.products) {
      products = Object.keys(this.state.products).map(prodKey => {
        return <Product title={this.state.products[prodKey].title} key={prodKey} />
      });
    }
      
    return (
      <div>
        {products}
      </div>
    );
  }
}

export default Products;