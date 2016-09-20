import * as Types from '../contants/constants';
import merge from 'lodash/merge';

const goodsDetailData = {
  dataRequesting: true,
  isDataRequestSucc: false,
  goodsDetailData : null,
  cartCount : null,
  pushItemToCart : {errorcode:null},
}

export default function GoodsDetailReducer(state = goodsDetailData, action) {
  switch(action.type) {
    case Types.GOT_GOODSDETAILDATA_DATA:
      return merge({}, state, {
        dataRequesting: false,
        goodsDetailData: action.data,
        isDataRequestSucc: true
      });
    case Types.GOT_CARTCOUNT:
      return merge({}, state, {
        cartCount : action.data,
      });
    case Types.PUSH_ITEMTOCART:
      return merge({}, state, {
        pushItemToCart : action.data,
      });
    default:
      return ({}, state, {
        pushItemToCart : {errorcode:null},
      });
  }
}
