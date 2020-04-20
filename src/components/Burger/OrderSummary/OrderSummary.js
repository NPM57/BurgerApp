import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;