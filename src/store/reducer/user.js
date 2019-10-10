import {
  FETCH_USER
} from "../action/type";

export default (state = false, action) => {
  //console.log(action.payload)
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload || null;
    default:
      return state;
  }
};