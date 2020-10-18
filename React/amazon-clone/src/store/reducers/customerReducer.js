import * as actionTypes from '../actions/actionTypes';
import { extractToken } from './reducerFunctions';

const initialState = {
    email: null,
    password: null,
    emailError: null,
    passwordError: null,
    continue: false,
    token: null,
    tokenId: null,
    name: '',
    redirectPath: ''
}


const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ACCOUNT: return {
            ...state,
            email: action.email,
            name: action.name,
            token: action.token,
            tokenId: action.tokenId

        }
        case actionTypes.SET_EMAIL: return {
            ...state,
            email: action.email,
            emailError: null,
            continue: true
        }
        case actionTypes.CUSTOMER_LOGIN: const token = extractToken(action.tokens)

            return {
                ...state,
                name: action.name,
                token: token.token,
                tokenId: token._id,
                emailError: null,
                passwordError: null,

            }
        case actionTypes.CUSTOMER_LOGOUT:

            return {
                ...state,
                name: '',
                token: null,
                tokenId: null,
                emailError: null,
                passwordError: null,
                continue: false,
                redirectPath: '/'
            }
        case actionTypes.SET_EMAIL_ERROR: return {
            ...state,
            emailError: action.error,
            continue: false
        }
        case actionTypes.SET_PASSWORD_ERROR: return {
            ...state,
            passwordError: action.error,
            continue: true
        }
        default: return state

    }
}

export default customerReducer; 