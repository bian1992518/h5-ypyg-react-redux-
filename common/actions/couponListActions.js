/**
 * Created by zhangheng on 2016/8/25.
 * 个人中心  优惠券列表接口
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';

//获取 已使用 未使用 已过期 优惠券列表
export function queryCouponListData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/activity/coupon/user_coupon','POST',data)
            .then((successData) => {

                dispatch(gotCouponListData(successData));
            }, (errorMessage) => {

            });
    });
}

//兑换优惠券
export function exchangeCouponData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/activity/coupon/exchange','POST',data)
            .then((successData) => {

                dispatch(gotCouponInfoData(successData));
            }, (errorMessage) => {

            });
    });
}


function gotCouponListData(data) {
    return {
        type: Types.COUPONLIST,
        data
    };
}

function gotCouponInfoData(data) {
    return {
        type: Types.COUPONINFO,
        data
    };
}