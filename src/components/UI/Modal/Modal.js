import React from 'react';
import Aaux from '../../../hoc/Aaux';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <Aaux>
        <BackDrop show={props.show} clicked={props.modalClosed} />
    <div 
        className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
    </Aaux>
);

export default modal;