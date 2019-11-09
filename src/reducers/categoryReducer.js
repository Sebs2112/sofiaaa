var initialState = {
    category: [],
    selectedCategory: []
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'CATEGORIES_RECIEVED':

      return {...state, category:action.category};

    case 'SELECTED_CATEGORY_CHANGED':
        return {...state, selectedCategory:action.selectedCategory}

    default:
      return state;
    }


}