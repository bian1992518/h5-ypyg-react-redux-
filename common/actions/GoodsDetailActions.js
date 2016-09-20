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
    requestData('http://ndapi.bestinfoods.com/order/post/addcart', 'POST', parameter)
    .then((successData) => {
      dispatch(gotPushItemToCart(successData));
    }, (errorMessage) => {

    });
  });
}
function gotPushItemToCart(data) {
  return {
    type: Types.PUSH_ITEMTOCART,
    data
  };
}
//立即购买
export function queryDirectchange(parameter) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/order/get/directchange', 'POST', parameter)
    .then((directData) => {
      // console.log('1111',directData);
      // console.log('1112',directData.data);
      dispatch(gotDirectchange(directData));
    }, (errorMessage) => {

    });
  });
}
function gotDirectchange(data) {
  // console.log('2222',data.data);
  return {
    type: Types.DIRECTCHANGE,
    data
  };
}
//收藏商品
export function queryCollectgoods(parameter) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com//user/post/collectgoods', 'POST', parameter)
    .then((successData) => {
      dispatch(gotCollectgoods(successData));
    }, (errorMessage) => {

    });
  });
}
function gotCollectgoods(data) {
  return {
    type: Types.COLLECTIONGOODS,
    data
  };
}
