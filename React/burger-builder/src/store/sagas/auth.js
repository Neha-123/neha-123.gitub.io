import {put} from 'redux-saga/effects';
import {delay} from 'redux-saga/effects';
import * as actionCreators from '../actions/index';
import axios from 'axios';

export function* logoutsaga (action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationTime');
    yield localStorage.removeItem('localId');
    yield put(actionCreators.authLogOutSucceed());
}

export function* checkAuthTimeoutSaga (action) {
    yield delay(action.expirationTime * 1000);
    yield put(actionCreators.authLogOut());
}

export function* authUserLoginSaga (action) {
    yield put(actionCreators.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    }

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClbx2C32G7Hw4kiFgGxPn9IkGXdKNfw9o';
    if (!action.isSignUp) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClbx2C32G7Hw4kiFgGxPn9IkGXdKNfw9o';
    }
   
    try {
        const response = yield axios.post(url, authData);
        const expirationDate = yield new Date(new Date().getTime() + (response.data.expiresIn * 1000));
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationTime', expirationDate);
        yield localStorage.setItem('localId', response.data.localId);
        yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId));
        yield put(actionCreators.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actionCreators.authFailed(error.response.data.error));
    }
    
}

export function* authCheckStateSaga (action) {
    const token = yield localStorage.getItem('token');
        if(!token) {
            yield put(actionCreators.authLogOut());
        } else {
            const expirationTime = yield new Date(localStorage.getItem('expirationTime'));
            if( expirationTime <= new Date()) {
                yield put(actionCreators.authLogOut());
            } else {
                const localId = yield localStorage.getItem('localId');
                yield put(actionCreators.authSuccess(token, localId));
                yield put(actionCreators.checkAuthTimeout((expirationTime.getTime() - new Date().getTime()) / 1000));
            }
        }
}