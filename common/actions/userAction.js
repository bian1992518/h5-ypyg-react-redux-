//定义方法，将来把它绑定在props上
import * as ActionTypes from '../contants/constants';
//我的收藏
export function collectionHandle(){
	return {
		type : ActionTypes.COLLECTION,
	}
}
export function unCollectionHandle(){
	return {
		type : ActionTypes.UNCOLLECTION,
	}
}
export function concernHandle(){
	return {
		type : ActionTypes.CONCERN,
	}
}
//我的订单
export function myAllOrderHandle(){
	return {
		type : ActionTypes.MYALLORDER,
	}
}
export function waitPaidOrderHandle(){
	return {
		type : ActionTypes.WAITPAIDORDER,
	}
}
export function waitSendOrderHandle(){
	return {
		type : ActionTypes.WAITSENDORDER,
	}
}
export function waitReceiveOrderHandle(){
	return {
		type : ActionTypes.WAITRECEIVEORDER,
	}
}
export function waitCommentOrderHandle(){
	return {
		type : ActionTypes.WAITCOMMENTORDER,
	}
}
export function myOrderStateHandle(index){
	switch (index) {
		case '0':
			return {
				type : ActionTypes.MYALLORDER,
			}
			break;
		case '1':
			return {
				type : ActionTypes.WAITPAIDORDER,
			}
			break;
		case '2':
			return {
				type : ActionTypes.WAITSENDORDER,
			}
			break;
		case '3':
			return {
				type : ActionTypes.WAITRECEIVEORDER,
			}
			break;
		case '4':
			return {
				type : ActionTypes.WAITCOMMENTORDER,
			}
			break;
		default:
			return {
				type : ActionTypes.MYALLORDER,
			}
	}
}
export function orderDetailDataHandle(data){
	return {
		type : ActionTypes.ORDERDETAILDATA,
		message : {data},
	}
}
