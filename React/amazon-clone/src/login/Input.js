import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const styles = {
    styledinput: {
        width: '200px',
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
        display: 'block',
        width: '215px',
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
    }
}
const StyledInput = styled('input')(styles.styledinput)
const StyledButton = styled('button')(styles.styledbutton);
const StyledError = styled('span')(styles.error)

const Input = (props) => {
    const [input, setInput] = useState('');

    const formik = useFormik({
        initialValues: {
            emailAddress: ''
        },
        validationSchema: Yup.object({
            emailAddress: Yup.string()
                .email('Enter a valid Email Address')
                .required('Required')

        })
    });

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }

    const emailSubmitHandler = (e) => {
        e.preventDefault();
        props.oncheckEmail(input);
    }
    return (
        <div>

            <StyledInput
                type="text"
                name="emailAddress"
                value={formik.values.emailAddress}
                onChange={(e) => { inputChangeHandler(e); formik.handleChange(e) }}
                onBlur={(e) => { formik.handleBlur(e) }} />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <StyledError>{formik.errors.emailAddress}</StyledError>
            ) : null}
            <StyledButton
                type="submit"
                disabled={formik.errors.emailAddress || (input === '') ? true : false}
                onClick={emailSubmitHandler}>Continue</StyledButton>
        </div>
    )
}

const mapDispatchtoProps = dispatch => {
    return {
        oncheckEmail: (email) => dispatch(actionCreators.checkEmail(email))

    }
}
export default connect(null, mapDispatchtoProps)(Input)
