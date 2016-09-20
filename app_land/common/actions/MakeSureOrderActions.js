import * as Types from '../contants/constants';
import requestData from '../config/request';
import STRING_RESOURCE from '../StringResource';

export function queryShoppingCartOrderData() {
    var orderRequest = requestData('http://ndapi.bestinfoods.com/order/get/prepaywhenoncart', 'POST');
    var addressRequest = requestData('http://ndapi.bestinfoods.com/user/address/list', 'POST');

    return ((dispatch) => {
        Promise.all([orderRequest, addressRequest])
        .then(([orderData, addressData]) => {
            if (0 === orderData.errorcode && 0 === addressData.errorcode) {
                dispatch(gotConfirmOrderData(orderData.data, addressData.data));
            } else {
                alert('网络请求出错');
            }
        }, (errorMessage) => {

        })
    });
}

export function queryImmediatelyBuyOrderData() {
    return ((dispatch) => {

    });
}

function gotConfirmOrderData(orderData, addressData) {
    return {
        type: Types.GOT_CONFIRM_ORDER_DATA,
        orderData,
        addressData
    }
}

export function saveDefaultAddress(consignee, phoneNumber, detailAddress, idNumber) {
    return ((dispatch) => {
        var chineseCount = 0;

        if ('' === consignee) {
            alert(STRING_RESOURCE.pleaseInputConsigneeMessage);
            return ;
        }

        if (!phoneNumber.match(/^1[3|4|5|7|8][0-9]\d{4,8}$/)) {
            alert(STRING_RESOURCE.pleaseInputCorrectPhoneNum);
            return ;
        }

        for (var index = 0; index < detailAddress.length; index++) {
            if (detailAddress.charCodeAt(index) > 255) {
                chineseCount++;
            }
        }

        if (chineseCount < 5) {
            alert(STRING_RESOURCE.pleaseInputCorrectAddMessage);
            return ;
        }

        if (idNumber.length < 16) {
            alert(STRING_RESOURCE.pleaseInputCorrectIdNumber);
            return ;
        }

        dispatch(startLoadingData());

        setTimeout(() => {
            dispatch(endLoadingData());
        }, 1000);
    })
}

export function initState() {
    return {
        type: Types.INIT_STATE_MS
    };
}

function startLoadingData() {
    return {
        type: Types.START_LOADING_DATA_MS
    };
}

function endLoadingData() {
    return {
        type: Types.END_LOADING_DATA_MS
    };
}
