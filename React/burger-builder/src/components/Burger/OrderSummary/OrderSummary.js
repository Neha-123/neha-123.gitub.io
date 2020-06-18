import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
//import burgerIngredient from '../BurgerIngredient/BurgerIngredient';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key = {igKey} >
                    <span style = {{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>)
    });

    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious Burger wiyth the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Amount : {props.totalPriceValue.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {props.modalclose}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.continuePurchase}>CONTINUE</Button>
        </Auxiliary>
       
    )
}

export default orderSummary;