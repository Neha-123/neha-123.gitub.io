import React, { useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Email from './Email';
import Mobile from './Mobile';
import Name from './Name';
import Password from './Password';
import * as actionCreators from '../store/actions/index';
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
        width: '96%',
        marginTop: '10px',
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

const Container = styled('form')(styles.container)
const Heading = styled('h1')(styles.heading)
const Label = styled('label')(styles.label)
const StyledButton = styled('button')(styles.styledbutton);
const DbError = styled('span')(styles.dberror)

const CreateAccount = (props) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const nameValue = (value) => {
        setName(value);
    }
    const mobileValue = (value) => {
        setMobile(value);
    }
    const emailValue = (value) => {
        setEmail(value);
    }
    const passwordValue = (value) => {
        setPassword(value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.onCreateNewAccount(name, mobile, email, password);
        setName('');
        setMobile('');
        setEmail('');
        setPassword('');
    }

    let isRedirect = null;
    if (props.isAuthenticated) {

        isRedirect = <Redirect to='/' />
    };
    return (
        <div>
            {isRedirect}
            <Container >
                <Heading>CreateAccount</Heading>
                {props.errorMessage ?
                    <DbError>{props.errorMessage}</DbError> :
                    null}
                <Label>Your name</Label>
                <Name customername={nameValue} />
                <Label>Mobile Number</Label>
                <Mobile mobile={mobileValue} />
                <Label>Email</Label>
                <Email email={emailValue} />
                <Label>Password</Label>
                <Password password={passwordValue} />
                <StyledButton type="submit" onClick={formSubmitHandler}>Continue</StyledButton>
            </Container>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        isAuthenticated: state.customerReducer.token !== null,
        errorMessage: state.customerReducer.emailError,
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        onCreateNewAccount: (name, mobile, email, password) => dispatch(actionCreators.createNewAccount(name, mobile, email, password))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(CreateAccount)
