import { combineReducers } from 'redux';
import auth from "./auth";

import types from '../types';
import cartReducer from './cart';




const appReducer = combineReducers({
    auth,
    cartReducer

});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;