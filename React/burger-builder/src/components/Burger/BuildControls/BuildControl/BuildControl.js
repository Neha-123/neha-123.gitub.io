import React from 'react';
import styled from 'styled-components';

const buildControl = (props) => {

    const StyledControl = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
    `

    const StyledButton = styled.button`
        display: block;
        color: white;
        font: inherit;
        padding: 0px;
        margin: 0 5px;
        width: 80px;
        border: 1px solid #AA6817;
        background-color: ${prop => prop.alt ? '#D39952' : '#8F5E1E' };
        cursor: pointer;
        outline: none;
        &:disabled {
            background-color: #AC9980;
            border: 1px solid #7E7365;
            color: #ccc;
            cursor: default;
        }
        &:hover:disabled {
            background-color: #AC9980;
            color: #ccc;
            cursor: not-allowed;
        }
        &:hover{
            background-color: ${prop => prop.alt ? '#DAA972' : '#99703F'};
            color: white;
        }
        &:active{
            background-color: ${prop => prop.alt ? '#DAA972' : '#99703F'};
            color: white;
        }
    `

    const Label = styled.div`
        padding: 10px;
        font-weight: bold;
        width: 80px;
    `
    

    return (
        <StyledControl>
            <Label>{props.label}</Label>
            <StyledButton 
                alt={true} 
                onClick = {props.removed}
                disabled={props.disabled}>
                    Less
            </StyledButton>
            <StyledButton alt={false} onClick = {props.added} >More</StyledButton>
        </StyledControl>
    )

}

export default buildControl;