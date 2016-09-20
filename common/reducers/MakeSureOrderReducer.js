import * as Types from '../contants/constants';

const makeSureOrderState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    loadingData: false,
    makeSureOrderData: null,
    addressData: null,
    couponData: null
}

export default function makeSureOrderReducer(state = makeSureOrderState, action) {
    switch(action.type) {
        case Types.GOT_CONFIRM_ORDER_DATA:
            return Object.assign({}, state, {
                dataRequesting: false,
                isDataRequestSucc: true,
                makeSureOrderData: action.orderData,
                addressData: action.addressData,
                couponData: action.orderData.allCouponList
            });
        case Types.START_LOADING_DATA_MS:
            return Object.assign({}, state, {
                loadingData: true
            });
        case Types.END_LOADING_DATA_MS:
            return Object.assign({}, state, {
                loadingData: false
            });
        case Types.INIT_STATE_MS:
            return Object.assign({}, state, {
                dataRequesting: true,
                isDataRequestSucc: false,
                makeSureOrderData: null,
                addressData: null,
            });
        default:
            return state;
    }
}
