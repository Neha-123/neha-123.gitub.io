import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/index';
import axios from '../../axios-orders';

export function* getIngredientSaga (action) {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actionCreators.setIngredient(response.data));
    } catch (error) {
        yield put(actionCreators.setIngredientFailed());
    }
    
}