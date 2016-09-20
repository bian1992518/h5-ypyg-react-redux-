import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from '../common/reducers'
import configureStore from '../common/stores/configureStore';
import {
  App,
  Home,
  Classify,
  AboutScreen,
  Login,
  Register,
  Setting,
  AddressList,
  AddressDetail,
  Cart,
  CouponList,
  CommentList,
  GoodsDetail,
  ProductList,
  Protocol,
  setPsw,
  loginIn,
  forgerPwd,
  Brand,
  Search,
  User_setting,
  User_personalInfo,
  User_changeName,
  User_collection,
  User_order,
  User_detailOrder,
  User_OrderComment,
  ConfirmOrderAddress,
  ConfirmOrderCoupon,
  ConfirmOrderEditorAddress,
  MakeSureOrder,
  CartPage,
  ZtestPage,
  Activities,
  SearchKeyWords,
  ChoosePayWay,
  PaymentSuccess
} from './containers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="Classify" component={Classify} />
                    <Route path="setting" component={Setting} />
                    <Route path="shopCart" component={Cart} />
                </Route>
                <Route path="login" component={Login} />
                <Route path="register" component={Register} />
                <Route path="aboutScreen" component={AboutScreen} />
                <Route path="UserCollection" component={User_collection} />
                <Route path="UserOrder" component={User_order} />
                <Route path="UserDetailOrder" component={User_detailOrder} />
                <Route path="UserOrderCommment" component={User_OrderComment} />
                <Route path="AddressList" component={AddressList} />
                <Route path="AddressDetail" component={AddressDetail} />
                <Route path="CouponList" component={CouponList} />
                <Route path="CommentList" component={CommentList} />
                <Route path="GoodsDetail" component={GoodsDetail} />
                <Route path="protocol" component={Protocol} />
                <Route path="setPsw" component={setPsw} />
                <Route path="loginIn" component={loginIn} />
                <Route path="forgerPwd" component={forgerPwd} />
                <Route path="brand" component={Brand} />
                <Route path="search" component={Search} />
                <Route path="User_setting" component={User_setting} />
                <Route path="ProductList" component={ProductList} />
                <Route path="User_personalInfo" component={User_personalInfo} />
                <Route path="User_changeName" component={User_changeName} />
                <Route path="makeSureOrder" component={MakeSureOrder} />
                <Route path="ZtestPage" component={ZtestPage} />
                <Route path="ProductList" component={ProductList} />
                <Route path="ConfirmOrderAddress" component={ConfirmOrderAddress} />
                <Route path="ConfirmOrderEditorAddress" component={ConfirmOrderEditorAddress} />
                <Route path="ConfirmOrderCoupon" component={ConfirmOrderCoupon} />
                <Route path="activities" component={Activities} />
                <Route path="CartPage" component={CartPage} />
                <Route path="SearchKeyWords" component={SearchKeyWords} />
                <Route path="ChoosePayWay" component={ChoosePayWay} />
                <Route path="PaymentSuccess" component={PaymentSuccess} />
            </Router>
        </div>
    </Provider>,
    document.getElementById('app')
);
