import * as Types from '../contants/constants';

const shoppingCartState = {
    dataRequesting: true,
    shoppingCartData: null,
    isDataRequestSucc: false,
    checkState: null,
    loadingData: false,
}

export default function shoppingCartReducer(state = shoppingCartState, action) {
    switch(action.type) {
        case Types.GOT_SHOPPINGCART_DATA:
            return Object.assign({}, state, {
                dataRequesting: false,
                shoppingCartData: action.data,
                isDataRequestSucc: true,
                checkState: action.checkState
            });
        case Types.CHECKBOOX_CLICKED:
            return Object.assign({}, state, {
                checkState: action.checkState
            });
        case Types.START_LOADING_DATA:
            return Object.assign({}, state, {
                loadingData: true
            });
        case Types.END_LOADING_DATA:
            return Object.assign({}, state, {
                loadingData: false
            });
        default:
            return state;
    }
}
