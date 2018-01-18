import React from 'react';
import Aaux from '../../hoc/Aaux';
import classes from './Layout.css';

const layout = ( props ) => (
  <Aaux>
    <div> Tollbar, sidebar, backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aaux>
);

export default layout;
