var initialState = {
  skills: [],
  selectedSkill: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SKILLS_RECIEVED":
      return { ...state, skills: action.skills };
    
    case 'SELECTED_SKILL_CHANGED':
        console.log("reducer")
        return {...state, selectedSkill:action.selectedSkill}
  
    default:
      return state;
  }
};
