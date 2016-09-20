import * as Types from '../contants/constants';
import merge from 'lodash/merge';


var sendMessageState = {
	message: null,
}

export function sendMessageReducer(state = sendMessageState,action){
	switch (action.type) {
		case Types.SEND_MESSAGE:
			return merge({},state,{
				message: action.message
			});
			break;
		default:
			return state;
	}
}
