import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label : 'Salad', type: 'salad' },
    { label : 'Meat', type: 'meat' },
    { label : 'Bacon', type: 'bacon' },
    { label : 'Cheese', type: 'cheese' },
]

const buildControls = (props) => {

    const Styleddiv = styled.div`
        width: 100%;
        background-color: #CF8F2E;
        display: flex;
        flex-flow: column;
        align-items: center;
        box-shadow: 0 2px 1px #ccc;
        margin: auto;
        padding: 10px 0;
    `
    const StyledButton = styled.button`
        background-color: #DAD735;
        outline: none;
        cursor: pointer;
        border: 1px solid #966909;
        color: #966909;
        font-family: inherit;
        font-size: 1.2em;
        padding: 15px 30px;
        box-shadow: 2px 2px 2px #966909;
        &:hover{
            background-color: #A0DB41;
            border: 1px solid #966909;
            color: #966909;
        }
        &:active{
            background-color: #A0DB41;
            border: 1px solid #966909;
            color: #966909;
        }
        &:disabled{
            background-color: #C7C6C6;
            cursor: not-allowed;
            border: 1px solid #ccc;
            color: #888888;
        }
        &:not(:disabled) {
            animation: enable 0.3s linear;
        }
        @keyframes enable {
            0% {
                transform: scale(1);
            }
            60% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    `

    return (
        <Styleddiv>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( cntrl => {
                return <BuildControl 
                            key = {cntrl.label} 
                            label = {cntrl.label} 
                            added= {() => props.addIngredient(cntrl.type)}   
                            removed = { () => props.removeIngredient(cntrl.type)} 
                            disabled = {props.disabled[cntrl.type]} />
            })}
        <StyledButton 
            disabled={!props.purchasable}
            onClick = {props.ordered}>{props.isAuth ? 'ORDER NOW' : 'Sign In to Continue'}</StyledButton>
        </Styleddiv>
    )
}

export default buildControls;