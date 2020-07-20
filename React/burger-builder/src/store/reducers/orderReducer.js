import * as actionTypes from '../actions/actionTypes';
import {
    purchaseInit,
    purchaseBurgerStart,
    purchaseSuccess,
    purchaseFailed,
    FetchOrdersStart,
    FetchOrdersSuccess,
    FetchOrdersFailed
} from './reducerFunctions';

const InitialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_PURCHASE: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return purchaseFailed(state, action);
        case actionTypes.FETCH_ORDERS_START: return FetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return FetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED: return FetchOrdersFailed(state, action);
        default: return state;
    }
}

export default reducer;