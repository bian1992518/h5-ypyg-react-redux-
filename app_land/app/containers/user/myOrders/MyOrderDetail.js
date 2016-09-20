/*订单详情*/
import BaseComponent from '../../baseComponent';
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import styles from '../../../styles/user/orderDetailStyle';
import NavigatorBar from '../../../components/navigatorBar_noRightBtn';
import { imageUrls } from '../../../special/stringImage';
import GoodsList from './MyOrderDetailContainer';
import { queryUserOrderDetailData } from '../../../../common/actions/User_OrderActions';
import { getLocalTime } from '../../../../common/config/Tools';

class OrderDetail extends BaseComponent {
	constructor(props) {
		super(props);

		this.renderCountdownView = this.renderCountdownView.bind(this);
		this.renderIdentityCardView = this.renderIdentityCardView.bind(this);
		this.renderGoodsListView = this.renderGoodsListView.bind(this);
		this.renderLastGoodsCell = this.renderLastGoodsCell.bind(this);
		this.renderFlowView = this.renderFlowView.bind(this);
	}
	componentDidMount() {
		this.props.queryUserOrderDetailData();
	}
	renderCountdownView(orderDetailData) {
		if (orderDetailData.orderStatus === 0) {
			return <View style={styles.orderCountdownView}>
					<Text style={styles.orderCountdownBlackFont}>支付方式：无字段</Text>
				</View>;
		}
		return <View style={styles.orderCountdownView}>
				<Text style={styles.orderCountdownBlackFont}>还剩</Text>
				<Text style={styles.orderCountdownRedFont}> 00:23:10无字段 </Text>
				<Text style={styles.orderCountdownBlackFont}>订单自动取消</Text>
			</View>;
	}
	renderIdentityCardView(orderDetailData) {
		if (orderDetailData) {
			return <View style={styles.identityCardView}>
					<Text style={styles.identityCardFont}>身份证号码</Text>
					<Text style={styles.identityCardFont}>无字段1313132123123131</Text>
				</View>;
		}
		return <View />;
	}
	renderGoodsListView(goodsData) {
		if (goodsData.length === 1) {
			let data = goodsData[0];
			return <View style={styles.warehouseList}>
					<View style={styles.warehouse}>
						<Text style={styles.warehouseFont}>{data.warehouse}</Text>
					</View>
					{this.renderLastGoodsCell(data)}
				</View>;
		} else {

			let length = goodsData.length;
			let lastGoodsData = goodsData[length - 1];
			let datas = goodsData.splice(0, length - 1);
			return datas.map(function (data, index) {
				return <View key={index} style={styles.warehouseList}>
							<View style={styles.warehouse}>
								<Text style={styles.warehouseFont}>{data.warehouse}</Text>
							</View>
							<GoodsList goodsData={data} />
						</View>;
			});
		}
	}
	renderLastGoodsCell(data) {
		return <View style={styles.list}>
				<View style={styles.orderCommentCell}>
					<Image style={styles.orderCommentImg} source = {
					 {
						uri: data.imgs.undefined
					}
				} />
					<Text style={styles.goodsTitle}>{data.name}</Text>
					<View style={styles.goodsTotal}>
						<Text style={styles.goodsCount}>{data.price}</Text>
						<Text style={styles.goodsNum}>x{data.goodNumber}</Text>
					</View>
				</View>
				<Button style={styles.orderCommentBtn}>查看物流</Button>
			</View>;
	}
	renderFlowView() {
		return <View style={styles.flowView}>
				<Button style={styles.orderBtnBlack}>取消订单</Button>
				<Button style={styles.orderBtnRed}>立即付款</Button>
			</View>;
	}

	hasDataRender() {
		const { userOrderDetailReducer } = this.props;
		let orderDetailData = userOrderDetailReducer.orderDetailData.data;
		let time = getLocalTime(orderDetailData.order_time);
		return <View style={styles.viewDirection}>
				<View style={styles.orderInfo}>
					<Text style={styles.orderStatusFont}>{orderDetailData.order_status}</Text>
					<Text style={styles.orderStateFont}>订单编号：{orderDetailData.pay_no}</Text>
					<Text style={styles.orderTimeFont}>下单时间：{time}</Text>
					{this.renderCountdownView(orderDetailData)}
				</View>

				<ScrollView style={styles.scrollView}>
				<View style={styles.orderAddressView}>
					<View style={styles.consumerView}>
						<Text style={styles.consumerFont}>{orderDetailData.consignee}</Text>
						<Text style={styles.consumerFont}>{orderDetailData.consignee_mobile}</Text>
					</View>
					<Text style={styles.addressFont}>内容须修改{orderDetailData.ship_address}</Text>
				</View>
				{this.renderIdentityCardView(orderDetailData)}

				{/*this.renderGoodsListView(orderDetailData.goods)*/}

				<View style={styles.priceView}>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>商品总价</Text>
						<Text style={styles.identityCardFont}>{orderDetailData.order_cost}</Text>
					</View>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>活动优惠</Text>
						<Text style={styles.identityCardFont}>???</Text>
					</View>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>优惠券</Text>
						<Text style={styles.identityCardFont}>{orderDetailData.discount_total}</Text>
					</View>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>运费</Text>
						<Text style={styles.identityCardFont}>{orderDetailData.ship_cost}</Text>
					</View>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>税费</Text>
						<Text style={styles.identityCardFont}>{orderDetailData.tax_cost}</Text>
					</View>
					<View style={styles.costView}>
						<Text style={styles.identityCardFont}>总计</Text>
						<Text style={styles.identityCardFont}>???</Text>
					</View>
				</View>
				{this.renderFlowView(orderDetailData)}
			</ScrollView>
			</View>;
	}

	render() {
		const { userOrderDetailReducer } = this.props;
		let orderDetailData = userOrderDetailReducer.orderDetailData;
		return <View style={styles.container}>
				<NavigatorBar title="订单详情" />

				{super.baseSceneRender(userOrderDetailReducer.dataRequesting, userOrderDetailReducer.isDataRequestSucc, orderDetailData)}

			</View>;
	}
}
function getValue(state) {
	const { userOrderDetailReducer } = state;
	return {
		userOrderDetailReducer
	};
}
function changeOrderState(dispatch) {
	return bindActionCreators({
		queryUserOrderDetailData
	}, dispatch);
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue, changeOrderState)(OrderDetail);