
const initialState = {
  data: null,
  isLoading: false,
  hasError: false
}

const home = (state = initialState, action) => {
  switch(action.type){
    case 'IS_LOADING':
      return Object.assign({}, state, action.isLoading);
    case 'ERROR_WHILE_LOADING':
      return Object.assign({}, state, action.hasError);
    case 'DATA_SUCCESS':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export default home;