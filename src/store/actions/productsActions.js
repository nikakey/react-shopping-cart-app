import * as actionTypes from './actionTypes';
import axios from '../../axios-products';



export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};

export const fetchProductsFailed = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED
  };
};

export const fetchProducts = () => {
  return dispatch => {
    axios.get('https://react-shopping-cart-app.firebaseio.com/products.json')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailed());
      });
  };
};