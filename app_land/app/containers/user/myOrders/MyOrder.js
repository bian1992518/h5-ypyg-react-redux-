/*订单*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from '../../baseComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../../styles/user/orderStyle';
import { myOrderStateHandle, orderDetailDataHandle } from '../../../../common/actions/userAction';
import { queryUserOrderData } from '../../../../common/actions/User_OrderActions';
import NavigatorBar from '../../../components/navigatorBar_noRightBtn';
import { SegmentBar, OrderList } from './MyOrderContainer';
import { Actions } from 'react-native-router-flux';
import { imageUrls } from "../../../special/stringImage";

class MyOrder extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			is_require: [false, false, false, false, false],
			orderData: null
		};
		this.hasDataRender = this.hasDataRender.bind(this);
		this.noDataRender = this.noDataRender.bind(this);
	}

	componentWillMount() {
		let handleId = this.props.handleId;
		this.props.queryUserOrderData(handleId);
	}

	hasDataRender() {
		return <View style={styles.viewDirection}>
				<ScrollView style={styles.scrollView}>
					<OrderList orderData={this.state.orderData.orderlist} />
				</ScrollView>
			</View>;
	}
	noDataRender() {
		return <View style={styles.noDataContainer}>
				<Image style={styles.noDataImgView} source={imageUrls.icoOrderNoData} />
				<Text style={styles.noDataTipFont}>啊哦，您还没有任何订单哦！</Text>
				<Button style={styles.noDataBtn}>去逛逛</Button>
			</View>;
	}
	render() {
		const { userOrderReducer, queryUserOrderData } = this.props;
		let selected = userOrderReducer.selected;
		switch (selected) {
			case '0':
				this.state.orderData = userOrderReducer.myAllOrderData.data;
				break;
			case '1':
				this.state.orderData = userOrderReducer.waitPaidOrderData.data;
				break;
			case '2':
				this.state.orderData = userOrderReducer.waitSendOrderData.data;
				break;
			case '3':
				this.state.orderData = userOrderReducer.waitReceiveOrderData.data;
				break;
			case '4':
				this.state.orderData = userOrderReducer.waitCommentOrderData.data;
				break;
			default:
				this.state.orderData = null;
				break;
		}
		let isUpdate = this.state.orderData && this.state.orderData.orderlist.length ? true : false;
		let actions = { queryUserOrderData };
		return <View style={styles.container}>
				<NavigatorBar title="我的订单" />

				<SegmentBar selected={selected} {...actions} />

				{super.baseSceneRender(userOrderReducer.dataRequesting, userOrderReducer.isDataRequestSucc, isUpdate)}

			</View>;
	}
}

function getValue(state) {
	const { userOrderReducer } = state;
	return {
		userOrderReducer
	};
}
function changeOrderState(dispatch) {
	return bindActionCreators({
		queryUserOrderData
	}, dispatch);
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue, changeOrderState)(MyOrder);