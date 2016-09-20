/**
 * Created by zhangheng on 2016/8/23.
 * 地址详情
 */

import * as Types from '../contants/constants';
import requestData from '../config/request';


//获取收货地址详情
export function queryAddressDetailData(data) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/user/address/info', 'POST',data)
    .then((successData) => {
      dispatch(gotAddressDetailData(successData));
    }, (errorMessage) => {

    });
  });
}

//添加收货地址
export function addAddressDetailData(data) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/user/address/add', 'POST',data)
        .then((successData) => {
          dispatch(addAddressDetailData(successData));
        }, (errorMessage) => {

        });
  });
}

//修改收获地址
export function changeAddressDetailData(data) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/user/address/save', 'POST',data)
        .then((successData) => {
          dispatch(changeAddressInfoData(successData));
        }, (errorMessage) => {

        });
  });
}

function gotAddressDetailData(data) {
  return {
    type: Types.ADDRESSDETAIL,
    data
  };
}

function addAddressDetailData(data) {
  return {
    type: Types.ADDRESSDETAIL_ADD,
    data
  };
}

function changeAddressInfoData(data) {
  return {
    type: Types.ADDRESSDETAIL_CHANGE,
    data
  };
}