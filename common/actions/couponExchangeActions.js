/**
 * Created by zhangheng on 2016/8/25.
 * 兑换优惠券接口
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';

//确认订单界面 兑换优惠券
export function couponExchangeData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/activity/coupon/exchange', 'POST',data)
            .then((successData) => {
                dispatch(gotCouponInfoData(successData));
            }, (errorMessage) => {

            });
    });
}

//传优惠券 id
export function sendCouponData(couponId) {
    return ((dispatch) => {
        dispatch(sendCouponId(couponId));
    });
}

function gotCouponInfoData(data) {
    return {
        type: Types.COUPONCODE,
        data
    };
}

function sendCouponId(couponId) {
    return {
        type: Types.COUPONID,
        couponId
    }
}