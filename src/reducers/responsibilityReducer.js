var initialState = {
    responsibility: [],
    
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'RESPONSIBILITY_RECIEVED':

      return {...state, responsibility:action.responsibility};
  
    default:
      return state;
    }


}