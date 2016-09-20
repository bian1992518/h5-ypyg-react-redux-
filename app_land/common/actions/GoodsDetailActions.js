import * as Types from '../contants/constants';
import requestData from '../config/request';

//请求商品详情
export function queryGoodsDetailData(parameter) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/item/get/goodsbasicinfobygoodsid', 'POST', parameter)
    .then((successData) => {

      dispatch(gotGoodsDetailData(successData));
    }, (errorMessage) => {

    });
  });
}
function gotGoodsDetailData(data) {
  return {
    type: Types.GOT_GOODSDETAILDATA_DATA,
    data
  };
}
//请求购物车数量
export function queryCartCount() {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/order/get/getcartcount', 'POST')
    .then((successData) => {

      dispatch(gotCartCount(successData));
    }, (errorMessage) => {

    });
  });
}
function gotCartCount(data) {
  return {
    type: Types.GOT_CARTCOUNT,
    data
  };
}
//添加购物车
export function queryPushItemToCart(parameter) {
  return ((dispatch) => {
    // requestData('http://apitest.bestinfoods.com:8080/apiserver/api/ec/pushItemToCart', 'POST', parameter)
    // .then((successData) => {
    //
    //   dispatch(gotPushItemToCart(successData));
    // }, (errorMessage) => {
    //
    // });
    let data = {"data":{"userId":250382,"totalAmount":4},"message":"OK!","errorcode":"0"};
    dispatch(gotPushItemToCart(data));
  });
}
function gotPushItemToCart(data) {
  return {
    type: Types.PUSH_ITEMTOCART,
    data
  };
}
