import * as Types from '../contants/constants';

export function protocolHandle(param){
	return {
		type : ( param == 0 ) ?  Types.PROTOCOLIMG : Types.PROTOCOLIMGED,
	}
}