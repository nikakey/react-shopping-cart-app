import * as actionTypes from '../actions/actionTypes';

const initialState = {
  filters: []
};

const updateFilters = (state, action) => {
  return {
    ...state,
    filters: action.filters
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTERS: return updateFilters(state, action);
    default: return state;
  }
};

export default reducer;