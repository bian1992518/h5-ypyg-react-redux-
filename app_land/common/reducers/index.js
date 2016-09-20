import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import LoginReducer from './loginReducer';
import registerReduce from './registerReduce';
import tabReducer from "./tabReducer";
import { changeOrderState, getDetailData } from './myOrderReducer';
import { collection } from './myCollectionReducer';
import shoppingCartState from './shoppingCartReducer';
import searchReducer from './searchReduce';
import addressDetailState from './AddressDetailReducer';
import ClassifyReducer from './ClassifyReducer';
import GoodsDetailReducer from './GoodsDetailReducer';
import productListState from './productListReducer';
import addressListState from './addressListReducer';
import brandReducer from './brandReduce';
import activitiesReducer from './activitiesReducer';
import couponInfoState from './couponExchangeReducer';
import couponListState from './couponListReducer';
import makeSureOrderState from './MakeSureOrderReducer';
import { userOrderReducer, userOrderDetailReducer } from './User_OrderReducer';

const rootReducer = combineReducers({
	LoginReducer,
	registerReduce,
	tabReducer,
	homeReducer,
	collection,
	changeOrderState,
	getDetailData,
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
});

export default rootReducer;
