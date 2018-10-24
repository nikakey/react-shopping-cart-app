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
    this.props.onFetchProducts(this.props.filters);
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters } = nextProps;

    if ( nextFilters !== this.props.filters ) {
      this.props.onFetchProducts(nextFilters);
    }

  }

  render () {

    let products = this.props.error ? <p>Products can't be loaded.</p> : <Spinner />;
    
    if (this.props.products) {
      products = Object.keys(this.props.products).map(prodKey => {
        return <Product data={this.props.products[prodKey]} key={prodKey} />
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
    error: state.products.error,
    filters: state.filters.filters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: (filters) => dispatch(productsActions.fetchProducts(filters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);