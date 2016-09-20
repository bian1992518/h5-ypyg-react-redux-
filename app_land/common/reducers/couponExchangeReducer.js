/**
 * Created by zhangheng on 2016/8/25.
 * 兑换优惠券
 */

import * as Types from '../contants/constants';

const  couponInfoState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    couponInfoData:[
        {address_id:1,consignee:"小明1",address:"中山路256号 桃子街道1栋",mobile:"123456789",is_default:1},
    ]
};


export default function couponInfoReducer(state = couponInfoState, action) {
    switch(action.type) {
        case Types.COUPONCODE:
            return Object.assign({}, state, {
                dataRequesting: false,
                couponInfoData: action.data,
                isDataRequestSucc: true
            });
        default:
            return state;
    }
}