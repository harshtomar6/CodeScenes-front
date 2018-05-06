import * as actionTypes from './../action-types';

let initialState = {
  isLoading: false,
  hasError: false,
  errMsg: '',
  data: []
}

export const postReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_POSTS_REQUEST:
      return {...state, isLoading: true}
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {...state, isLoading: false, data: action.payload }
    case actionTypes.FETCH_POSTS_ERROR:
      return {...state, isLoading: false, hasError: true, errMsg: action.payload}
    default:
      return state
  }
}