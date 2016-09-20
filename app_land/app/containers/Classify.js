//商品分类  lxf

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from './baseComponent';
import styles from '../styles/classifyStyles';
import { Actions } from 'react-native-router-flux';
import Special from '../special/stringImage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { queryClassifyData } from '../../common/actions/ClassifyActions';
import { classifyPressDown } from "../../common/actions/tabAction";

class Classify extends BaseComponent {
	constructor(props) {
		super(props);

		this.renderTypesList = this.renderTypesList.bind(this);
		this.renderBrandsList = this.renderBrandsList.bind(this);
		this.renderGlobalList = this.renderGlobalList.bind(this);
		this.hasDataRender = this.hasDataRender.bind(this);
	}

	componentDidMount() {
		this.props.queryClassifyData();
		this.props.classifyPressDown();
	}
	//商品类型
	renderTypesList(typeData) {
		return typeData.map(function (typeCellData, index) {
			return <TypeCell key={index} {...typeCellData} />;
		});
	}
	//推荐品牌
	renderBrandsList(brandsData) {
		return brandsData.map(function (brandData, index) {
			return <View style={styles.infoOutView} key={index}>
						<Image style={styles.infoInsideImg} resizeMode="contain" source = {
					 {
						uri: brandData.imgLogo.url
					}
				} />
					</View>;
		});
	}
	//全球必买
	renderGlobalList(brandsData) {
		return brandsData.map(function (brandData, index) {
			return <View style={styles.infoOutView} key={index}>
						<Image style={styles.infoInsideImg} resizeMode="contain" source = {
					 {
						uri: brandData.imgMain.url
					}
				} />
					</View>;
		});
	}
	//有数据
	hasDataRender() {
		const { ClassifyReducer } = this.props;
		let classifyData = ClassifyReducer.data.classifyData.data.categorys;
		let recommendedBrandData = ClassifyReducer.data.recommendedBrandData.data;
		let globalBuyData = ClassifyReducer.data.globalBuyData.data.pavilions;

		if (!classifyData || !recommendedBrandData || !globalBuyData) {
			return <View>无数据</View>;
		}
		return <View style={styles.viewDirection}>
				<ScrollView style={styles.scrollView}>
					{this.renderTypesList(classifyData)}

					<View style={styles.brandsHeader}>
						<Text style={styles.brandsTitle}>推荐品牌</Text>
					</View>
					<View style={styles.typeView}>
						{this.renderBrandsList(recommendedBrandData)}
					</View>

					<View style={styles.global}>
						<Text style={styles.globalTitle}>全球必买</Text>
					</View>
					<View style={styles.typeView}>
						{this.renderGlobalList(globalBuyData)}
					</View>
				</ScrollView>
			</View>;
	}

	render() {
		const { ClassifyReducer } = this.props;
		return <View style={styles.container}>
				<View style={styles.searchBar}>
					<View style={styles.searchView}>
						<Image style={styles.searchImg} source = {
						 require("../../common/images/ic_search@3x.png")
					} />
					</View>
					<Button onPress = {
					 () => Actions.ZtestPageModel({
						goodId: 23
					})
				}>
					<Image style={styles.messageImg} source = {
						 require("../../common/images/ic_message@3x.png")
					} />
					</Button>
				</View>

				{super.baseSceneRender(ClassifyReducer.dataRequesting, ClassifyReducer.isDataRequestSucc, ClassifyReducer.data)}

			</View>;
	}
}

class TypeCell extends Component {
	constructor(props) {
		super(props);
		this.renderTypeList = this.renderTypeList.bind(this);
	}
	//商品list列表
	renderTypeList(typesData) {
		return typesData.map(function (typeData, index) {
			return <View key={index} style={styles.typeInfo}>
						<Text style={styles.typeTitle}>{typeData.categoryName}</Text>
						<Image style={styles.typeImg} source = {
					 {
						uri: typeData.imgMain.url
					}
				} />
					</View>;
		});
	}
	//商品类目cell
	render() {
		return <View style={styles.goodsTypeItem}>
				<Button onPress = {
				 Actions.ProductListModel
			} style={styles.typeHeader}>
					<Text style={styles.typeFont}>{this.props.categoryName}</Text>
					<Text style={styles.typeContent}>全部</Text>
					<Image style={styles.goRightImg} source={Special.imageUrls.ic_right_arrow} />
				</Button>
				<View style={styles.typeView}>{this.renderTypeList(this.props.childs)}</View>
			</View>;
	}
}

function mapStateToProps(state) {
	const { ClassifyReducer } = state;
	return {
		ClassifyReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		queryClassifyData,
		classifyPressDown
	}, dispatch);
}

//将state和dispatch映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(Classify);