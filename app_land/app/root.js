'use strict';

import React, {Component} from 'react';
import { Router, Scene, Reducer, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View } from "react-native";
import { Home, AboutScreen, Login, Setting, 
  AddressList, 
  AddressDetail, 
  Classify,
  ShopCart, 
  CouponList,
  CommentList,
  UserCollection,
  UserConcern,
  UserOrder,
  GoodsDetail,
  UserDetailOrder,
  ProductList,
  Brand, 
  Search
} from './containers'
import NavigationDrawer from './components/NavigationDrawer';
import styles from './styles/appTabStyle';
import TabView from './components/tabView'
import TabIcon from './components/TabIcon';

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    console.log(computedProps);
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      return defaultReducer(state, action);
    }
  }

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="modal" component={Modal} >
          
              <Scene key="tabbar" component={NavigationDrawer}>
              <Scene key="main" tabs
                tabBarStyle={styles.tab}
                tabBarSelectedItemStyle={styles.tabItems}
              >

                <Scene key="tab_home" title="首页" initial icon={TabIcon} >
                  <Scene hideNavBar 
                    key="homeModel"
                    component={Home}
                    title="首页"
                  />
                  <Scene hideNavBar key="GoodsDetailModel" component={GoodsDetail} title="商品详情" />
                  <Scene hideNavBar key="ProductListModel" component={ProductList} title="商品列表" />
                  <Scene hideNavBar key="searchModel" component={Search} title="搜索" />
                </Scene>

                <Scene key="tab_classify" title="分类" icon={TabIcon}>
                   <Scene hideNavBar
                      key="classifyModel"
                      component={Classify}
                      title="分类"
                    />
                </Scene>

                <Scene key="tab_shop" title="购物车" icon={TabIcon} >
                  <Scene key="shopCartModel" component={ShopCart} title="购物车" hideNavBar/>
                </Scene>

                <Scene key="tab_setting" title="我的" icon={TabIcon} >
                  <Scene key="settingModel" title="设置" component={Setting} hideNavBar />
                  <Scene key="loginModel" title="登录" component={Login} hideNavBar={false}/>
                  <Scene key="aboutModel" hideNavBar component={AboutScreen} title="关于源品" />
                  <Scene key="AddressListModel" component={AddressList} title="收货地址" hideTabBar />
                  <Scene key="AddressDetailModel" component={AddressDetail} title="新增地址" />
                  <Scene key="CouponListModel" component={CouponList} title="新增地址" hideTabBar/>
                  <Scene key="userCollectionModel" component={UserCollection} title="我的收藏" />
                  <Scene key="userConcernModel" component={UserConcern} title="关注的品牌" hideTabBar hideNavBar />
                  <Scene key="UserOrderModel" title="我的订单" component={UserOrder} hideNavBar hideTabBar />
                  <Scene key="myOrderDetailModel" title="订单详情" component={UserDetailOrder} hideNavBar hideTabBar />
                  <Scene key="CommentListModel" title="我的评论" component={CommentList} hideTabBar hideNavBar />
                  <Scene key="brandModel" title="品牌" component={Brand} hideNavBar hideTabBar/>
                </Scene>
                
              </Scene>
            </Scene>
          </Scene>
        </Router>
    );
  }
}
