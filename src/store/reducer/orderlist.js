import { ORDER_LIST, CLEARORDER } from '../action/type';


export default (state = [], action) => {
  switch (action.type) {
    case ORDER_LIST:
      const newOrder = {
        id: action.payload._id,
        name: action.payload.firstName + ' ' + action.payload.lastName,
        //phone: action.payload.phone,
        email: action.payload.email
      };
      console.log('orderlist-reduxStore', newOrder);
      return [
        ...state,
        newOrder
      ];
    case CLEARORDER: 
      return state = []
    default:
      return state;
  }
  
}