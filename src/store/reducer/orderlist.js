import { ORDER_LIST, CLEARORDER } from '../action/type';


export default (state = [], action) => {
  switch (action.type) {
    case ORDER_LIST:
      const newOrder = {
        id: action.payload.id,
        name: action.payload.firstName + ' ' + action.payload.lastName,
        email: action.payload.email,
        color: action.payload.color,
        cake: action.payload.cake,
        budget: action.payload.budget,
        address: action.payload.address,
        lg: action.payload.lg,
        occasion: action.payload.occasion,
        size: action.payload.size
      };
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