//就是一个function，功能就是在action触发后，返回一个新的state(就是个对象)
import * as Types from '../contants/constants';
import "babel-polyfill";



const protocolState = {
	protocolImg : "common/images/ic_checked_ag@3x.png",
	flag : 0
}

export default function changeProtocolImg(state = protocolState ,action ){
	switch(action.type){
		case Types.PROTOCOLIMG : 
			return Object.assign({},state,{
				protocolImg : "common/images/ic_unchecked_ag@3x.png",
				flag : 1
			})
		case Types.PROTOCOLIMGED : 
			return Object.assign({},state,{
				protocolImg : "common/images/ic_checked_ag@3x.png",
				flag : 0
			})
		default:
			return state;
	}
}

