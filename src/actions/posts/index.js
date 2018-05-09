import { getData, postData } from './../../globals';
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

export const fetchSinglePost = postId => {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_SINGLE_POST_REQUEST});
    return getData('/api/post/'+postId)
      .then(res => {
        if(res.err)
          dispatch({type: actionTypes.FETCH_SINGLE_POST_ERROR, payload: res.err})
        else
          dispatch({type: actionTypes.FETCH_SINGLE_POST_SUCCESS, payload: res.data})
      })
  }
}

export const addPostToServer = data => {
  return dispatch => {
    dispatch({type: actionTypes.ADD_POST_REQUEST});
    return postData({
      path: '/api/post',
      headers: {
        'X-Access-Token': data.token,
        'X-Key': data.key
      }
    }).then(res => {
      if(res.err)
        dispatch({type: actionTypes.ADD_POST_ERROR, payload: res.err})
      else
        dispatch({type: actionTypes.ADD_POST_SUCCESS, payload: res.data})
    })
  }
}

export const savePostLocally = data => {
  return dispatch => {
    dispatch({type: actionTypes.SAVE_POST, payload: data});
  }
}