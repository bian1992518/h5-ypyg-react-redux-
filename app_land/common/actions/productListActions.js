import * as Types from '../contants/constants';
import requestData from '../config/request';


//获取商品列表
export function queryProductListData(data) {
  return ((dispatch) => {
    requestData('http://ndapi.bestinfoods.com/item/get/searchgoods', 'POST',data)
    .then((successData) => {
      dispatch(gotProductListData(successData));
    }, (errorMessage) => {

    });
  });
}

function gotProductListData(data) {
  return {
    type: Types.PRODUCTLIST,
    data
  };
}
