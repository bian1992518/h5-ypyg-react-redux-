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
          dispatch(addAddressInfoData(successData));
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

//获取 省
export function queryProvinceListData() {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/user/get/province', 'POST')
            .then((successData) => {
                dispatch(gotProvinceListoData(successData));
            }, (errorMessage) => {

            });
    });
}

//获取 市
export function queryCityListData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/user/get/city', 'POST',data)
            .then((successData) => {
                dispatch(gotCityListoData(successData));
            }, (errorMessage) => {

            });
    });
}

//获取 县
export function queryCountyListData(data) {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/user/get/area', 'POST',data)
            .then((successData) => {
                dispatch(gotCountyListoData(successData));
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

function addAddressInfoData(data) {
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

//省
function gotProvinceListoData(data) {
    return {
        type: Types.PROVINCELIST,
        data
    };
}
//市
function gotCityListoData(data) {
    return {
        type: Types.CITYLIST,
        data
    };
}
//县
function gotCountyListoData(data) {
    return {
        type: Types.COUNTYLIST,
        data
    };
}