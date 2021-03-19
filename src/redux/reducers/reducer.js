import ActionTypes from '../types';

const initialState = {
  todo: [
   
  ],
};
export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD:
      const {id, content, obj} = action.payload;
      console.log(obj);
      return {
        ...state,
        todo: [...state.todo, obj],
      };

    case ActionTypes.DELETE:
      newArray = state.todo;
      newArray = newArray.filter(item => action.payload.id !== item.id);
      return {
        ...state,
        todo: newArray,
      };

    case ActionTypes.UPDATE:
      newArray = state.todo;
      let elementsIndex = newArray.findIndex(
        element => element.id == action.payload.id,
      );
      console.log(action.payload.id, 'reducer called');
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        content: action.payload.newUpdatedText,
        contentdescription: action.payload.status,
      };

      return {
        todo: newArray,
      };
    default:
      return state;
  }
}
