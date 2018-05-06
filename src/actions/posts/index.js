import { getData } from './../../globals';
import * as actionTypes from './../../action-types';

export const fetchPosts = () => {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_POSTS_REQUEST});
    return getData('/api/post')
      .then(res => {
        if(res.err)
          dispatch({type: actionTypes.FETCH_POSTS_ERROR, payload: res.err})
        else
          dispatch({type: actionTypes.FETCH_POSTS_SUCCESS, payload: res.data});
      })
  }
}