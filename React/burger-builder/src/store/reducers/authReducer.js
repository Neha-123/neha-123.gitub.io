import * as actionTypes from '../actions/actionTypes';
import { authStart, authSuccess, authFailed, authLogout, setRedirectPath } from './reducerFunctions';

const InitialState = {
    token : null,
    userId : null,
    error : null,
    loading : false,
    redirectPath : '/'
};

const reducer = (state = InitialState, action) => {

    switch(action.type) {
        case actionTypes.AUTH_START : return authStart(state, action);
        case actionTypes.AUTH_SUCCESS : return authSuccess(state, action);
        case actionTypes.AUTH_FAILED : return authFailed(state, action);
        case actionTypes.AUTH_LOGOUT : return authLogout(state, action);
        case actionTypes.REDIRECT_PATH: return setRedirectPath(state, action);
        default : return state;
    }
}

export default reducer;