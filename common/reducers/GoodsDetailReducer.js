import * as Types from '../contants/constants';
import merge from 'lodash/merge';

const goodsDetailData = {
  dataRequesting: true,
  isDataRequestSucc: false,
  goodsDetailData : null,
  cartCount : null,
  pushItemToCart : {errorcode:null},
  unpaidGoodsCount : null,
  collectionGoods : null,
}

export default function GoodsDetailReducer(state = goodsDetailData, action) {
  switch(action.type) {
    case Types.GOT_GOODSDETAILDATA_DATA:
      return merge({}, state, {
        dataRequesting: false,
        goodsDetailData: action.data,
        isDataRequestSucc: true
      });
      break;
    case Types.GOT_CARTCOUNT:
      return merge({}, state, {
        cartCount : action.data,
      });
      break;
    case Types.PUSH_ITEMTOCART:
      return merge({}, state, {
        pushItemToCart : action.data,
      });
      break;
    case Types.DIRECTCHANGE:
      return merge({}, state, {
        unpaidGoodsCount : action.data,
      });
      break;
    case Types.COLLECTIONGOODS:
      return merge({}, state, {
        collectionGoods : action.data,
      });
      break;
    default:
      return ({
        dataRequesting: true,
        isDataRequestSucc: false,
        goodsDetailData : null,
        cartCount : null,
        pushItemToCart : {errorcode:null},
        unpaidGoodsCount : null,
        collectionGoods : null,
      });
  }
}
