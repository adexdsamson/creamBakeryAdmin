import { combineReducers } from 'redux';
import User from './user';
import OrderList from './orderlist';


export default combineReducers({
  User, OrderList
});