/**
 * Created by zhangheng on 2016/8/23.
 * 地址列表
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';
import {browserHistory} from 'react-router';

var choosedAddress = null;

//获取地址列表
export function queryAddressListData() {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/user/address/list','POST')
        .then((successData) => {
            if (0 == successData.errorcode) {
                if (0 != successData.data.length && null == choosedAddress) {
                    successData.data.map((addressData, index) => {
                        if (2 == addressData.is_default) {
                            choosedAddress = addressData.address_id;
                        }
                    });
                    dispatch(cacheChoosedAddress(choosedAddress));
                }
                dispatch(gotAddressListData(successData.data));
            } else {
                alert(successData.message);
            }
        }, (errorMessage) => {

        });
    });
}

//设置地址  1 删除 2 设置默认 3 取消默认
export function querySetDefaultAddress(data) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/user/address/status','POST',data)
        .then((successData) => {

          dispatch(gotAddressListDefault(successData));
        }, (errorMessage) => {

        });
  });
}

export function addressItemClick(addressId) {
    return ((dispatch) => {
        choosedAddress = addressId;
        dispatch(cacheChoosedAddress(addressId));
        browserHistory.goBack();
    });
}

function cacheChoosedAddress(choosedAddressData) {
    return {
        type: Types.CACHE_CHOOSED_ADDRESS,
        choosedAddressData
    }
}

function gotAddressListData(data) {
  return {
    type: Types.ADDRESSLIST,
    data
  };
}

function gotAddressListDefault(data) {
  return {
    type: Types.ADDRESSLIST_DEFAULT,
    data
  };
}
