import React, {Component} from 'react';
import axios from 'axios';

import Product from './Product/Product';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Products.css';

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
        return <Product title={this.state.products[prodKey].title} price={this.state.products[prodKey].price} key={prodKey} src={require(`../../assets/products-stock/${this.state.products[prodKey].sku}_1.jpg`)} alt={this.state.products[prodKey].title} />
      });
    }
      
    return (
      <div className={classes.ProductsContainer}>
        {products}
      </div>
    );
  }
}

export default Products;