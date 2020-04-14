import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.purchaseCancel} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <button onClick={props.purchaseCancel}>
                    X
            </button>
                {props.children}
            </div>
        </Auxiliary>
    );
};

export default modal;