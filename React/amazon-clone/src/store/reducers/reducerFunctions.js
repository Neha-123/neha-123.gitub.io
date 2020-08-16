import * as actionCreators from '../actions/index';

export const addProducttoCart = (state, action) => {
    
    const selectedProduct = state.product.find(elm => {
        return elm.id === action.id
    })
    
    let cloneProduct = {}

    if (selectedProduct.id) {
        cloneProduct = Object.assign({}, selectedProduct);
    }
    
    const duplicateProduct = state.basket.find(elm => {
        return elm.id === selectedProduct.id
    })

    if (!duplicateProduct) {
        cloneProduct.quantity = 1;
        
        const sum = priceAddition(state.basket, cloneProduct);
        const basket = [
            ...state.basket,
                cloneProduct
        ]
        return {basket, sum};
    } else {
        const quantity = Number(duplicateProduct.quantity) + Number(1);
        
        const newbasketquantity = updateBasketQuantity(state.basket, action.id, quantity);
        const basket = newbasketquantity.newbasket;
        
        const sum = newbasketquantity.sum;
        return {basket, sum};
    }
}

export const priceAddition = (oldbasket, newItem) => {
    let sum = 0;
    let localBasket = [
        ...oldbasket
    ]
    localBasket.push(newItem);
  
    sum = resetPrice(localBasket);
    return sum.toString();
}

export const removeItem = (basket, id) => {

    let newPrice = 0;
    const newBasket = basket.filter(elm => {
        return elm.id !== id
    })
    if (newBasket.length > 0) { 
        newPrice = resetPrice(newBasket);
    }
    
    return { newBasket, newPrice };
}

export const resetPrice = (newBasket) => {
    let sum =0;
    const priceArray = newBasket.map(elm => {
       
        return Number(elm.quantity) * Number(elm.price);
    })
    sum = priceArray.reduce((total, num) => {
        return Number(total) + Number(num)
    })
    return sum.toString();

}

export const updateBasketQuantity = (basket, id, quantity) => {
    let sum = 0;
    const newbasket = basket.map(elm => {
        if (elm.id === id) {
            elm.quantity = Number(quantity);
        }
        return elm;
    })
    
    sum = resetPrice(newbasket);
    return {newbasket, sum};
}