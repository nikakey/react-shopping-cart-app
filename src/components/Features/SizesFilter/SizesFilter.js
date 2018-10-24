import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './SizesFilter.css';
import SizesFilterProp from './SizesFilterProp/SizesFilterProp';
import * as filtersActions from '../../../store/actions';

const sizes = [
  '4',
  '6',
  '6.5',
  '7',
  '7.5',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11'
];

class SizesFilter extends Component {

  componentWillMount () {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckboxChangeHandler = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.onFiltersUpdate(Array.from(this.selectedCheckboxes));
  }

  render () {
    return (
      <div className={classes.SizesFilterContainer}>
        <h3>Sizes:</h3>
        <div className={classes.SizesFilter}>
          {sizes.map(size => ( 
            <SizesFilterProp
              label={size}
              key={size}
              toggleCheckboxChange={this.toggleCheckboxChangeHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters.filters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFiltersUpdate: (filters) => dispatch(filtersActions.updateFilters(filters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SizesFilter);