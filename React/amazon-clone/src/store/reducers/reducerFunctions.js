export const priceAddition = (oldbasket, newItem) => {
    
    let localBasket = [
        ...oldbasket
    ]
    localBasket.push(newItem);
    const priceArray = localBasket.map(elm => {
        return elm.price;
    })
    debugger
    const sum = priceArray.reduce((total, num) => {
           return Number(total) + Number(num)
        })
         
    return sum.toString();
}

export const removeItem = (basket, id) => {
    
    const newBasket = basket.filter(elm => {
        return elm.id !== id
    })

    const newPrice = resetPrice(newBasket);
    return {newBasket, newPrice};
}

export const resetPrice = (newBasket) => {
    let sum = 0;
    if(newBasket.length>0) {
        const priceArray = newBasket.map(elm => {
            return elm.price;
        })
         sum = priceArray.reduce((total, num) => {
            return Number(total) + Number(num)
         })
    }
    return sum.toString();
    
}