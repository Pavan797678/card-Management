import ActionTypes from '../types';

const initialState = {
  todo: [],
  total: 0,
  userData:{}
};
export default function CartReducer(state = initialState, action) {
  

  switch (action.type) {
    case ActionTypes.ADD:
      const {itemdata} = action.payload;

      if (!state.todo.includes(itemdata)) {
        itemdata.quantity += 1;
        todo = [...state.todo, itemdata];
      }
      return {
        ...state,
        todo,
      };

    case ActionTypes.DELETE:
      newArray = state.todo;
      newArray = newArray.filter(item => action.payload.id !== item.id);

      let decrementedpriceAfterDeleteProduct = 0;
      for (let i = 0; i < newArray.length; i++) {
        decrementedpriceAfterDeleteProduct +=
          newArray[i].price * newArray[i].quantity;
      }
      return {
        ...state,
        todo: newArray,
        total: decrementedpriceAfterDeleteProduct,
      };

    case ActionTypes.UPDATE:
      newArray = state.todo;
      let elementsIndex = newArray.findIndex(
        element => element.id == action.payload.id,
      );

      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        content: action.payload.newUpdatedText,
        contentdescription: action.payload.status,
      };

      return {
        todo: newArray,
      };
    case ActionTypes.ITEMINCREMENT:
      let newQuantityArray = [...state.todo];

      const quantityArrayIndex = newQuantityArray.findIndex(
        item => item.id === action.payload.CARTITEM_ID,
      );
      let finalQuantityArray = newQuantityArray[quantityArrayIndex];

      finalQuantityArray.quantity += 1;

      let array = [...newQuantityArray];

      let price = 0;
      for (let i = 0; i < newQuantityArray.length; i++) {
        price += newQuantityArray[i].price * newQuantityArray[i].quantity;
      }

      return {
        ...state,
        todo: array,
        total: price,
      };

    case ActionTypes.ITEMDECREMENT:
      let previousQuantityArray = [...state.todo];

      const quantityArrayIndex1 = previousQuantityArray.findIndex(
        item => item.id === action.payload.REMOVEITEM_ID,
      );
      let decrementQuantityArray = previousQuantityArray[quantityArrayIndex1];

      if (decrementQuantityArray.quantity === 1) {
        decrementQuantityArray.price =
          decrementQuantityArray.price / decrementQuantityArray.quantity;
      } else {
        decrementQuantityArray.quantity -= 1;
      }

      let decrementarray = [...previousQuantityArray];

      let decrementedprice = 0;
      for (let i = 0; i < previousQuantityArray.length; i++) {
        decrementedprice +=
          previousQuantityArray[i].price * previousQuantityArray[i].quantity;
      }

      return {
        ...state,
        todo: decrementarray,
        total: decrementedprice,
      };

    case ActionTypes.INITIALPRICE:
      let initialarray = [...action.payload.arrayWithInitialPrice];

      let initialPrice = 0;
      for (let i = 0; i < initialarray.length; i++) {
        initialPrice += initialarray[i].price * initialarray[i].quantity;
      }

      return {
        ...state,
        total: initialPrice,
      };

      case ActionTypes.LOGIN:
        const{userData}=action.payload
        return{
          ...state,
          userData:userData
        }

    default:
      return state;
  }
}
