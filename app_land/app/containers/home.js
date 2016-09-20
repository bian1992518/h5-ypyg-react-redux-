/**
 * author : jiao.shen
 * date : 2016-08-01
 * description : 首页
 */

'use strict';

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/homeStyle.js';
import { Actions } from 'react-native-router-flux';
import { fetchCategory, fetchActivity, fetchBanner, fetchGoodList, fetchRecommandGood } from '../../common/actions/homeAction';

import ThematicPoster from '../components/Home/homeThematicPoster';
import SinglePoster from '../components/Home/singlePoster';

import { homePressDown } from "../../common/actions/tabAction";

class Home extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	banners: this.props.bannerDatas,
		// 	categorys: this.props.categoryDatas,
		// 	activitys: this.props.activityData,
		// 	thematics: this.props.goodsList
		// }
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log("come into willReceiveProps....");
	// 	if (this.props.bannerDatas !== nextProps.bannerDatas) {
	// 		this.setState({banners: nextProps.bannerDatas})
	// 	}
	// };

	componentWillMount() {
		this.props.fetchBanner();
		this.props.fetchActivity();
		this.props.fetchCategory();
		this.props.fetchGoodList();
		this.props.fetchRecommandGood();
		this.props.homePressDown();
	}

	componentDidUpdate() {
		var swiperBanner = new Swiper('.swiperBanner', {
			pagination: '.swiper-pagination',
			width: 375,
			height: 188,
			spaceBetween: 10,
			autoplay: 3000,
			loop: true,
			lazyLoading: true
		});
	}

	renderCategorys() {
		const categorydata = this.props.categoryDatas;
		if (!categorydata) {
			return;
		}

		return categorydata.categorys.map(function (item, i) {
			return <Button key={i} style={styles.category_item} onPress = {
				 () => Actions.ProductListModel({
					categoryId: item.categoryId,
					categoryName: item.categoryName
				})
			}>
					<Text style={styles.category_text}>{item.categoryName}</Text>
				</Button>;
		});
	}

	renderBanners() {
		const banners = this.props.bannerDatas;
		if (!banners) {
			return <View></View>;
		}

		return banners.map(function (item, i) {
			let imgURL = item.ad_image.url;
			return <View key={i} style={{ width: 375 }}>
					<Image style={styles.activity_image} source = {
					 {
						uri: imgURL
					}
				} />
				</View>;
		});
	}

	renderSinglePoster() {
		const activitys = this.props.activityData;
		if (!activitys) {
			return <View></View>;
		}

		return activitys.map(function (item, i) {
			var datas = {
				goodImage: item.img_main.url,
				goodName: item.name,
				goodIcon: item.img_flag.url,
				activityId: item.id
			};
			return <SinglePoster {...datas} key={i} />;
		});
	}

	renderGoodsSegment(rowData, sectionID, rowID) {
		return <View style={styles.segemnt_bar}>
				<Button onPress = {
				 () => Actions.GoodsDetailModel({
					goodId: rowData.goodsId
				})
			}>
					<Image source = {
					 {
						uri: rowData.goodsImages
					}
				} style={styles.goodImage} />
				</Button>
				<View style={styles.bottom_segment}>
					<Text style={styles.good_title}>{rowData.goodsName}</Text>
					<View style={styles.price_bar}>
						<Text style={styles.good_price}>{'¥' + rowData.goodsSalePrice}</Text>
						<Text style={styles.good_oldprice}>{'¥' + rowData.goodsMsrp}</Text>
					</View>
				</View>
			</View>;
	}

	renderGoodSement() {
		return goodsData.map(function (rowData, index) {
			return <View style={styles.segemnt_bar} key={index}>
					<Image source = {
					 {
						uri: rowData.img
					}
				} style={styles.goodImage} />
					<View style={styles.bottom_segment}>
						<Text style={styles.good_title}>{rowData.name}</Text>
						<View style={styles.price_bar}>
							<Text style={styles.good_price}>{'¥' + rowData.price}</Text>
							<Text style={styles.good_oldprice}>{'¥' + rowData.oldPrice}</Text>
						</View>
					</View>
				</View>;
		});
	}

	renderRow(rowData, sectionID, rowID) {
		return <ThematicPoster thematicData={rowData} />;
	}

	renderThematic() {
		const thematic = this.props.goodsList;
		if (!thematic) {
			return <View></View>;
		}

		return thematic.map(function (rowData, index) {
			return <ThematicPoster thematicData={rowData} key={index} />;
		});
	}

	render() {
		if (!this.props.recommand) return <View></View>;

		var goodSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2
		});
		goodSource = goodSource.cloneWithRows(this.props.recommand);

		return <View style={styles.boss_div}>
				<View style={styles.navigationBar}>
					<Button onPress = {
					 Actions.searchModel
				}>
					<View style={styles.search_nav}>
						<Image source = {
							 require("../../common/images/ic_search@2x.png")
						} style={styles.search_Image} />
					</View>
					</Button>
					<Image source = {
					 require("../../common/images/ic_message@2x.png")
				} style={styles.category_img} />
				</View>

				<ScrollView style={styles.scrollView}>
					<View style={styles.container}>

						<Swiper height={188} loop={true}>
					  		    	{this.renderBanners()}
					  		  		</Swiper>

						<View style={styles.graydiv}></View>
						<View style={styles.categorys_div}>
							{this.renderCategorys()}
						</View>

      					{this.renderThematic()}
						{this.renderSinglePoster()}
						<ListView contentContainerStyle={styles.goodListContainer} renderRow={this.renderGoodsSegment} dataSource={goodSource} />
					</View>
				</ScrollView>
			</View>;
	}
}

function mapStateToProps(state) {
	return {
		categoryDatas: state.homeReducer.categoryDatas,
		bannerDatas: state.homeReducer.bannerDatas,
		goodsList: state.homeReducer.goodsList,
		recommand: state.homeReducer.recommandDatas,
		activityData: state.homeReducer.activitys
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCategory,
		fetchActivity,
		fetchBanner,
		fetchGoodList,
		fetchRecommandGood,
		homePressDown
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);