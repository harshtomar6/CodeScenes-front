
const initialState = {
  data: null,
  isLoading: true,
  hasError: false
}

const home = (state = initialState, action) => {
  switch(action.type){
    case 'IS_LOADING':
      return Object.assign({}, state, {isLoading: action.isLoading});
    case 'ERROR_WHILE_LOADING':
      return Object.assign({}, state, {hasError: action.hasError});
    case 'DATA_SUCCESS':
      return Object.assign({}, state, {data: action.data});
    default:
      return state;
  }
}

export default home;