/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-19 17:23
 * description : 品牌
 */

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import 'react-native-router-flux';
import styles from '../styles/brandStyle';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import baseComponent from './baseComponent';
import { queryBrand } from '../../common/actions/brandAction';


class Brand extends baseComponent {
	constructor(props) {
		super(props);

		this.state = {
			arrowTransform: false
		};
	}
	componentWillMount() {
		super.componentWillMount();
		this.props.queryBrand(this.props.brandId);
	}
	componentDidMount() {
		this.swiperDom();
	}

	componentDidUpdate() {
		this.swiperDom();
	}
	swiperDom() {
		var mySwiper = new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 15,
			slidesOffsetBefore: 15,
			slidesOffsetAfter: 15,
			freeMode: true,
			freeModeSticky: true,
			slidesPerView: 'auto'
		});
	}
	renderEachGood() {
		const goodsData = this.props.hotBrand.data.goods;
		return goodsData.map(function (item, i) {
			return <Button onPress = {
				 () => Actions.GoodsDetailModel({})
			} className="swiper-slide" style={styles.hotShopInfo} key={i}>
			    	<Image style={styles.hotShopImg} source = {
					 {
						uri: item.imgMain.url
					}
				} />
			    	<Text style={styles.shopName}>{item.goodsName}</Text>
			    	<View style={styles.shopPrice}>
			    		<Text style={styles.price}>￥{item.goodsSalePrice}</Text>
			    		<Text style={styles.delPrice}>￥{item.goodsMsrp}</Text>
			    	</View>
			    </Button>;
		});
	}

	hasDataRender() {
		var id = this.props.brandId;
		var arrow = this.state.arrowTransform ? Object.assign({}, styles.expandArow, styles.tansform) : styles.expandArow;
		var brand = this.state.arrowTransform ? styles.brandIntro : Object.assign({}, styles.brandIntro, styles.ellipsis);
		const brandData = this.props.brandData.data;
		return <View>
				<Image style={styles.banner} source = {
				 {
					uri: brandData.imgMain.url
				}
			} />
				<View style={styles.brandDetail}>
					<View style={styles.brandInfo}>
						<Image style={styles.brandLogo} source = {
						 {
							uri: brandData.imgLogo.url
						}
					} /> 
						<View style={styles.brandWrap}>
							<Text style={styles.brandName}>{brandData.brandName}</Text>
							<View style={styles.brandMsg}>
								<Image style={styles.brandFlag} source = {
								 {
									uri: brandData.imgFlag.url
								}
							} />
								<Text style={styles.country}>{brandData.countryName_ch}</Text>
							</View>
						</View>
					</View>
					<Text style={brand}>{brandData.brandBrief}</Text>
					<View style={styles.expand} onClick={() => this.showAll()}>
						<Image style={arrow} source = {
						 require("../../common/images/arrow_d@3x.png")
					} />
					</View>
				</View>
				<View style={styles.brandDetail}>
					<Text style={styles.hotTitle}>最热商品</Text>

					<Swiper>
					  	    {this.renderEachGood()}
					  	</Swiper>
				</View>

				<View style={styles.allGoods}>
					<Text style={styles.hotTitle}>全部商品</Text>
					{/*
      <div style = { styles.order } >
      <div style = { styles.orderItems } >
      	<p>销量</p>
      	<img style = { styles.orderImg } src = "common/images/i-order@3x.png" />
      </div>
      <div style = { styles.orderItems } >最新</div>
      <div style = { styles.orderItems } >价格</div>
      </div>
      */}
				</View>
				<View style={styles.shopItems}>
					{this.renderGoods(brandData.goods)}
			    </View>
			</View>;
	}

	renderGoods(goods) {
		var self = this;
		return goods.map(function (index, elem) {
			return <Button onPress = {
				 () => Actions.GoodsDetailModel({})
			} style={styles.shopItem} key={elem}>
			    	<Image style={styles.shopImg} source = {
					 {
						uri: index.imgMain.url
					}
				} />
			    	<View style={styles.shopBox}>
				    	<Text style={styles.shopName}>{index.goodsName}</Text>
				    	<View style={styles.shopPrice}>
				    		<Text style={styles.price}>￥{index.goodsSalePrice}</Text>
				    		<Text style={styles.delPrice}>￥{index.goodsMsrp}</Text>
				    	</View>
			    	</View>
			    	{self.activity(index)}
			    </Button>;
		});
	}

	activity(goods) {
		var self = this;
		if (goods.activity) {
			var active = goods.activity.activities;
			return active.map(function (index, elem) {
				var toggle = index.activityType == 3 ? styles.show : styles.hide;
				var arr = [];
				if (index.activityType != 3) {
					arr.push(index);
				};
				return <View key={elem}>
						{self.activeties(arr)}
				    	<View style={toggle}>
				    		<Image style={styles.gived} source = {
							 require("../../common/images/i_ give@3x.png")
						} />
				    	</View>
					</View>;
			});
		} else {
			return false;
		}
	}

	activeties(arr) {
		if (arr.length > 0) {
			return arr.map(function (index, elem) {
				return <View style={styles.activities} key={elem}>
		    			<Text>{index.name}</Text>
		    		</View>;
			});
		} else {
			return false;
		}
	}

	headerRightRender() {
		return <View style={styles.shareBox}>
				<Image style={styles.share} source = {
				 require("../../common/images/ico_share@3x.png")
			} />
			</View>;
	}
	render() {
		const { queryGoodsData, brandData, searchParam } = this.props;
		var headerParam = {
			isHeaderShow: true,
			headerName: '这里是品牌名字',
			isBackShow: true
		};
		return super.allSceneRender(headerParam, searchParam);
	}

	showAll() {
		this.setState({
			arrowTransform: !this.state.arrowTransform
		});
	}
}

function mapStateToProps(state) {
	const brandReducer = state.brandReducer;
	return {
		searchParam: {
			isRequesting: brandReducer.dataRequesting,
			isDataRequestSucc: brandReducer.isDataRequestSucc,
			hasData: brandReducer.brand
		},
		brandData: brandReducer.brand,
		hotBrand: brandReducer.hotBrand
	};
}

function mapDispatchToProps(dispatch) {
	return {
		queryBrand: bindActionCreators(queryBrand, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand);