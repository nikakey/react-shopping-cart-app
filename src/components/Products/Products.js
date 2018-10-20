import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as productsActions from '../../store/actions';
import Product from './Product/Product';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Products.css';

class Products extends Component {

  state = {
    products: null
  }

  componentDidMount () {
    console.log("didm");
    this.props.onFetchProducts();
  }

  render () {

    let products = this.props.error ? <p>Products can't be loaded.</p> : <Spinner />;
    
    if (this.props.products) {
      products = Object.keys(this.props.products).map(prodKey => {
        return <Product title={this.props.products[prodKey].title} price={this.props.products[prodKey].price} key={prodKey} src={require(`../../assets/products-stock/${this.props.products[prodKey].sku}_1.jpg`)} alt={this.props.products[prodKey].title} />
      });
    }
      
    return (
      <div className={classes.ProductsContainer}>
        {products}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    error: state.products.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(productsActions.fetchProducts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);