import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/index';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga (action) {
    yield put(actionCreators.PurchaseBurgerStart());
    try {
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actionCreators.purchaseBurgerSuccess(response.data.name, action.orderData))
    } catch (error) {
        yield put(actionCreators.purchaseBurgerFailed(error))
    }
}

export function* fetchOrdersSaga (action) {
    
    yield put(actionCreators.fetchOrderStart());
    const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    try {
        const response = yield axios.get('/orders.json' + queryParams);
        const orders = [];
        
                for (let key in response.data) {
                    orders.push({
                        ...response.data[key],
                        id: key
                    })
                }
        yield put(actionCreators.fetchOrderSuccess(orders));
    } catch (error) {
        yield put(actionCreators.fetchOrderFailed(error))
    }

}