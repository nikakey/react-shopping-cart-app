import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null,
  error: false
}

const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products
  }
};

const fetchProductsFailed = (state, action) => {
  return {
    ...state,
    error: true
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS: return setProducts(state, action);
    case actionTypes.FETCH_PRODUCTS_FAILED: return fetchProductsFailed(state, action);
    default: return state;
  }
};

export default reducer;