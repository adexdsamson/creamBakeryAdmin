import {
  FETCH_USER,
  LOGOUT
} from "../action/type";

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload || null;
    case LOGOUT: 
      return state = false;
    default:
      return state;
  }
};