import * as Types from '../contants/constants';
import requestData from '../config/request';


/**
 * [queryActivy description]
 * @param  {[string]} param   [活动id]
 * @param  {[number]} page    [页码]		默认为1
 * @param  {[number]} perpage [每页数据]	默认为10
 * @return {[type]}         [description]
 */
export function queryActivy(param = "1",page = "10",perpage){
	var data = {
		id : param,
		page : page,
		pageSize : perpage
	};
	return (dispatch) => {
		requestData("http://ndapi.bestinfoods.com/market/get/speciallydetail","POST",data)
		.then((data) => {
 			dispatch(getBrandData(data))
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

