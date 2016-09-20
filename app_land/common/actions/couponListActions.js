/**
 * Created by zhangheng on 2016/8/25.
 * 个人中心  优惠券列表接口
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';

//获取 已使用 未使用 已过期 优惠券列表
export function queryCouponListData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/user/address/status','POST',data)
            .then((successData) => {

                dispatch(gotCouponListData(successData));
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