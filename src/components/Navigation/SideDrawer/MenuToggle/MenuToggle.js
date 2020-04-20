import React from 'react';

import classes from './MenuToggle.module.css';

const menuToggle = (props) => {
    return (
        <div className={classes.MenuToggle} onClick={props.clickedMenu}>
           <div></div>
           <div></div>
           <div></div>
        </div>
    );
};

export default menuToggle;