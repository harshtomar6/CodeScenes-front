
export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const isErrored = (bool) => {
  return{
    type: 'ERROR_WHILE_LOADING',
    hasError: bool
  }
}

export const fetchDataSucess = (data) => {
  return{
    type: 'DATA_SUCCESS',
    data
  }
}

export const fetchGetData = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(url)
      .then(res => {
        if(!res.ok)
          throw Error(res.statusText);
        return res;
      })
      .then(res => res.json())
      .then(data => {        
        dispatch(fetchDataSucess(data));
        dispatch(isLoading(false));
      })
      .catch(() => {
        dispatch(isErrored(true));
        dispatch(isLoading(false));
      });
  }
}

export const fetchPostData = (url, data) => {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data)
    })
      .then(res => {
        if(!res.ok)
          return dispatch(isErrored(true));

        return res;
      })
      .then(res => res.json())
      .then(data => {
        dispatch(fetchDataSucess(data));
        dispatch(isLoading(false));
      })
      .catch(() => {
        dispatch(isErrored(true));
        dispatch(isLoading(false));
      });
  }
}