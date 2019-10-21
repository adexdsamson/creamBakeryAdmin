import { combineReducers } from 'redux';
import User from './user';
import Order from './orderlist';
import Recipe from './recipe';
import Chef from './chef';
import Blog from './blog';
import Feedback from './feedback';


export default combineReducers({
  User,
  Order, 
  Recipe,
  Chef,
  Blog,
  Feedback
});