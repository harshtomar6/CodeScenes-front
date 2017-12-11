
export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    payload: data
  }
}

export const isLoading = (bool) => {
  console.log('loading');
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const isErrored = (bool) => {
  console.log('error');
  return{
    type: 'ERROR_WHILE_LOADING',
    hasError: bool
  }
}

export const fetchDataSucess = (data) => {
  console.log(data);
  return{
    type: 'DATA_SUCCESS',
    data
  }
}

export const fetchData = (url) => {
  return (dispatch) => {
    console.log("Fetch Called")
    dispatch(isLoading(true));

    fetch(url)
      .then(res => {
        if(!res.ok)
          throw Error(res.statusText);

        dispatch(isLoading(false));

        return res;
      })
      .then(res => res.json())
      .then(data => dispatch(fetchDataSucess(data)))
      .catch(() => dispatch(isErrored(true)));
  }
}