import * as Types from '../contants/constants';
import requestData from '../config/request';


/**
 * [queryBrand description]
 * @param  {[number]} param [品牌id]
 * @return {[object]}       [品牌相关数据]
 */
export function queryBrand(param){
	var data = {
		brandId : param
	};
	return (dispatch) => {
		requestData("http://ndapi.bestinfoods.com/item/get/goodsbybrandid","POST",data)
		.then((data) => {
 			dispatch(getBrandData(data))
		}, (errorMessage) => {

		})

		requestData("http://ndapi.bestinfoods.com/item/get/goodsbybrandid?brandId=" + param + "&tagType=1","POST")
		.then((data) => {
			dispatch(getHotBrandData(data))
 			console.log(data)
		}, (errorMessage) => {

		})
	}
} 

/**
 * [getBrandData description]
 * @param  {[object]} data [品牌数据]
 */
function getBrandData(data){
	return {
		type : Types.BRANDDETAIL,
		data
	}
}

/**
 * [getHotBrandData description]
 * @param  {[object]} data [最热商品数据]
 */
function getHotBrandData(data){
	return {
		type : Types.HOTBRANDDATA,
		data
	}
}