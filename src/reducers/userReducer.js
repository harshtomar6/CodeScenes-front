import * as actionTypes from './../action-types';

let loggedInls = localStorage.getItem('loggedIn');
let userDatals = localStorage.getItem('userData');

let initialState = {
  isLoading : false,
  hasError : false,
  errMsg: '',
  loggedIn : loggedInls ? JSON.parse(loggedInls) : false,
  userData : userDatals ? JSON.parse(userDatals) : {}
}

export const userReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.LOG_IN_REQUEST:
      return {...state, isLoading: true}
    case actionTypes.LOG_IN_ERROR:
      return {...state, isLoading: false, hasError: true, errMsg: action.payload}
    case actionTypes.LOG_IN_SUCCESS:
      return {...state, isLoading: false, loggedIn: true, userData: action.payload}
    case actionTypes.LOG_OUT:
      return {isLoading: false, hasError: false, errMsg: '', loggedIn: false, userData: {}}
    default: 
      return state;
  }
} 