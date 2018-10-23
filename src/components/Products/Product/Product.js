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
          <ProductImage imgType="ProductThumb" src={require(`../../../assets/products-stock/${this.props.data.sku}_1.jpg`)} alt={this.props.data.model.title} />
          <div className={classes.ProductTitle}>
            <h2>{this.props.data.model.title}</h2>
            <h2>{this.props.data.color}</h2>
            <hr />
          </div>
          <div className={classes.ProductPrice}>
            <p>CA$ <span>{this.props.data.price}</span></p>
          </div>
          <Button btnType="BtnProduct" btnVisibility="BtnVisibility">Add to Cart</Button>
        </div>
    );
  }
}

Product.propTypes = {
  data: PropTypes.object.isRequired
};

export default Product;