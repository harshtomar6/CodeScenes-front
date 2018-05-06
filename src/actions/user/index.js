import { postData } from './../../globals';
import * as actionTypes from './../../action-types';

export const logInUser = data => {
  return dispatch => {
    dispatch({type: actionTypes.LOG_IN_REQUEST});
    return postData('/user/login', {
      email: data.email,
      password: data.password
    }).then(res => {
      if(res.err){
        console.log(res)
        dispatch({
          type: actionTypes.LOG_IN_ERROR,
          payload: res.err
        })
      }
      else{
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(res.data));
        dispatch({
          type: actionTypes.LOG_IN_SUCCESS,
          payload: res.data
        })
      }  
    });
  }
}

export const logOutUser = () => {
  return (dispatch) => {
    dispatch({type: actionTypes.LOG_OUT});
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userData');
  }
}