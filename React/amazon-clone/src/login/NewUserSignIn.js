import React, { useState } from 'react';
import styled from 'styled-components';
import PasswordPage from './PasswordPage';
import Input from './Input';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const styles = {
    container: {
        border: '1px solid #dac8c8f7',
        borderRadius: '5px',
        display: 'block',
        padding: '20px',
        width: 'fit-content',
        margin: '50px auto',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '25px'
    },
    heading: {
        fontFamily: 'Amazon Ember,Arial,sans-serif',
    },
    label: {
        display: 'block',
        fontWeight: '700'
    },
    styledbutton: {
        width: '25%',
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
        }
    },
    error: {
        padding: '10px 10px',
        display: 'block',
        fontWeight: '500',
        textAlign: 'left',
        color: '#cc0808',
        border: '2px solid #cc0808',
        borderRadius: '5px',
        background: '#cc080833'
    },
    link: {
        fontWeight: '500',
        textDecoration: 'none',
        color: '#0066c0',
        '&:hover': {
            textDecoration: 'underline',
            color: 'brown',
        }
    }
}

const Container = styled('form')(styles.container)
const Heading = styled('h2')(styles.heading)
const Label = styled('label')(styles.label)
const StyledButton = styled('button')(styles.styledbutton)
const StyledError = styled('span')(styles.error)
const Home = styled('a')(styles.link)

const NewUserSignIn = (props) => {
    let [redirect, setRedirect] = useState(null);

    const redirectPage = () => {
        setRedirect(<Redirect to='/createAccount' />)
    }

    return (
        <div>
            {redirect}
            {(props.continue)
                ? <Container>
                    <Heading>Login</Heading>
                    <PasswordPage />
                </Container>

                :
                <div>
                    <Container>
                        <Heading>Login</Heading>
                        <Home rel="preconnect" href="/">Go Home</Home>
                        {props.errorMessage ?
                            <StyledError>{props.errorMessage}</StyledError> :
                            null}
                        <Label>Enter your email</Label>
                        <Input />
                    </Container>
                    <StyledButton onClick={redirectPage}>Create Your Account</StyledButton>
                </div>
            }
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        errorMessage: state.customerReducer.emailError,
        continue: state.customerReducer.continue
    }

}


export default connect(mapStatetoProps)(NewUserSignIn)

