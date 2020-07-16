import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData : orderData,
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
        type : actionTypes.PURCHASE_BURGER_START
    }
}

export const PurchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(PurchaseBurgerStart());
        axios.post('/orders.json', orderData)
                    .then( response =>{dispatch(purchaseBurgerSuccess(response.data.name, orderData))} )
                        .catch( error =>{dispatch(purchaseBurgerFailed(error))} );
    }
}

export const initPurchase = () => {
    return {
        type : actionTypes.INIT_PURCHASE
    }
}

export const fetchOrderSuccess = (order) => {
    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : order
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type : actionTypes.FETCH_ORDERS_FAILED,
        error : error
    }
}

export const fetchOrderStart = () => {
    return {
        type : actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('/orders.json')
                    .then(res => {
                        const orders = [];
                        for(let key in res.data) {
                            orders.push({
                                ...res.data[key],
                                id:key
                            })
                        }
                        dispatch(fetchOrderSuccess(orders));
                    })
                    .catch(err =>{dispatch(fetchOrderFailed(err))})
    }
    
}