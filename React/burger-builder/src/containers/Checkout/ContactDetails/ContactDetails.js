import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Form from './Form';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actionCreators from '../../../store/actions/index';
class ContactDetails extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                touched: false,
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
                touched: false,
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
                    required: true
                },
                touched: false,
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                touched: false,
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
                touched: false,
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                valid: true,
                validation: {}
            }
        },
        formisValid: false

    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }





    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        console.log('updatedFormElement', updatedFormElement)

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formisValid = true;
        for (let key in updatedOrderForm) {
            formisValid = updatedOrderForm[key].valid && formisValid;
        }

        this.setState({ orderForm: updatedOrderForm, formisValid: formisValid });
        // debugger



    }

    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props.ings);
        // this.setState({spinner : true})
        let formData = {};
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId : this.props.userId
        }
        this.props.onOrderBurger(order, this.props.token);

        // axios asynchronus call is done by REDUX----------------------
        // axios.post('/orders.json', order)
        //         .then( response => {this.setState({spinner: false});
        //                             this.props.history.push('/') })
        //             .catch( error => this.setState({spinner: false}));
        // axios asynchronus call is done by REDUX----------------------
    }



    render() {

        return (
            <Form
                header='Enter Customer Details'
                controls={this.state.orderForm}
                submitHandler={this.orderHandler}
                inputChangedHandler={this.inputChangedHandler}
                formisValid={this.state.formisValid}
                buttonName='ORDER' />
        );
    }
}

const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token : state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actionCreators.PurchaseBurger(orderData, token))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ContactDetails);