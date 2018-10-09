import React from 'react';

import classes from './Drawer.css';
import Button from '../Button/Button';

const drawer = (props) => {
  
  let attachedClasses = [classes.Drawer, classes.ClosedDrawer];
  let button = null;
  if (props.open) {
    attachedClasses = [classes.Drawer, classes.OpenedDrawer];
    button = <Button btnType="BtnProductDrawer">Add to Cart</Button>;
  }

  return(
    <div className={attachedClasses.join(' ')}>
      {button}
    </div>
  );
  
};

export default drawer;