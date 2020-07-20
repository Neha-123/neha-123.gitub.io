import React, { Component } from 'react';
import Form from '../Checkout/ContactDetails/Form';
import styled from 'styled-components';
import * as actionCreators from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                touched: false,
                valid: false,
                errorMessage: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                touched: false,
                valid: false,
                errorMessage: ''
            }
        },
        formisValid: false,
        isSignUp: true

    }

    componentDidMount () {
        if(!this.props.buildingBurger && this.props.redirectPath !== '/') {
            this.props.onSetRedirectPath();
        }
    }

    checkValidity = (value, rules) => {
        let validationObject = {
            isValid: true,
            msg: ''
        }
        // let isValid = true;
        // let msg = '';
        if (rules.required) {
            let requiredFieldValidation = value.trim() !== '';
            validationObject.isValid = requiredFieldValidation && validationObject.isValid;
            if (!requiredFieldValidation) {
                validationObject.msg = 'This is a required Field';
            }
        }
        if (rules.isEmail) {
            let emailValidation = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            validationObject.isValid = emailValidation && validationObject.isValid;
            if (!emailValidation) {
                validationObject.msg = 'Incorrect Email';
            }
        }
        if (rules.minLength) {
            let minLength = value.length >= rules.minLength && value.length > 0;
            validationObject.isValid = minLength && validationObject.isValid;
            if (!minLength) {
                validationObject.msg = 'minimum char Length is 6';
            }
        }


        // return isValid;
        return validationObject;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        console.log(event.target.value);
        const updatedForm = {
            ...this.state.controls
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        let updatedvalidationObject = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.valid = updatedvalidationObject.isValid;
        updatedFormElement.errorMessage = updatedvalidationObject.msg;
        updatedFormElement.touched = true;
        console.log('updatedFormElement', updatedFormElement)

        updatedForm[inputIdentifier] = updatedFormElement;

        let formisValid = true;
        for (let key in updatedForm) {
            formisValid = updatedForm[key].valid && formisValid;
        }

        this.setState({ controls: updatedForm, formisValid: formisValid });
        // debugger
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchSignUpHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        });
    }


    render() {

        let serverErrorMessage = null;
        //debugger 
        if(this.props.error) { 
            serverErrorMessage = <p style = {{fontFamily : 'Open Sans', fontSize : '15px', color : 'red', textTransform : 'lowercase'}}>{this.props.error.message.replace("_"," ")}</p> ;
        }

        let showForm = <div>
            <Button btnType="Danger" clicked={this.switchSignUpHandler}>Switch to {this.state.isSignUp ? 'SIGNIN' : 'SIGNUP'}</Button>
            {serverErrorMessage}
            <Form
                header={this.state.isSignUp ? 'SIGNUP' : 'SIGNIN'}
                controls={this.state.controls}
                submitHandler={this.submitHandler}
                inputChangedHandler={this.inputChangedHandler}
                formisValid={true}
                buttonName='SUBMIT'
            />
        </div>;
        if (this.props.loading) {
            showForm = <Spinner />
        }

        let isRedirect = null;
        if(this.props.isAuthenticated) {
            isRedirect = <Redirect to={this.props.redirectPath} />
        };
       
        return (
            <div style={{ textAlign: 'center' }}>
                {isRedirect}
                {showForm}
            </div>

        );
    }
}

const matchStateToProps = state => {
    return {
        loading: state.auth.loading,
        error : state.auth.error,
        isAuthenticated : state.auth.token != null,
        buildingBurger : state.burgerBuilder.building,
        redirectPath : state.auth.redirectPath
    }
}

const matchDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actionCreators.auth(email, password, isSignUp)),
        onSetRedirectPath : () => dispatch(actionCreators.redirectPath('/'))
    }
}


export default connect(matchStateToProps, matchDispatchToProps)(Auth);