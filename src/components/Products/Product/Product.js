import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductImage from './ProductImage/ProductImage';
import classes from './Product.css';
import Button from '../../UI/Button/Button';
import Drawer from '../../UI/Drawer/Drawer';

class Product extends Component {

  state = {
    showProductDrawer: false
  }

  closeProductDrawerHandler = () => {
    this.setState({showProductDrawer: false});
  }

  openProductDrawerHandler = () => {
    this.setState({showProductDrawer: true});
  }

  render () {
    return (
        <div className={classes.ProductContainer} onMouseEnter={this.openProductDrawerHandler} onMouseLeave={this.closeProductDrawerHandler}>
          <Drawer open={this.state.showProductDrawer} />
          <ProductImage imgType="ProductThumb" src={this.props.src} alt={this.props.alt} />
          <div className={classes.ProductTitle}>
            <h2>{this.props.title}</h2>
            <hr />
          </div>
          <div className={classes.ProductPrice}>
            <p>CA$ <span>{this.props.price}</span></p>
          </div>
          <Button btnType="BtnProduct" btnVisibility="BtnVisibility">Add to Cart</Button>
        </div>
    );
  }
}

Product.PropTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default Product;