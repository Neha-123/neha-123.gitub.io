import React, { useState } from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const styles = {
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
    error: {
        display: 'block',
        fontWeight: '500',
        textAlign: 'left',
        lineHeight: '0px',
        color: '#cc0808',
        marginBottom: '10px'
    }
}
const StyledInput = styled('input')(styles.styledinput);
const StyledError = styled('span')(styles.error)

const Mobile = (props) => {
    const [input, setInput] = useState('');

    const formik = useFormik({
        initialValues: {
            mobileNumber: ''
        },
        validationSchema: Yup.object({
            mobileNumber: Yup.string()
                .length(10, 'Must be 10 digits')
                .required('Required')

        })
    });

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const saveValue = () => {
        props.mobile(input)

    }
    return (
        <div>
            <StyledInput 
                type="number" 
                name="mobileNumber"
                value={formik.values.mobileNumber} 
                onChange={(e) => {inputChangeHandler(e); formik.handleChange(e)}} 
                onBlur={(e) => {saveValue(); formik.handleBlur(e)}}
                 />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                <StyledError>{formik.errors.mobileNumber}</StyledError>
            ) : null}
        </div>
    )
}

export default Mobile

