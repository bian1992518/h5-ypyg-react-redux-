import { FETCH_ACTIVITY, 
	FETCH_CATEGORY, 
	FETCH_BANNER ,
	FETCH_GOOD_LIST, 
	FETCH_RECOMMEND 
} from '../contants/constants';
import { combineReducers } from 'redux';
import merge from 'lodash/merge'

export default function update(state={}, action) {
	switch (action.type) {
		case FETCH_ACTIVITY: 
			return merge(state, {activitys: action.activitys})
		case FETCH_CATEGORY:
			return merge( state, {categoryDatas: action.categoryDatas} )
		case FETCH_BANNER: 
			return merge( state, {bannerDatas: action.bannerDatas} )
		case FETCH_GOOD_LIST:
			return merge(state, {goodsList: action.goodList})
		case FETCH_RECOMMEND: 
			return merge(state, {recommandDatas: action.recommandDatas})
		default: 
			return state;
	}
}