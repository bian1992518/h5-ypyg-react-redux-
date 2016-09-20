/**
 * Created by zhangheng on 2016/8/23.
 * 地址详情
 */

import * as Types from '../contants/constants';

const addressDetailState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    addressDataAdd :null,
    addressDataChange: null,
    addressDetailData: {
     address_id : 32,
     user_id : 1,
     consignee : "王旭军",
     province_id : 11,
     city_id : 87,
     district_id : 887,
     province : "浙江",
     city : "杭州市" ,
     district : "淳安县",
     address : "威坪镇",
     mobile :  "17858621108",
     email : null,
     idcard :  "330127199304036110",
     telephone : "-" ,
     zipcode :  "311700",
     status : 1,
     is_default : 2
  }
};

export default function addressDetailReducer(state = addressDetailState, action) {
  switch(action.type) {
    case Types.ADDRESSDETAIL:
      return Object.assign({}, state, {
        dataRequesting: false,
        addressDetailData: action.data,
        isDataRequestSucc: true
      });
    case Types.ADDRESSDETAIL_ADD:
          return Object.assign({}, state, {
              dataRequesting: false,
              addressDataAdd: action,
              isDataRequestSucc: true
          });
    case Types.ADDRESSDETAIL_CHANGE:
          return Object.assign({}, state, {
              dataRequesting: false,
              addressDataChange: action.data,
              isDataRequestSucc: true
          });
      case Types.PROVINCELIST:
          return Object.assign({}, state, {
              dataRequesting: false,
              provinceListData: action.data,
              isDataRequestSucc: true
          });
      case Types.CITYLIST:
          return Object.assign({}, state, {
              dataRequesting: false,
              cityListData: action.data,
              isDataRequestSucc: true
          });
      case Types.COUNTYLIST:
          return Object.assign({}, state, {
              dataRequesting: false,
              countyListData: action.data,
              isDataRequestSucc: true
          });
    default:
      return state;
  }
}
