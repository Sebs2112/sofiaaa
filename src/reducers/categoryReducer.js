var initialState = {
    category: [],
    selectedCategory: [],
    selectedSubCategory: [],
    skillsChosen: []
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'CATEGORIES_RECIEVED':

      return {...state, category:action.category};

    case 'SELECTED_CATEGORY_CHANGED':
      return {...state, selectedCategory:action.selectedCategory}

    case 'SELECTED_SUBCATEGORY_CHANGED':
      return {...state, selectedSubCategory:action.selectedSubCategory}

    case 'ADD_SKILL':
      
      const newSkills = [...state.skillsChosen, action.skill]
      return {...state, skillsChosen:newSkills}

    case 'REMOVE_SKILL':
      
      const newRemovedSKills = state.skillsChosen.filter(skill => skill!==action.skill)
      return {...state, skillsChosen:newRemovedSKills}
  
    default:
      return state;
    }


}