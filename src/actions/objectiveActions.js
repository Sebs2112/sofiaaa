export function addObjective(objective){
	return{
		type:'ADD_OBJECTIVE',
		objective:objective
	}
}
export function removeObjective(objective){
	return{
		type:'REMOVE_OBJECTIVE',
		objective:objective
	}
}