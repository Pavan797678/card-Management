import ActionTypes from '../types';

export const add = (newPostArry, itemIndex) => ({
  type: ActionTypes.ADD,
  payload: {newPostArry, itemIndex},
});
export const ondelete = id => ({
  type: ActionTypes.DELETE,

  payload: {id},
});

export const onItemAdd = CARTITEM_ID => ({
  type: ActionTypes.ITEMINCREMENT,

  payload: {CARTITEM_ID},
});

export const onItemDelete = REMOVEITEM_ID => ({
  type: ActionTypes.ITEMDECREMENT,

  payload: {REMOVEITEM_ID},
});

export const onInitialPrice = arrayWithInitialPrice => ({
  type: ActionTypes.INITIALPRICE,

  payload: {arrayWithInitialPrice},
});
