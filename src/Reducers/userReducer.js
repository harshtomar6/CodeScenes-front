
let initialState = {
  loggedIn: false,
  data: []
}

const user = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN':
      console.log('ho gya h');
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

export default user;