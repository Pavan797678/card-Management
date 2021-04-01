import {combineReducers} from 'redux';
import authreducer from './authreducer';
import carts from './cart';




export default combineReducers({
  authreducer,
  carts,
})



