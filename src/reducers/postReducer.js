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

let singleInitialState = {
  isLoading: true,
  hasError: false,
  errMsg: '',
  data: {}
}

export const singlePostReducer = (state=singleInitialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_SINGLE_POST_REQUEST:
      return {...state, isLoading: true}
    case actionTypes.FETCH_SINGLE_POST_SUCCESS:
      return {...state, isLoading: false, data: action.payload}
    case actionTypes.FETCH_SINGLE_POST_ERROR:
      return {...state, isLoading: false, hasError: true, errMsg: action.payload}
    default:
      return state
  }
}

let draftState = {
  isLoading: false,
  hasError: false,
  errMsg: '',
  data: []
}

export const addPostReducer = (state=draftState, action) => {
  switch(action.type){
    case actionTypes.ADD_POST_REQUEST:
      return {...state, isLoading: true}
    case actionTypes.ADD_POST_SUCCESS:
      return {...state, isLoading: false, data: action.payload}
    case actionTypes.ADD_POST_ERROR:
      return {...state, isLoading: false, hasError: true, errMsg: action.payload}
  }
}