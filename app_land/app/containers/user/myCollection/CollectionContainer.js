/*收藏的商品*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../../../styles/user/collectGoodsStyle';

export class GoodsCell extends Component {
	render() {
		const { img, name, price } = this.props;
		return <View style={styles.goodsCell}>
				<Image style={styles.goodsImg} source = {
				 {
					uri: img
				}
			} />
				<View style={styles.goodsInfo}>
					<Text style={styles.goodsTitle}>{name}</Text>
					<Text style={styles.goodsCount}>{price}</Text>
				</View>
			</View>;
	}
}
//按钮栏
export class SegmentBar extends Component {
	render() {
		const { offSale, action, unAction } = this.props;
		return <View style={styles.segmentBar}>
				<CollectBtn title={'全部商品'} offSale={offSale} action={action} />
				<CollectBtn title={'已下架'} offSale={!offSale} action={unAction} />
			</View>;
	}
}
//按钮
export class CollectBtn extends Component {
	render() {
		const { offSale, action } = this.props;
		if (offSale) {
			return <View style={styles.btnView} onClick={action}>
					<Text style={styles.uncollect}>{this.props.title}</Text>
				</View>;
		} else {
			return <View style={styles.btnView} onClick={action}>
					<Text style={styles.collect}>{this.props.title}</Text>
					<View style={styles.line} />
				</View>;
		}
	}
}
module.exports = {
	GoodsCell,
	SegmentBar,
	CollectBtn
};