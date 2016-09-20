import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import LoginReducer from './loginReducer';
import registerReduce from './registerReduce';
import tabReducer from "./tabReducer";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import shoppingCartState from './shoppingCartReducer';
import searchReducer from './searchReduce';
import addressDetailState from './addressDetailReducer';
import ClassifyReducer from './ClassifyReducer';//分类
import GoodsDetailReducer from './GoodsDetailReducer';//商品详情
import productListState from './productListReducer';
import addressListState from './addressListReducer';
import brandReducer from './brandReduce';
import activitiesReducer from './activitiesReducer';
import couponInfoState from './couponExchangeReducer';
import couponListState from './couponListReducer';
import makeSureOrderState from './MakeSureOrderReducer';
import { userOrderReducer, userOrderDetailReducer } from './User_orderReducer';//我的订单
import { userCollectionReducer } from './User_collectionReducer';//我的收藏
import { sendMessageReducer } from './sendMessageReducer';//传值方法

const rootReducer = combineReducers({
	LoginReducer,
	registerReduce,
	tabReducer,
	homeReducer,
	routing: routerReducer,
	shoppingCartState,
	addressListState,
	searchReducer,
	addressDetailState,
	brandReducer,
	activitiesReducer,
	makeSureOrderState,
	ClassifyReducer,
	GoodsDetailReducer,
	productListState,
	userOrderReducer,
	userOrderDetailReducer,
	userCollectionReducer,
	sendMessageReducer,
	couponInfoState,
	couponListState
});

export default rootReducer;
