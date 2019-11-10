var initialState = {
    category: [],
    selectedCategory: [],
    selectedSubCategory: []
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'CATEGORIES_RECIEVED':

      return {...state, category:action.category};

    case 'SELECTED_CATEGORY_CHANGED':
        return {...state, selectedCategory:action.selectedCategory}

    case 'SELECTED_SUBCATEGORY_CHANGED':
        return {...state, selectedSubCategory:action.selectedSubCategory}
  
    default:
      return state;
    }


}