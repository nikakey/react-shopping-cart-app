import * as actionTypes from './actionTypes';

export const updateFilters = (filters) => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_FILTERS,
      filters: filters
    });
  };
};