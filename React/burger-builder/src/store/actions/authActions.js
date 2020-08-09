import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

export const authLogOut = () => {
    return {
        type : actionTypes.AUTH_INITIATE_LOGOUT
    }
}

export const authLogOutSucceed = () => {
    return {type : actionTypes.AUTH_LOGOUT}
}

export const checkAuthTimeout = (expirationTime) => {
    return {type : actionTypes.AUTH_CHECKAUTH_TIMEOUT, expirationTime: expirationTime}
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(authLogOut());
    //     }, expirationTime * 1000)

    // }
}

export const auth = (email, password, isSignUp) => {
    return {
        type: actionTypes.AUTH_USER_LOGIN,
        email:email,
        password:password,
        isSignUp:isSignUp
    }
    // return dispatch => {
    //     dispatch(authStart());
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     }

    //     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClbx2C32G7Hw4kiFgGxPn9IkGXdKNfw9o';
    //     if (!isSignUp) {
    //         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClbx2C32G7Hw4kiFgGxPn9IkGXdKNfw9o';
    //     }
    //     axios.post(url, authData)
    //         .then(response => {
    //             const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));
    //             localStorage.setItem('token', response.data.idToken);
    //             localStorage.setItem('expirationTime', expirationDate);
    //             localStorage.setItem('localId', response.data.localId);
    //             dispatch(authSuccess(response.data.idToken, response.data.localId));
    //             dispatch(checkAuthTimeout(response.data.expiresIn));
    //         })
    //         .catch(err => {
    //             dispatch(authFailed(err.response.data.error));
    //         })
    // }
}

export const redirectPath = (path) => {
    return {
        type : actionTypes.REDIRECT_PATH,
        path : path
    }
}

export const authCheckState = () => {

    return {
        type : actionTypes.AUTH_CHECK_STATE
    }

    // return dispatch => {
    //     const token = localStorage.getItem('token');
    //     if(!token) {
    //         dispatch(authLogOut());
    //     } else {
    //         const expirationTime = new Date(localStorage.getItem('expirationTime'));
    //         if( expirationTime <= new Date()) {
    //             dispatch(authLogOut());
    //         } else {
    //             const localId = localStorage.getItem('localId');
    //             dispatch(authSuccess(token, localId));
    //             dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime()) / 1000));
    //         }
    //     }
    // }
}