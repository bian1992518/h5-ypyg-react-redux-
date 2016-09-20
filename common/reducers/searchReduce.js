import * as Types from '../contants/constants';
import "babel-polyfill"


const searchState = {
	dataRequesting: true,			//正在加载 true表示加载中
  	isDataRequestSucc: false,		//数据加载成功 true表示成功
}

export default function searchReducer(state = searchState,action){
	switch (action.type) {
		case Types.SEARCH_DATA:
			return Object.assign({},state,{
				brands: action.data
			});
			break;
		case Types.GETGOODS_DATA:
			return Object.assign({},state,{
				dataRequesting: false,
  				isDataRequestSucc: true,
				goods: action.data
			});
			break;
		default:
			return state;
	}
}
