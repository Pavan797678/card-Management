import { combineReducers } from 'redux';
import auth from "./auth";
import appTheme from "./appTheme";
import types from '../types';
import CartReducer from './reducer';




const appReducer = combineReducers({
    auth,
    appTheme,
    CartReducer

});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;