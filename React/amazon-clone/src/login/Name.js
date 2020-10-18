import React, {useState} from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const styles = {
    styledinput: {
        width: '90%',
        padding: '3px 7px',
        margin:'auto',
        marginBottom: '10px',
        border:'1px solid #a6a6a6',
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

const  Name = (props)  => {
    const [input, setInput] =  useState('');

    const formik = useFormik({
        initialValues: {
            fullName: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Required')

        })
    });

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const saveValue = () => {
        props.customername(input)
        
    }
    return (
        <div>
            <StyledInput 
                type="text"
                name="fullName"  
                value={formik.values.fullName}
                onChange={(e) => {inputChangeHandler(e); formik.handleChange(e)}} 
                onBlur={(e) => {saveValue(); formik.handleBlur(e)}} />
                {formik.touched.fullName && formik.errors.fullName ? (
                <StyledError>{formik.errors.fullName}</StyledError>
            ) : null}
        </div>
    )
}

export default Name
