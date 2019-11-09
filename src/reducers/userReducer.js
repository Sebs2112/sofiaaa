var initialState = {
	user: []
}

export default (state = initialState, action) => {
    // creates a new object 
  // var updated = Object.assign({}, state);

  switch(action.type) {

    case 'USERS_RECIEVED':
      // updated['user'] = action.user;
      // console.log(action.user)
      return {...state, user:action.user};

    default:
      return state;
    }


}