import {SET_TAB} from '../actionTypes';

const initialState = {
	tab: 0
}

export default function(state = initialState, action){
	switch(action.type){
		case SET_TAB: {
			return {
				...state,
				tab: action.payload
			}
		}
		default:
		return state;
	}
}