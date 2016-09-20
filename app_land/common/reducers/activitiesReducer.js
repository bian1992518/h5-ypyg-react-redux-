import * as Types from '../contants/constants';

import "babel-polyfill";

const searchState = {
	dataRequesting: true,			//正在加载 true表示加载中
  	isDataRequestSucc: false,		//数据加载成功 true表示成功
}

export default function activitiesReducer(state = searchState,action){
	switch (action.type) {
		case Types.BRANDDETAIL:
			return Object.assign({},state,{
				dataRequesting: false,		
  				isDataRequestSucc: true,
				brand : action.data
			})
			break;
		case Types.HOTBRANDDATA : 
			return Object.assign({},state,{
				hotBrand : action.data
			})
		default:
			return state
	}
}