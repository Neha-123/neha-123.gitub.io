import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const styles = {
    passwordBox: {
        fontFamily: 'Amazon Ember,Arial,sans-serif',
        lineHeight: '25px',

    },
    password: {
        fontWeight: '700',
        display: 'block'
    },
    label: {
        fontWeight: '500',
        marginRight: '10px',
        letterSpacing: '0.5px'
    },
    link: {
        fontWeight: '500',
        textDecoration: 'none',
        color: '#0066c0',
        '&:hover': {
            textDecoration: 'underline',
            color: 'brown',
        }
    },
    styledinput: {
        width: '90%',
        padding: '3px 7px',
        margin: 'auto',
        marginBottom: '10px',
        border: '1px solid #a6a6a6',
        borderRadius: '3px',
        outline: '0',
        height: '20px',
        lineHeight: 'normal'
    },
    styledbutton: {
        width: '96%',
        height: '30px',
        background: '#f0c14b',
        borderColor: '#a88734 #9c7e31 #846a29',
        color: '#111',
        borderRadius: '3px',
        borderStyle: 'solid',
        borderWidth: '1px',
        cursor: 'pointer',
        '&:hover': {
            background: '#f2b211'
        },
        '&:disabled': {
            background: '#c8ad69b3',
            color: '#111111bd'
        }
    },
    error: {
        display: 'block',
        fontWeight: '500',
        textAlign: 'left',
        lineHeight: '0px',
        color: '#cc0808',
        marginBottom: '20px'
    },
    dberror: {
        padding: '10px 10px',
        display: 'block',
        fontWeight: '500',
        textAlign: 'left',
        color: '#cc0808',
        border: '2px solid #cc0808',
        borderRadius: '5px',
        background: '#cc080833',
        margin: '10px 0px'
    }
}

const StyledInput = styled('input')(styles.styledinput)
const StyledButton = styled('button')(styles.styledbutton)
const PasswordBox = styled('div')(styles.passwordBox)
const Label = styled('span')(styles.label)
const Change = styled('a')(styles.link)
const PasswordLabel = styled('span')(styles.password)
const StyledError = styled('span')(styles.error)
const DbError = styled('span')(styles.dberror)

const PasswordPage = (props) => {

    const [input, setInput] = useState('');
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(5, 'Min 5 characters')
                .required('Required')

        })
    });

    const passwordSubmitHandler = (e) => {
        e.preventDefault();
        props.onLogin(props.email, input)

    }

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }

    let isRedirect = null;
    if (props.isAuthenticated) {

        isRedirect = <Redirect to='/' />
    };

    return (
        <div>
            {isRedirect}
            <PasswordBox>
                <Label>{props.email}</Label>
                <Change rel="preconnect" href="/login">Change</Change>
                {props.errorMessage ?
                    <DbError>{props.errorMessage}</DbError>
                    : null
                }
                <PasswordLabel>Password</PasswordLabel>
                <StyledInput
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={(e) => { inputChangeHandler(e); formik.handleChange(e) }}
                    onBlur={(e) => { formik.handleBlur(e) }} />
                {formik.touched.password && formik.errors.password ? (
                    <StyledError>{formik.errors.password}</StyledError>
                ) : null}
                <StyledButton
                    type="submit"
                    disabled={formik.errors.password ? true : false}
                    onClick={passwordSubmitHandler}>Login</StyledButton>
            </PasswordBox>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        errorMessage: state.customerReducer.passwordError,
        email: state.customerReducer.email,
        isAuthenticated: state.customerReducer.token !== null
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actionCreators.login(email, password))

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PasswordPage)
