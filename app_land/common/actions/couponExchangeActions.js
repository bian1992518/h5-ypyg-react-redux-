/**
 * Created by zhangheng on 2016/8/25.
 * 兑换优惠券接口
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';

//待定

export function couponExchangeData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.comuser/address/save', 'POST',data)
            .then((successData) => {
                dispatch(gotCouponInfoData(successData));
            }, (errorMessage) => {

            });
    });
}

function gotCouponInfoData(data) {
    return {
        type: Types.COUPONCODE,
        data
    };
}