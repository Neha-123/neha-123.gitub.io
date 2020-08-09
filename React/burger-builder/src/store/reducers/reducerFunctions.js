import { updatedObject } from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export const addIngredient = (state, action) => {
    const modifiedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredient = updatedObject(state.ingredients, modifiedIngredient);
    const updatedState = {
        ingredients: updatedIngredient,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building : true
    }
    return updatedObject(state, updatedState)
}

export const removeIngredient = (state, action) => {
    const modifiedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngredient = updatedObject(state.ingredients, modifiedIngredient);
    const updatedState = {
        ingredients: updatedIngredient,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building : true
    }
    return updatedObject(state, updatedState)
}

export const setIngredient = (state, action) => {
    const updatedState = {
        totalPrice: 4,
        ingredients: action.ingredient,
        error: false,
        building : false
    }
    return updatedObject(state, updatedState)
}

export const setIngredientFailed = (state, action) => {
    const updatedState = {
        error: true
    }
    return updatedObject(state, updatedState)
}

export const purchaseInit = (state, action) => {
    const updatedState = {
        purchased: false
    }
    return updatedObject(state, updatedState)
}

export const purchaseBurgerStart = (state, action) => {
    const updatedState = {
        loading: true
    }
    return updatedObject(state, updatedState)
}
export const purchaseSuccess = (state, action) => {
    const newOrder = { ...action.orderData, id: action.orderId }
    const updatedState = {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    }
    return updatedObject(state, updatedState)
}
export const purchaseFailed = (state, action) => {
    const updatedState = {
        loading: false
    }
    return updatedObject(state, updatedState)
}

export const FetchOrdersStart = (state, action) => {
    const updatedState = {
        loading: true
    }
    return updatedObject(state, updatedState)
}

export const FetchOrdersSuccess = (state, action) => {
    
    const updatedState = {
        orders: action.orders,
        loading: false
    }
    return updatedObject(state, updatedState)
}

export const FetchOrdersFailed = (state, action) => {
    const updatedState = {
        loading: false
    }
    return updatedObject(state, updatedState)
}

export const authStart = (state, action) => {
    const updatedState = {
        error: null,
        loading: true
    }
    return updatedObject(state, updatedState)
}

export const authSuccess = (state, action) => {
    const updatedState = {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    }
    return updatedObject(state, updatedState)
}

export const authFailed = (state, action) => {
    const updatedState = {
        error: action.error,
        loading: false
    }
    return updatedObject(state, updatedState)
}

export const authLogout = (state, action) => {
    const updatedState = {
        token: null,
        userId: null,
    }
    return updatedObject(state, updatedState)
}

export const setRedirectPath = (state, action) => {
    const updatedState = {
        redirectPath : action.path
    }
    return updatedObject(state, updatedState)
}



