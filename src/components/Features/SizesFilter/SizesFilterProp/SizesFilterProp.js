import React, { Component } from 'react';

import classes from './SizesFilterProp.css';

class SizesFilterProp extends Component {

  state = {
    isChecked: false
  }

  checkboxChangeHandler = () => {
    this.setState((prevState) => {
      return {isChecked: !prevState.isChecked};
    });
  }

  render () {
    return (
      <div className={classes.SizesFilterProp}>
        <label>
          {this.props.label}
          <input
            type='checkbox'
            value={this.props.label}
            checked={this.state.isChecked}
            onChange={this.checkboxChangeHandler}
          />
          <span className={classes.Checkmark}></span>
        </label>
      </div>
    );
  }

}

export default SizesFilterProp;