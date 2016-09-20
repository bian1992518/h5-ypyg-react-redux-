//商品详情界面  lxf

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from './baseComponent';
import styles from '../styles/goodsDetailStyle';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { queryGoodsDetailData, queryCartCount, queryPushItemToCart } from '../../common/actions/GoodsDetailActions';

class GoodsDetail extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      goodsId: null
    };
    this.hasDataRender = this.hasDataRender.bind(this);
    this.renderGoodsBanners = this.renderGoodsBanners.bind(this);
    this.renderActivityCell = this.renderActivityCell.bind(this);
    this.renderShippingFeeCell = this.renderShippingFeeCell.bind(this);
    this.pushItemToCartAction = this.pushItemToCartAction.bind(this);
  }
  componentDidUpdate() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      width: 175,
      height: 230,
      margin: 20,
      spaceBetween: 30,
      autoplay: 3000,
      loop: true,
      lazyLoading: true
    });
  }
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      width: 175,
      height: 230,
      margin: 20,
      spaceBetween: 30,
      autoplay: 3000,
      loop: true,
      lazyLoading: true
    });

    let queryGoodsDataParameter = {
      goodsId: this.props.goodId
    };
    this.props.queryGoodsDetailData(queryGoodsDataParameter);

    this.props.queryCartCount();
  }
  //加入购物车
  pushItemToCartAction(goodId) {
    let pushItemToCartParameter = {
      goodId: { goodId },
      amount: 1
    };
    this.props.queryPushItemToCart(pushItemToCartParameter);
  }
  //活动cell
  renderActivityCell(activityData) {
    if (activityData.inActivity) {
      return <View style={styles.costCell}>
          <Text style={styles.costFont}>促销：{activityData.activities[0].name}</Text>
        </View>;
    }
    return <View />;
  }
  //运费cell
  renderShippingFeeCell(shippingFee) {
    if (parseFloat(shippingFee)) {
      return <View style={styles.costCell}>
          <Text style={styles.costFont}>运费：订单实付满99免运费</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>;
    } else {
      return <View style={styles.costCell}>
          <Text style={styles.costFont}>运费：本商品免运费</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>;
    }
  }
  //商品轮播图
  renderGoodsBanners(imgs) {
    return imgs.map(function (img, index) {
      return <Image key={index} className="swiper-slide" style={styles.goodsImg} source = {
         {
          uri: img.url
        }
      } />;
    });
  }
  //渲染有数据界面
  hasDataRender() {

    let data = this.props.GoodsDetailReducer.goodsDetailData.data;
    if (!data) {
      return <View>无数据界面</View>;
    }

    let pushItemToCart = this.props.GoodsDetailReducer.pushItemToCart.errorcode;
    if (pushItemToCart === '0') {
      this.props.GoodsDetailReducer.cartCount.data = parseInt(this.props.GoodsDetailReducer.cartCount.data) + 1;
    }
    let cartCount = this.props.GoodsDetailReducer.cartCount.data;
    cartCount = cartCount ? cartCount : 0;

    return <View style={styles.viewDirection}>
        <ScrollView style={styles.scrollView}>

          <View style={styles.goodsImgsView}>
            <View style={styles.backImgView}>
              <Swiper height={175} width={175} loop={true}>
                                  {this.renderGoodsBanners(data.imgMain)}
                                              </Swiper>
            </View>
            <View style={styles.contentDetailView}>
              <Text style={styles.contentDetailFont}>图文详情</Text>
            </View>
          </View>

          <View style={styles.goodsInfoView}>
            <View style={styles.priceView}>
              <Text style={styles.priceFont}>￥{data.goodsSalePrice}</Text>
              <Text style={styles.originalPriceFont}>￥{data.goodsMsrp}</Text>
            </View>
            <View style={styles.speLine} />
            <Text style={styles.goodsTitleFont}>'{data.goodsName}'</Text>
            <Text style={styles.goodsBriefly}>{data.goodsBrief}</Text>
            <View style={styles.goodsBrandStorehouse}>
              <Image style={styles.brandImg} source = {
               {
                uri: data.imgFlag.url
              }
            } />
              <Text style={styles.brandFont}>{data.countryNameCh}｜{data.countryNameEn} {data.brandName}</Text>
              <Text style={styles.brandFont}>{data.subName}发货</Text>
            </View>
          </View>

          <View style={styles.costView}>
            {this.renderActivityCell(data.activity)}
            {this.renderShippingFeeCell(data.shippingFee)}
            <Button style={styles.costCell}>
              <Text style={styles.costFont}>税费：本商品适用税率{(parseFloat(data.goodsRate) * 100).toFixed(2)}%</Text>
              <Image style={styles.goRightImg} source = {
               require("../../common/images/icon_right_arrow.png")
            } />
            </Button>
          </View>

          <View style={styles.dragTopCell}>
            <Image style={styles.dragImg} source = {
             require("../../common/images/icon_pullTop.png")
          } />
            <Text style={styles.dragFont}>上拉查看图文详情</Text>
          </View>

        </ScrollView>
        <View style={styles.toolBar}>
          <Button onPress = {
           Actions.ZtestPageModel
        } style={styles.funView}>
            <Image style={styles.funImg} source = {
             require("../../common/images/ico_customerServe.png")
          } />
            <Text style={styles.funFont}>客服</Text>
          </Button>
          <Button onPress = {
           Actions.CartPageModel
        } style={styles.funView}>
            <Image style={styles.funImg} source = {
             require("../../common/images/ico_shoppingCart.png")
          } />
            <Text style={styles.funFont}>购物车</Text>
            <View style={styles.cartNumView}>
              <Text style={styles.cartNumFont}>{cartCount}</Text>
            </View>
          </Button>


          <Button style={styles.addCartsView} onPress={() => this.pushItemToCartAction(data.goodsId)}>
            <Text style={styles.addCartsFont}>加入购物车</Text>
          </Button>
          <Button style={styles.immPaidView}>
            <Text style={styles.addCartsFont}>立即购买</Text>
          </Button>
        </View>
      </View>;
  }

  render() {
    const { GoodsDetailReducer } = this.props;
    return <View style={styles.container}>
        <View style={styles.navigatorBar}>
            <Button style={styles.navLeftView} onPress={Actions.pop}>
              <Image source = {
             require("../../common/images/icon_left_arrow.png")
          } style={styles.navBack} />
            </Button>
            <Text style={styles.navTitle}>商品详情</Text>
            <View style={styles.navRightView}>
              <Image style={styles.collectionImg} source = {
             require("../../common/images/ico_collection.png")
          } />
              <Image style={styles.sharedImg} source = {
             require("../../common/images/ico_shared.png")
          } />
            </View>
        </View>
        {super.baseSceneRender(GoodsDetailReducer.dataRequesting, GoodsDetailReducer.isDataRequestSucc, GoodsDetailReducer.goodsDetailData)}
      </View>;
  }
}

function mapStateToProps(state) {
  const { GoodsDetailReducer } = state;
  return {
    GoodsDetailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    queryGoodsDetailData,
    queryCartCount,
    queryPushItemToCart
  }, dispatch);
}

//将state和dispatch映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail);