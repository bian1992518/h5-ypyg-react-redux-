import * as Types from '../contants/constants';
import requestData from '../config/request';

 /**
  * [queryGoodsData description]
  * @param  {[number]} page    [页码]	默认显示第一页
  * @param  {[number]} perpage [每页显示多少条数据]		默认显示10条
  * @param  {[string]} sortBy  [排序]		默认按照销量最高排序
  * @param  {[string]} goodsName  [商品名称]	按商品名称排序
  * @param  {[string]} brandId    [品牌id]	按品牌排序
  * @return {[Object]}         [商品数据]
  */
export function queryGoodsData(page,perpage,sortBy ,brandId,goodsName = ""){
	var data = {
		page : page,
		perPage : perpage,
		sortBy : sortBy,
		brandId : brandId,
		goodsName : goodsName,
	};
	return (dispatch) => {
		requestData("http://ndapi.bestinfoods.com/item/get/searchgoods","POST",data)
		.then((data) => {
			dispatch(getGoodsData(data))
		}, (errorMessage) => {

		});
	}
}

/**
 * [getGoodsData description]
 * @param  {[type]} data [商品请求成功数据]
 * @return {[type]}      [description]
 */
function getGoodsData(data){
	return {
		type : Types.GETGOODS_DATA,
		data
	}
}

function getMoreGoods(){
	return {
		type : Types.LOADMOREGOODS,
		data
	}
}