/*
 * 单品/专题海报
 */

import React, { Component, PropTypes } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../../styles/home/singlePosterStyle';

// PropTypes = {
// 	goodImage: PropTypes.string.isReuqired,
// 	goodName: PropTypes.string.isReuqired,
//  goodIcon: PropTypes.string.isReuqired
// }

export default class SinglePoster extends Component {
	render() {
		return <Button onPress = {
			 () => Actions.GoodsDetailModel({
				goodId: this.props.goodId
			})
		}>
			<View style={styles.container}>
				{/*<Link to={{pathname: "/GoodsDetail", query:{activityId: this.props.activityId}}} >*/}
					<Image style={styles.goodImage} source = {
					 {
						uri: this.props.goodImage
					}
				} />
				{/*</Link>*/}
				<View style={styles.bottom_bar}>
					<Image style={styles.circle_div} source = {
						 {
							uri: this.props.goodIcon
						}
					} />
					<Text style={styles.goodTitle}>{this.props.goodName}</Text>
				</View>
			</View>
			</Button>;
	}
}