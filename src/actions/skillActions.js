function skillsRecieved(skill){
	return {
		type: 'SKILLS_RECIEVED',
		skills: skill
	}
}


export function selectedSkillChanged(skill){
    return{
        type:'SELECTED_SKILL_CHANGED',
        selectedSkill:skill
    }
}



export function getAllSkills(){
	return dispatch => {


		return fetch(`/skill/getAll`)
        .then( (response) => response.json() )
		.then( (data) => dispatch(skillsRecieved(data)))
		.catch( (e) => console.log(e) );
	}	
}