/**
 * Created by zhangheng on 2016/8/23.
 * 地址列表
 */

import * as Types from '../contants/constants';

const  addressListState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  addressListData:[],
  choosedAddressId: null
};


export default function addressListReducer(state = addressListState, action) {
    switch(action.type) {
        case Types.ADDRESSLIST:
            return Object.assign({}, state, {
                dataRequesting: false,
                addressListData: action.data,
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
