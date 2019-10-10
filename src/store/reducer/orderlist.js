import { ORDER_LIST } from '../action/type';

const initialState = {
  order: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LIST:
      const newOrder = {
        id: action.payload._id,
        name: action.payload.firstName + ' ' + action.payload.lastName,
        //phone: action.payload.phone,
        email: action.payload.email
      };
      console.log('orderlist-reduxStore', newOrder);
      return {
        ...state,
        order: [...state.order, newOrder]
      };
    default:
      return state;
  }
  
}