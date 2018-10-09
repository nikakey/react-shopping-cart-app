import React from 'react';

import classes from './Drawer.css';

const drawer = (props) => {
  
  let attachedClasses = [classes.Drawer, classes.ClosedDrawer];

  if (props.open) {
    attachedClasses = [classes.Drawer, classes.OpenedDrawer];
  }

  return(
    <div className={attachedClasses.join(' ')} >

    </div>
  );
  
};

export default drawer;