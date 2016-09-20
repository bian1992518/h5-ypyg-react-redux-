/*
 * 订单状态组件
 */

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../styles/settingStyle';
import { Actions } from 'react-native-router-flux';

export default class Order extends Component {
	render() {
		const { handleId } = this.props;
		return <Button onPress = {
			 () => Actions.UserOrderModel({
				handleId: handleId
			})
		}>
				<View style={styles.orderItems}>
					<Image style={styles.orderItemImg} source={this.props.src} resizeMode="contain" />
					<Text style={styles.orderInfo}> {this.props.tip} </Text>
				</View>
			</Button>;
	}
}