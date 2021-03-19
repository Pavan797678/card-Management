import ActionTypes from '../types';

export const add = obj => ({
  type: ActionTypes.ADD,
  payload: {obj},
});
export const ondelete = id => ({
  type: ActionTypes.DELETE,

  payload: {id},
});

export const onupdate = (id, newUpdatedText, status) => ({
  type: ActionTypes.UPDATE,

  payload: {id, newUpdatedText, status},
});
