function categoriesRecieved(category){
	return {
		type: 'CATEGORIES_RECIEVED',
		category: category
	}
}

export function selectedCategoryChanged(category){
    return{
        type:'SELECTED_CATEGORY_CHANGED',
        selectedCategory:category
    }
}

export function selectedSubCategoryChanged(subcategory){
    return{
        type:'SELECTED_SUBCATEGORY_CHANGED',
        selectedSubCategory:subcategory
    }
}

export function addSkillChosen(skill){
	return{
		type:'ADD_SKILL',
		skill:skill
	}
}
export function removeSkillChosen(skill){
	return{
		type:'REMOVE_SKILL',
		skill:skill
	}
}

export function getAllCategories(){
	return dispatch => {


		return fetch(`/category/getAll`)
        .then( (response) => response.json() )
		.then( (data) => dispatch(categoriesRecieved(data)))
		.catch( (e) => console.log(e) );
	}	
}

