import { ORDER_LIST, GET_ORDER, FETCH_USER } from './type';
import axios from 'axios';



export const dispatchOrder = data => dispatch => {
  //console.log('reduxFunction', data) working 
  dispatch({
    type: ORDER_LIST,
    payload: data
  });
};

export const dispatchAllOrder = () => async dispatch => {
  var res = await axios.get('');
  dispatch({
    type: GET_ORDER,
    payload: res
  })
}

export const fetchUser = () => async dispatch => {
  // feetch user's auth change state
  var res = await axios.get('/api/app/auth');
  console.log("auth res",res);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};