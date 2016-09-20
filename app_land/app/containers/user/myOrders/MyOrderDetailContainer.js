/*订单详情*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../../../styles/user/orderStyle';

export default class GoodsCell extends Component {
	render() {
		const { goodsData } = this.props;
		return <View style={styles.goodsCell}>
				<Image style={styles.goodsImg} source = {
				 {
					uri: goodsData.imgs.undefined
				}
			} />
				<Text style={styles.goodsTitle}>{goodsData.name}</Text>
				<View style={styles.goodsTotal}>
					<Text style={styles.goodsCount}>{goodsData.price.toFixed(2)}</Text>
					<Text style={styles.goodsNum}>x{goodsData.goodNumber}</Text>
				</View>
			</View>;
	}
}