/**
 * Created by zhangheng on 2016/8/23.
 * 地址列表
 */

import * as Types from '../contants/constants';

const  addressListState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  addressListData:[
      {   address_id: 49,
          user_id: 1,
          consignee: "余小钢",
          province_id: 5,
          city_id: 31,
          district_id: 398,
          province: "内蒙古",
          city: "呼伦贝尔市",
          district: "新巴尔虎左旗",
          address: "哈啊哈哈",
          mobile: "17858621108",
          email: null,
          idcard: "33012719930403610",
          telephone: "",
          zipcode: "021200",
          status: 1,
          is_default: 2}
  ],
  choosedAddressId: null
};


export default function addressListReducer(state = addressListState, action) {
    switch(action.type) {
        case Types.ADDRESSLIST:
            return Object.assign({}, state, {
                dataRequesting: false,
                addressListData: action,
                isDataRequestSucc: true
            });
        case Types.ADDRESSLIST_DEFAULT:
            return Object.assign({}, state, {
                dataRequesting: false,
                addressListDefault: action.data,
                isDataRequestSucc: true
            });
        case Types.CACHE_CHOOSED_ADDRESS:
            return Object.assign({}, state, {
                choosedAddressId: action.choosedAddressData
            });
        default:
            return state;
    }
}
