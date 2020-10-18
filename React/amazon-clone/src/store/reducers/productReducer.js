import * as actionTypes from '../actions/actionTypes';
import { removeItem, updateBasketQuantity, resetPrice } from './reducerFunctions';

const InitialState = {
    product: [],
    basket: [],
    sumTotal: '0',
}


const productReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BASKET:
            return {
                ...state,
                basket: action.basket
            }
        case actionTypes.CALCULATE_TOTAL_PRICE: const price = resetPrice(action.basket)
            return {
                ...state,
                sumTotal: price
            }
        case actionTypes.REMOVE_PRODUCT: const newbasketItem = removeItem(state.basket, action.id)
            return {
                ...state,
                basket: newbasketItem.newBasket,
                sumTotal: newbasketItem.newPrice
            }
        case actionTypes.UPDATE_QUANTITY: const basketItem = updateBasketQuantity(state.basket, action.productId, action.quantity);
            return {
                ...state,
                basket: basketItem.cloneBasket,
                sumTotal: basketItem.sum
            }
        case actionTypes.SET_PRODUCTLIST: return {
            ...state,
            product: action.product
        }
        default: return state;
    }
}

export default productReducer;