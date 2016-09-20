/*
 * navigatorbar
 */

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from "../styles/navigatorBarStyle";
import { Actions } from 'react-native-router-flux';

export default class NavigatorBar extends Component {
	render() {
		const { title } = this.props;
		return <View style={styles.navigatorBar}>
					<Button style={styles.navLeftView} onPress={Actions.pop}>
						<Image source = {
					 require("../../common/images/icon_left_arrow.png")
				} style={styles.navBack} />
					</Button>
					<Text style={styles.navTitle}>{title}</Text>
					<View style={styles.navRightView}></View>
			</View>;
	}
}