/*
 * 专题海报商品控件
 */

import React, { Component, PropTypes } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../../styles/home/thematicGoodStyle.js';

var propTypes = {
	goodId: PropTypes.number.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	isLast: PropTypes.boolen
};

export default class HomeThematicPoster extends Component {
	render() {
		return <View style={styles.marginPos}>
				<Button onPress = {
				 () => Actions.GoodsDetailModel({
					goodId: this.props.goodId
				})
			}>
					<View style={styles.container}>
						<View style={styles.good_img_div}>
							<Image source = {
							 {
								uri: this.props.img
							}
						} style={styles.goodImg} />
						</View>
						<Text style={styles.goodTitle}>{this.props.title}</Text>
						<View style={styles.price_bar}>
							<Text style={styles.goodPrice}>{this.props.price}</Text>
							<Text style={styles.good_oldprice}>{this.props.oldPrice}</Text>
						</View>
					</View>
				</Button>
			</View>;
	}
}