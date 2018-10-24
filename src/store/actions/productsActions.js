import * as actionTypes from './actionTypes';
import axios from '../../axios-products';

/* axios functions */

const getProducts = () => {
  return axios.get('/products.json');
}

const getModels = () => {
  return axios.get('/models.json');
}

const getStock = () => {
  return axios.get('/stock.json');
}

const joinTables = (models, products, stock) => {
  let res = {}

  for ( let key in products ) {
    let stockItems = [];

    for ( let id in stock ) {
      if( stock[id] != null && stock[id].product_id.toString() === key ) {
        stockItems.push(stock[id])
      }
    }

    res[key] = {
      price: products[key].price,
      sku: products[key].sku,
      color: products[key].color,
      model: models[products[key].model_id],
      stock: stockItems
    }
  }
  return res;
}


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

export const fetchProducts = (filters) => {
  return dispatch => {
    Promise.all([getModels(), getProducts(), getStock()])
      .then(results => {
        let data = joinTables(results[0].data, results[1].data, results[2].data);
        let data2 = {};
        if(filters !== undefined && filters !== null && filters.length > 0){
          
          for( let key in data ) {
            let sizes = new Set();
            for( let id in data[key].stock ) {
              
              if( data[key].stock[id].quantity > 0 ){
                sizes.add(data[key].stock[id].size_id);
              }
            }
            
            let filters2= new Set(filters);
            let intersection = new Set(
              [...sizes].filter(x => filters2.has(x))
            );
            
            if( [...intersection].length > 0 ) {
              data2[key] = data[key];
            }
            
          }
        }
        else {
          data2 = data;
        }
        
        dispatch(setProducts(data2));
      })
      .catch(error => {
        dispatch(fetchProductsFailed());
      });
  };
};