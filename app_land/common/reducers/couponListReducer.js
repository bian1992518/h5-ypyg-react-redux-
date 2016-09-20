/**
 * Created by zhangheng on 2016/8/25.
 * 个人中心  优惠券列表
 */

import * as Types from '../contants/constants';

const  couponListState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    couponListData:[
        {
            id: 0,
            describe: "注册满20元减10元",
            condition: "满20元使用",
            beginTime: "2016.04.09",
            endTime: "2016.08.09",
            valueMoney: "10"
        },
        {
            id: 1,
            describe: "注册满10元减5元",
            condition: "满10元使用",
            beginTime: "2016.05.09",
            endTime: "2016.10.09",
            valueMoney: "5"
        },
        {
            id: 2,
            describe: "注册满30元减10元",
            condition: "满30元使用",
            beginTime: "2015.10.09",
            endTime: "2016.08.09",
            valueMoney: "10"
        },
        {
            id: 3,
            describe: "注册满100元减20元",
            condition: "满100元使用",
            beginTime: "2016.01.09",
            endTime: "2016.07.09",
            valueMoney: "20"
        },
        {
            id: 0,
            describe: "注册满20元减10元",
            condition: "满20元使用",
            beginTime: "2016.04.09",
            endTime: "2016.08.09",
            valueMoney: "10"
        },
        {
            id: 1,
            describe: "注册满10元减5元",
            condition: "满10元使用",
            beginTime: "2016.05.09",
            endTime: "2016.10.09",
            valueMoney: "5"
        },
        {
            id: 2,
            describe: "注册满30元减10元",
            condition: "满30元使用",
            beginTime: "2015.10.09",
            endTime: "2016.08.09",
            valueMoney: "10"
        },
        {
            id: 3,
            describe: "注册满100元减20元",
            condition: "满100元使用",
            beginTime: "2016.01.09",
            endTime: "2016.07.09",
            valueMoney: "20"
        }
    ]
};


export default function couponListReducer(state = couponListState, action) {
    switch(action.type) {
        case Types.COUPONLIST:
            return Object.assign({}, state, {
                dataRequesting: false,
                couponListData: action.data,
                isDataRequestSucc: true
            });
        default:
            return state;
    }
}