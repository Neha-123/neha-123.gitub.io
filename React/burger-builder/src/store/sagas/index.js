import * as actionTypes from '../actions/actionTypes';
import {takeEvery}  from 'redux-saga/effects';
import {logoutsaga, checkAuthTimeoutSaga, authUserLoginSaga, authCheckStateSaga} from './auth';
import { getIngredientSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth () {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutsaga);
    yield takeEvery(actionTypes.AUTH_CHECKAUTH_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER_LOGIN, authUserLoginSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchburgerBuilder () {
    yield takeEvery(actionTypes.GET_INGREDIENT, getIngredientSaga);
}

export function* watchorder () {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}