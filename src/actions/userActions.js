function usersRecieved(user){
	return {
		type: 'USERS_RECIEVED',
		user: user
	}
}



export function getAllUsers(){
	return dispatch => {
		console.log();

		return fetch(`/user/getAll`)
        .then( (response) => response.json() )
		.then( (data) => dispatch(usersRecieved(data)))
		.catch( (e) => console.log(e) );
	}	
}




// export function createUser(data){
// 	return dispatch => {
// 		return fetch('/user/', { 
// 			method: 'POST', 
//  			headers: {
//     			'Accept': 'application/json',
//     			'Content-Type': 'application/json'
//   			},
// 			body: JSON.stringify(data), 
// 			mode: 'cors'})
// 			.catch( (e) => console.log(e) );
// 	}	
// }