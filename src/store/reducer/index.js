import { combineReducers } from 'redux';
import user from './user';
import Order from './orderlist';
import Recipe from './recipe';
import Chef from './chef';
import Blog from './blog';
import Feedback from './feedback';
import Response from './response';
import { reducer as FormReducer } from 'redux-form';


export default combineReducers({
  user,
  Order, 
  Recipe,
  Chef,
  Blog,
  Feedback,
  Response,
  form: FormReducer
});