import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from "../styles/aboutStyle.js";
import { Actions } from "react-native-router-flux";

export default class AboutScreen extends React.Component {

	render() {
		return <View style={styles.container}>
				<View style={styles.about_us}>
					<Button onPress={Actions.pop}>
						<Image style={styles.arrow} source = {
						 require("../../common/images/i-arrow-l.jpg")
					} />
					</Button>
					<Text style={styles.about_title}>关于源品</Text>
					<Text style={styles.share}>分享</Text>
				</View>
				<View style={styles.about}>
					<Image style={styles.logo} source = {
					 require("../../common/images/logo.jpg")
				} />
					<Image style={styles.code} source = {
					 require("../../common/images/code.jpg")
				} />
					<Text style={styles.concern}>扫描二维码 , 让你的</Text>
					<Text style={styles.concern}>小伙伴也拥有源品吧</Text>
				</View>
				<View style={styles.phone}>
					<Text style={styles.phone_text}>联系源品</Text>
					<Text style={styles.phone_text}>400-670-1118</Text>
				</View>
			</View>;
	}
}