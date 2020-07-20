import * as actionTypes from '../actions/actionTypes';
import { addIngredient, removeIngredient, setIngredient, setIngredientFailed } from './reducerFunctions';

const InitialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building : false,
    
}

// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     cheese: 0.4,
//     meat: 1.3,
//     bacon: 0.7
// }

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        //     },
        //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        // };
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        //     },
        //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        // };
        case actionTypes.SET_INGREDIENT: return setIngredient(state, action);
        // return {
        //     ...state,
        //     totalPrice: 4,
        //     ingredients: action.ingredient,
        //     error: false
        // }
        case actionTypes.SET_INGREDIENT_FAILED: return setIngredientFailed(state, action);
        // return {
        //     ...state,
        //     error: true
        // }
        
        default:
            return state;
    }
}

export default reducer;