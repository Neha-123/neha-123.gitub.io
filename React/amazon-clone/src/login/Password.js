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
const StyledInput = styled('input')(styles.styledinput)
const StyledError = styled('span')(styles.error)

const Password = (props) => {
    const [input, setInput] =  useState('');

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

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const saveValue = () => {
        props.password(input)
        
    }
    return (
        <div>
            <StyledInput 
                type="password" 
                name="password"
                value={formik.values.password}
                onChange={(e) => {inputChangeHandler(e); formik.handleChange(e)}} 
                onBlur={(e) => {saveValue(); formik.handleBlur(e)}} />
                {formik.touched.password && formik.errors.password ? (
                <StyledError>{formik.errors.password}</StyledError>
            ) : null}
        </div>
    )
}

export default Password
