function responsibilitiesRecieved(responsibility){
	return {
		type: 'RESPONSIBILITY_RECIEVED',
		responsibility: responsibility
	}
}

export function getAllResponsibilities(){
	return dispatch => {


		return fetch(`/responsibility/getAll`)
        .then( (response) => response.json() )
		.then( (data) => dispatch(responsibilitiesRecieved(data)))
		.catch( (e) => console.log(e) );
	}	
}
