import * as Types from '../contants/constants';

const makeSureOrderState = {
    dataRequesting: true,
    isDataRequestSucc: false,
    loadingData: false,
    makeSureOrderData: null,
    addressData: null,
    requestFlag: 'IMMEDIATELYBUY'
}

export default function makeSureOrderReducer(state = makeSureOrderState, action) {
    switch(action.type) {
        case Types.GOT_CONFIRM_ORDER_DATA:
            return Object.assign({}, state, {
                dataRequesting: false,
                isDataRequestSucc: true,
                makeSureOrderData: action.orderData,
                addressData: action.addressData
            });
        case Types.START_LOADING_DATA_MS:
            return Object.assign({}, state, {
                loadingData: true
            });
        case Types.END_LOADING_DATA_MS:
            return Object.assign({}, state, {
                loadingData: false
            });
        case Types.SHOPPINGCART_SETTLEMENT:
            return Object.assign({}, state, {
                requestFlag: 'SHOPPINGCART'
            });
        case Types.IMMEDIATELY_BUY:
            return Object.assign({}, state, {
                requestFlag: 'IMMEDIATELYBUY'
            });
        case Types.INIT_STATE_MS:
            return Object.assign({}, state, {
                dataRequesting: true,
                isDataRequestSucc: false,
                makeSureOrderData: null,
                addressData: null
            });
        default:
            return state;
    }
}
