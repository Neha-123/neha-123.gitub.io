import React from 'react';
import styled from 'styled-components';

const input = (props) => {

    const StyledInput = styled.div`
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    `
    const StyledInputElement = styled.input`
        border: 1px solid #ccc;
        background-color: white;
        outline: none;
        padding: 6px 10px;
        font : inherit;
        display: block;
        width: 100%;
        &:focus {
            outline: none;
            background-color:#ccc;
        }
    `
    const StyledTextArea = styled.textarea`
        border: 1px solid #ccc;
        background-color: white;
        outline: none;
        padding: 6px 10px;
        font : inherit;
        display: block;
        width: 100%;
        &:focus {
            outline: none;
            background-color:#ccc;
        }
    `
    const StyledSelect = styled.select`
        border: 1px solid #ccc;
        background-color: white;
        outline: none;
        padding: 6px 10px;
        font : inherit;
        display: block;
        width: 100%;
        &:focus {
            outline: none;
            background-color:#ccc;
        }
    `

    const StyledLabel = styled.label`
        font-weight: bold;
        margin-bottom: 10px;
        display: block;
    `
const StyledErrorInputElement = styled(StyledInputElement)`
        border: 1px solid red;
`
const MystyledInputElement = (props.invalid && props.touched && props.shouldValidate) ? StyledInputElement : StyledErrorInputElement;

    let inputElement = null;
    switch (props.elementType) {
        case('input') :
            inputElement = <MystyledInputElement {...props.elementConfig} value = {props.value}  onChange ={ props.changed}  />;
            break;
        case('textarea') :
            inputElement = <StyledTextArea {...props.elementConfig} value = {props.value}  onChange ={ props.changed} />;
            break;
        case ('select') :
            inputElement = <StyledSelect  value = {props.value} onChange ={ props.changed} >
                                {props.elementConfig.options.map( option => {
                                    <option key = {option.value} value ={option.value}>
                                        {option.displayValue}
                                    </option>
                                })}
                            </StyledSelect>
                                
            break;
        default :
            inputElement = <MystyledInputElement {...props.elementConfig} value = {props.value} onChange ={ props.changed}/>;
            break;

    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }
        return (
        <StyledInput>
            <StyledLabel />
            {inputElement}
            {validationError}
        </StyledInput>
    )
}

export default input;