/**
 * Created by zhangheng on 2016/8/25.
 * 兑换优惠券
 */

import * as Types from '../contants/constants';

const  couponInfoState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    couponId: "",
    couponInfoData:[
        {
            id: 2,
            star_time: 1467886048,
            end_time: 2777040000,
            coupon_award: 20,
            coupon_condition: 100,
            good_type: 2,
        }
    ]
};


export default function couponInfoReducer(state = couponInfoState, action) {
    switch(action.type) {
        case Types.COUPONCODE:
            return Object.assign({}, state, {
                dataRequesting: false,
                couponInfoData: action,
                isDataRequestSucc: true
            });
        case Types.COUPONID:
            return Object.assign({}, state, {
                couponId: action.couponId
            });
        default:
            return state;
    }
}