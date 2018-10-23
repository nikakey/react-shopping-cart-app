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

const getProducts = () => {
  return axios.get('/products.json');
}

const getModels = () => {
  return axios.get('/models.json');
}

const joinTables = (models, products) => {
  let res = {}
  for (let key in products)
  {
    res[key] = {
      price: products[key].price,
      sku: products[key].sku,
      color: products[key].color,
      model: models[products[key].model_id]
    }
  }
  return res;
}

export const fetchProducts = () => {
  return dispatch => {
    Promise.all([getModels(), getProducts()])
      .then(results => {
        const data = joinTables(results[0].data, results[1].data);
        dispatch(setProducts(data));
    });
  };
};