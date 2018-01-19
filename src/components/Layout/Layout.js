import React from 'react';
import Aaux from '../../hoc/Aaux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <Aaux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aaux>
);

export default layout;
