import store from '../store';
import ActionTypes from '../types';

const {dispatch} = store;

export const add = itemdata => {
 
  dispatch({
    type: ActionTypes.ADD,
    payload:itemdata,
  });
};
export const ondelete = id => {
  dispatch({
    type: ActionTypes.DELETE,

    payload:id,
  });
};

export const onItemAdd = CARTITEM_ID => {
  dispatch({
    type: ActionTypes.ITEMINCREMENT,

    payload:CARTITEM_ID,
  });
};

export const onItemDecrement = id => {
  dispatch({
    type: ActionTypes.ITEMDECREMENT,

    payload:id,
  });
};

export const onInitialPrice = arrayWithInitialPrice => {
  dispatch({
    type: ActionTypes.INITIALPRICE,

    payload:arrayWithInitialPrice,
  });
};
