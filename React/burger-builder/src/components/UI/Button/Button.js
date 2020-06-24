import React from 'react';
import styled from 'styled-components';

const button = (props) => {

    const Simplebutton = styled.button`
        background-color: transparent;
        border: none;
        color: white;
        outline: none;
        cursor: pointer;
        font: inherit;
        padding: 10px;
        margin: 10px;
        font-weight: bold;
        &:first-of-type {
            margin-left: 0;
            padding-left: 0;
        }
        &:disabled {
            color: #ccc;
            cursor: not-allowed;
        }
    `
    const SuccessButton = styled(Simplebutton)`
        color: #5C9210;
    `
    const DangerButton = styled(Simplebutton)`
        color: #944317;
    `
    

    let CustomButton = (props.btnType === "Success" ) ? SuccessButton : DangerButton
        CustomButton = (props.btnType !== "Success" && props.btnType !== "Danger") ? Simplebutton : CustomButton
    return(
    <CustomButton onClick = {props.clicked} disabled={props.disabled}>{props.children}</CustomButton>
    )
}

export default button;