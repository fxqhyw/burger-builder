import React from 'react';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
  <Aux>
    <div> Tollbar, sidebar, backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
