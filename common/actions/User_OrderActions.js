import * as Types from '../contants/constants';
import requestData from '../config/request';

export function queryUserOrderData(handleId,page) {
  page = page?page:1;
  let parameter = {
    condition : handleId,
    page : page,
    perPage : 5,
  }
  // return ((dispatch) => {
  //   requestData('http://ndapi.bestinfoods.com/order/get/orderlist', 'POST', parameter)
  //   .then((orderData) => {
  //     dispatch(gotUserOrderData('MYALLORDER',orderData));
  //   },(errorMessage) => {
  //
	// 	});
  // });
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/order/get/orderlist', 'POST', parameter)
    .then((orderData) => {
      if (handleId === '0') {
        dispatch(gotUserOrderData('MYALLORDER',orderData));
      }else if (handleId === '1') {
        dispatch(gotUserOrderData('WAITPAIDORDER',orderData));
      }else if (handleId === '2') {
        dispatch(gotUserOrderData('WAITSENDORDER',orderData));
      }else if (handleId === '3') {
        dispatch(gotUserOrderData('WAITRECEIVEORDER',orderData));
      }else if (handleId === '4') {
        dispatch(gotUserOrderData('WAITCOMMENTORDER',orderData));
      }else {
        dispatch(gotUserOrderData('',null));
      }
    },(errorMessage) => {

		});
  });
}

function gotUserOrderData(typeState,data) {
  return {
    type: typeState,
    data
  };
}

export function queryUserOrderDetailData(parameter) {
  return (
    (dispatch) => {
      requestData('http://ndapi.bestinfoods.com/order/get/orderdetails', 'POST', parameter)
      .then((successData) => {
        dispatch(gotUserOrderDetailData(successData));
      },
      (errorMessage) => { });
    }
  )
}

function gotUserOrderDetailData(data) {
  return {
    type: Types.USERORDERDETAIL,
    data
  };
}
