
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
        
        return elm._id !== id
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
    const cloneBasket = Object.assign([], basket)
    cloneBasket.forEach(element => {
        if (element.product_id === id) {
            element.quantity = Number(quantity);
            
        }
    });
    
    sum = resetPrice(cloneBasket);
    
    return {cloneBasket, sum};
}

export const extractToken = (tokens) => {
    
    return tokens[tokens.length -1]
}