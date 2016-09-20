import * as Types from '../contants/constants';
import merge from 'lodash/merge';

var orderState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  myAllOrderData : null,
  waitPaidOrderData : null,
  waitSendOrderData : null,
  waitReceiveOrderData : null,
  waitCommentOrderData : null,
  selected : '0',
}
var orderDetailState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  orderDetailData : null,
}
export function userOrderReducer(state = orderState, action){
  switch (action.type) {
		case Types.MYALLORDER :
			return merge({}, state, {
        selected : '0',
        dataRequesting: false,
        isDataRequestSucc: true,
        myAllOrderData : action.data,
			})
			break;
		case Types.WAITPAIDORDER :
			return merge({}, state, {
        selected : '1',
        dataRequesting: false,
        isDataRequestSucc: true,
        waitPaidOrderData : action.data,
			})
			break;
		case Types.WAITSENDORDER :
			return merge({}, state, {
        selected : '2',
        dataRequesting: false,
        isDataRequestSucc: true,
        waitSendOrderData : action.data,
			})
			break;
		case Types.WAITRECEIVEORDER :
			return merge({}, state, {
        selected : '3',
        dataRequesting: false,
        isDataRequestSucc: true,
        waitReceiveOrderData : action.data,
			})
			break;
    case Types.WAITCOMMENTORDER :
			return merge({}, state, {
        selected : '4',
        dataRequesting: false,
        isDataRequestSucc: true,
        waitCommentOrderData : action.data,
			})
			break;
		default:
      return merge({}, state, {
        selected : '5',
        dataRequesting: true,
        isDataRequestSucc: false,
        myAllOrderData : null,
      })
	}
}

export function userOrderDetailReducer(state = orderDetailState, action) {
  switch (action.type) {
    case Types.USERORDERDETAIL:
      return merge({}, state, {
        dataRequesting: false,
        isDataRequestSucc: true,
        orderDetailData : action.data,
      })
      break;
    default:
      return merge({}, state, {
        dataRequesting: true,
        isDataRequestSucc: false,
        orderDetailData : null,
      })
  }

}
