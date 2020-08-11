import * as actionTypes from './actionTypes';

export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        basket : product
    }
}

export const removeProduct = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        id : id
    }
}


export const fetchProduct = (product) => {
    return {
        type: actionTypes.FETCH_PRODUCT,
        product : [{id: '12344', 
                    productName: "Bourge Men's Loire-63 Running Shoes", 
                    productImage:'https://images-na.ssl-images-amazon.com/images/I/71A4FOEgLnL._UY695_.jpg', 
                    rating: '5'},{id: '12344', 
                    productName: "Bourge Men's Loire-63 Running Shoes", 
                    productImage:'https://images-na.ssl-images-amazon.com/images/I/71A4FOEgLnL._UY695_.jpg', 
                    rating: '5'}]
    }
}