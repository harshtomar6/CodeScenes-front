import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postReducer, singlePostReducer } from './postReducer';

export default combineReducers({
  user: userReducer,
  posts: postReducer,
  singlePost: singlePostReducer
});