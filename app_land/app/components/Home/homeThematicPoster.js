/*
 * 专题海报
 */

import React, { Component, PropTypes } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../../styles/home/thematicPosterStyle';
import ThematicGood from './thematicPosterGoods';
import { imageUrls } from '../../special/stringImage';


// PropTypes = {
// 	thematicData: PropTypes.object.isRequired,
// }

export default class HomeThematicPoster extends Component {
	componentDidMount() {
		var goodlist = new Swiper('.goodlist', {
			slidesPerView: 3,
			slidesOffsetBefore: 15,
			slidesOffsetAfter: 15,
			freeMode: true,
			freeModeSticky: true,
			slidesPerView: 'auto'
		});
	}

	renderThematicGood() {
		var thematicData = this.props.thematicData.goodlist;
		return thematicData.map(function (item, index) {
			var lastOne = index === thematicData.length - 1;
			var sigleStyle = index ? styles.thematicDiv : styles.firstDiv;
			return <View key={index} style={sigleStyle}>
					<ThematicGood goodId={item.goodsId} price={'￥' + item.goodsSalePrice} title={item.goodsName} img={item.imgMain.url} isLast={lastOne} oldPrice={'￥' + item.goodsMsrp} />
				</View>;
		});
	}

	render() {
		return <View style={styles.container}>
				<Image source = {
				 {
					uri: this.props.thematicData.imgMain.url
				}
			} style={styles.thematicImage} />
				<Image source={imageUrls.thematicArrow} style={styles.arrowBackground} />
				<ScrollView horizontal={true} style={styles.nativeScroll} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scollContent}>
					  		    	{this.renderThematicGood()}
				  		</ScrollView>
			</View>;
	}
}