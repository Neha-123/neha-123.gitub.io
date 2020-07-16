import React from 'react';
import styled from 'styled-components';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {

    const Styleddiv = styled.div`
        width: 80%;
        text-align:center;
        margin: auto;
        @media (min-Width:600px) {
            width:500px;
        }
    `

    return(
        <Styleddiv>
            <h1>We hope it tastes Well!</h1>
            <div style={{width:'100%',  margin:'auto'}}>
                <Burger ingredients= {props.ingredients} />
            </div>
            <Button 
                btnType="Danger" 
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </Styleddiv>
    )
}

export default CheckoutSummary;