import * as actionTypes from './actionTypes';
import axios from '../../Axios';


export const addProducttoCart = (product, token) => {

    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: token
        }
    }

    return dispatch => {
        axios.post(`/cart`, { product }, config)
            .then(response => {
                dispatch(fetchBasketProduct(token))
            }).catch(e => {
                console.log(e);
            })
    }

}

export const fetchBasketProduct = (token) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: token
        }
    }
    return dispatch => {
        axios.get(`/cart`, config)
            .then(response => {
                dispatch(setBasket(response.data))
            }).catch(e => {
                console.log(e);
            })
    }
}

export const setBasket = (basket) => {
    return {
        type: actionTypes.SET_BASKET,
        basket
    }
}

export const calculateTotalPrice = (basket) => {
    return {
        type: actionTypes.CALCULATE_TOTAL_PRICE,
        basket
    }
}

export const removeProduct = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        id: id
    }
}

export const removeProductDb = (id, token) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: token
        }
    }
    return dispatch => {
        axios.delete(`/cart/${id}`, config)
            .then(response => {
                dispatch(removeProduct(id))
            }).catch(e => {
                console.log(e);
            })
    }
}

export const updateQuantity = (id, quantity, productId) => {
    return {
        type: actionTypes.UPDATE_QUANTITY,
        id,
        quantity,
        productId
    }
}

export const updateBasketQuantity = (id, quantity, productId, token) => {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: token
        }
    }
    return dispatch => {
        axios.patch(`/cart/${id}`, { quantity }, config)
            .then(response => {
                dispatch(updateQuantity(id, quantity, productId))
            }).catch(e => {
                console.log(e);
            })
    }
}

export const setProductList = (productlist) => {
    return {
        type: actionTypes.SET_PRODUCTLIST,
        product: productlist
    }
}

export const fetchProduct = () => {

    return dispatch => {
        axios.get('/product')
            .then(response => {
                dispatch(setProductList(response.data))
            }).catch(e => {
                console.log(e);
            })
    }


}