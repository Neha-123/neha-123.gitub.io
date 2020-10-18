import * as actionTypes from './actionTypes';
import axios from '../../Axios';

export const setEmailId = (email) => {
    return {
        type: actionTypes.SET_EMAIL,
        email
    }
}

export const setEmailError = (error) => {
    return {
        type: actionTypes.SET_EMAIL_ERROR,
        error
    }
}

export const setPasswordError = (error) => {
    return {
        type: actionTypes.SET_PASSWORD_ERROR,
        error
    }
}

export const checkEmail = (email) => {
    return dispatch => {
        axios.post('/customer/login/email', { email })
            .then(res => {
                if (res.data.email) {
                    dispatch(setEmailId(email))
                }
                else {
                    dispatch(setEmailError(res.data))
                }

            }).catch(error => {
                console.log(error)
            })
    }
}

export const customerLogin = (tokens, name) => {

    return {
        type: actionTypes.CUSTOMER_LOGIN,
        tokens,
        name
    }
}

export const login = (email, password) => {
    return dispatch => {
        axios.post('/customer/login', { email, password })
            .then(res => {
                if (!res.data.password) {
                    dispatch(setPasswordError(res.data))
                } else {
                    dispatch(customerLogin(res.data.tokens, res.data.name));

                }
            }).catch(error => {
                console.log(error)
            })
    }
}

export const customerLogout = () => {

    return {
        type: actionTypes.CUSTOMER_LOGOUT

    }
}


export const logout = (token, tokenId) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: token
        }
    }

    return dispatch => {
        axios.patch('/customer/logout', { token, tokenId }, config)
            .then(res => {
                dispatch(customerLogout())
            }).catch(error => {
                console.log(error)
            })
    }
}

export const customerNewAccount = (name, mobile, email, token, tokenId) => {
    return {
        type: actionTypes.CREATE_ACCOUNT,
        name,
        email,
        token,
        tokenId
    }
}

export const createNewAccount = (name, mobile, email, password) => {
    return dispatch => {
        axios.post('/customer', { name, mobile, email, password })
            .then(res => {
                if (res.data.token) {
                    dispatch(customerNewAccount(name, mobile, email, res.data.token, res.data._id))
                } else {
                    dispatch(setEmailError(res.data))
                }
            }).catch(error => {
                console.log(error)
            })
    }
}
