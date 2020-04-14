import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: "capitalize" }}>Selected {igkey}</span>:{" "}
                    {props.ingredients[igkey]}
                </li>
            )
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p> Your burger with selected ingredients: </p>
            <ul>
                {ingredients}
            </ul>
        </Auxiliary>
    );
};

export default orderSummary;