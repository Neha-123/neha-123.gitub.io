import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

class ContactDetails extends Component {

    state = {
        orderForm : {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                }                ,
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6
                },
                valid: false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value='',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                valid: true,
                validation: {}
            }
        },
        formisValid : false
        
    }

    checkValidity (value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength  && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength  && isValid;
        }

        return isValid;

    }

    inputChangedHandler (event, inputIdentifier) {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;

        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;

        updatedOrderForm[inputIdentifier]= updatedFormElement;

        let formisValid = true;
        for(let key in updatedOrderForm) {
            formisValid = updatedOrderForm[key].valid && formisValid;
        }

        this.setState ({orderForm: updatedOrderForm, formisValid : formisValid});
    }
    

    render() {

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
        const formArray = [];
        for(let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config : this.state.orderForm[key]
            })
        }


    
        return(
            <Styledform>
                <h3>Enter Your Contact Details</h3>
                <form>
                   
                    {formArray.map( element => {
                        return <Input 
                                key= {element.id} 
                                elementType = {element.config.elementType} 
                                elementConfig = {element.config.elementConfig} 
                                value = {element.config.value}
                                changed= {(event) => {this.inputChangedHandler(event, element.id)}}
                                invalid={!element.config.valid}
                                shouldValidate = {element.config.validation}
                                touched={element.config.touched} />
                    })}
                    <Button btnType="Success" disabled={!this.state.formisValid}>Order</Button>
                </form>
            </Styledform>
        );
    }
}