import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import { Simulate } from 'react-dom/test-utils';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData: orderData,
        orderId: id
    }
    

}

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const PurchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const PurchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(PurchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => { dispatch(purchaseBurgerSuccess(response.data.name, orderData)) })
            .catch(error => { dispatch(purchaseBurgerFailed(error)) });
    }
}

export const initPurchase = () => {
    return {
        type: actionTypes.INIT_PURCHASE
    }
}

export const fetchOrderSuccess = (order) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: order
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    // let  headers ={
    //     headers : {
    //         'Authorization' : {token}
    //     }
    // };
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const orders = [];
                for (let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrderSuccess(orders));
            })
            .catch(err => { dispatch(fetchOrderFailed(err)) })
    }

}