import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';


const Styledform = styled.div`
        margin: 20px auto;
        width: 80%;
        text-align: center;
        box-shadow: 0 2px 3px #ccc;
        border: 1px solid #eee;
        padding: 10px;
        box-sizing: border-box;

        @media (min-width: 600px) {
            width: 500px;
            
        }
    `
    

const Form = (props) => {
    const formArray = [];
    for(let key in props.controls) {
        formArray.push({
            id: key,
            config : props.controls[key]
        })
    }

    return(
        <Styledform>
                <h3>{props.header}</h3>
                <form>
                   
                    {formArray.map( element => {
                        return (<Input 
                                key= {element.id} 
                                elementType = {element.config.elementType} 
                                elementConfig = {element.config.elementConfig} 
                                value = {element.config.value}
                                changed= {(event) => {props.inputChangedHandler(event, element.id)}}
                                invalid={!element.config.valid}
                                shouldValidate = {element.config.validation}
                                touched={element.config.touched}  
                                errorMessage= {element.config.errorMessage}   
                                />)
                    })}
                    <Button btnType="Success" disabled={!props.formisValid} clicked={props.submitHandler}>{props.buttonName}</Button>
                </form>
            </Styledform>
    );
}

export default Form