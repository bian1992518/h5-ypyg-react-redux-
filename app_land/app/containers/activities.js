/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-26 17:13
 * description : 活动商品列表
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
import { queryActivy } from '../../common/actions/activitiesAction';


var goodsData = [{
	name: "名字"
}, {
	name: "名字"
}, {
	name: "名字"
}, {
	name: "名字"
}];

class Activities extends baseComponent {
	constructor(props) {
		super(props);

		this.state = {
			arrowTransform: false,
			index: 1,
			totalPage: 1,
			goodsRender: []
		};
	}
	componentWillMount() {
		super.componentWillMount();
		this.props.queryActivy(14, 1, 10);
	}
	/**
  * [componentDidMount description]
  * @return {[type]} [页面加载完后执行]
  */
	componentDidMount() {
		this.swiperDom();
	}

	componentDidUpdate() {
		this.swiperDom();
	}

	swiperDom() {
		var mySwiper = new Swiper('.swiper-container', {
			spaceBetween: 15,
			slidesOffsetBefore: 15,
			slidesOffsetAfter: 15,
			slidesPerView: 4,
			paginationClickable: true,
			spaceBetween: 30,
			freeMode: true
		});
	}
	renderEachGood() {
		return goodsData.map(function (item, i) {
			return <View style={styles.activeName} key={i}>
			    	<Text style={styles.shopName}>{item.name}</Text>
			    </View>;
		});
	}

	/**
  * [loadMoreData description]
  * @return {[type]} [加载更多]
  */
	loadMoreData() {
		if (this.state.totalPage >= this.state.index) {
			this.setState({
				index: ++this.state.index
			});
			this.props.queryActivy(14, this.state.index, 10);
		} else {
			return false;
		}
	}

	hasDataRender() {
		var id = this.props.brandId;
		var arrow = this.state.arrowTransform ? Object.assign({}, styles.expandArow, styles.tansform) : styles.expandArow;
		var brand = this.state.arrowTransform ? styles.brandIntro : Object.assign({}, styles.brandIntro, styles.ellipsis);
		const brandData = this.props.brandData.data;
		if (brandData.totalPage) {
			this.setState({
				totalPage: brandData.totalPage
			});
		};
		return <View style={styles.barImg}>
				<Image style={styles.banner} source = {
				 {
					uri: brandData.img_main.url
				}
			} />
				<View style={styles.brandDetail}>
					<Swiper>
					  	    {/*{this.renderEachGood()}*/}
					  	</Swiper>
				</View>

				<View style={styles.allGoods}>
					{/*
      <div style = { styles.order } >
      <div style = { styles.orderItems } >
      	<p>销量</p>
      	<img style = { styles.orderImg } src = "../common/images/i-order@3x.png" />
      </div>
      <div style = { styles.orderItems } >最新</div>
      <div style = { styles.orderItems } >价格</div>
      </div>
      */}
				</View>
				<View style={styles.shopItems}>
					{this.renderGoods(brandData.goodlist)}
			    </View>
			</View>;
	}
	/**
  * [unique description]
  * @param  {[array]} array [需要去重的数组]
  * @return {[array]}       [去重后的数组]
  */
	unique(array) {
		var r = [];
		for (var i = 0, l = array.length; i < l; i++) {
			for (var j = i + 1; j < l; j++) if (array[i] === array[j]) j = ++i;
			r.push(array[i]);
		}
		return r;
	}

	renderGoods(goods) {
		var self = this;
		var goodsRender;
		this.state.goodsRender = this.state.goodsRender.concat(goods);
		goodsRender = this.unique(this.state.goodsRender);
		return goodsRender.map(function (index, elem) {
			return <Button onPress = {
				 () => Actions.GoodsDetailModel({})
			} style={styles.shopItem} key={elem}>
			    	<Image style={styles.shopImg} source = {
					 {
						uri: index.imgobj.url
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
							 require("../../../common/images/i_ give@3x.png")
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
				 require("../../../common/images/ico_share@3x.png")
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
	const activitiesReducer = state.activitiesReducer;
	return {
		searchParam: {
			isRequesting: activitiesReducer.dataRequesting,
			isDataRequestSucc: activitiesReducer.isDataRequestSucc,
			hasData: activitiesReducer.brand
		},
		brandData: activitiesReducer.brand
	};
}

function mapDispatchToProps(dispatch) {
	return {
		queryActivy: bindActionCreators(queryActivy, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);