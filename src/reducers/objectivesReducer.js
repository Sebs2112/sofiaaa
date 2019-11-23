var initialState = {
	selectedObjectives: []
}

export default (state = initialState, action) => {
    // creates a new object 
  // var updated = Object.assign({}, state);

  switch(action.type) {

    case 'ADD_OBJECTIVE':
      
      const newObs = [...state.selectedObjectives, action.objective]
      return {...state, selectedObjectives:newObs}

    case 'REMOVE_OBJECTIVE':
      
      const newRemovedObs = state.selectedObjectives.filter(obj => obj!==action.objective)
      return {...state, selectedObjectives:newRemovedObs }
  
    default:
      return state;
    }


}