import * as Types from '../contants/constants';

export function sendMessageHandle(message){
	return {
		type : Types.SEND_MESSAGE,
    message
	}
}
