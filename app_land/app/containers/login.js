/******登录*****/

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../styles/loginStyle';
import request from '../../common/config/request';
import merge from 'lodash/merge';


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: "",
			verify: "",
			checked: false,
			iClose: false,
			verifyValue: "获取验证码",
			verifyFlag: true
		};
	}

	onPhoneChange(event) {
		//手机号
		var val = event.nativeEvent.text;
		if (val.length > 11) return false;
		this.setState({
			iClose: val.length == 0 ? false : true,
			phone: val,
			checked: val.length == 11 && this.state.verify.length == 6
		});
	}

	onVerifyChange(event) {
		//验证码
		const val = event.nativeEvent.text;
		if (val.length > 6) return false;
		this.setState({
			verify: val,
			checked: this.state.phone.length == 11 && val.length == 6
		});
	}

	render() {
		const { img, protocolClick } = this.props;
		const logined = !this.state.checked ? styles.logined : Object.assign({}, styles.logined, styles.logineded);
		const close = this.state.iClose ? styles.clearInput : merge({}, styles.clearInput, styles.clearMerge);

		return <View style={styles.login}>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} placeholder="请输入您的手机号" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
					<Image style={close} onClick={() => this.clearInput()} source = {
					 require("../../common/images/ic_clear_input@3x.png")
				} />
					<Button style={styles.verify} onPress={() => this.getVerify()}>{this.state.verifyValue}</Button>
				</View>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} placeholder="请输入短信验证码" value={this.state.verify} onChange={this.onVerifyChange.bind(this)} />
				</View>
				<Button onPress={() => this.loginHandle()} style={logined}>登录</Button>
				<View style={styles.registerOrCodeLoginDiv}>
					<Button onPress = {
					 Actions.registerModel
				}>
						<Text style={styles.registerOrCodeLoginP}>快速注册</Text>
					</Button>
					<Button onPress = {
					 Actions.loginInModel
				}>
						<Text style={styles.registerOrCodeLoginP}>使用密码登录</Text>
					</Button>
				</View>
			</View>;
	}

	clearInput() {
		//清空手机号
		const refs = this.refs;
		this.setState({
			iClose: false,
			phone: ""
		});
	}
	getVerify() {
		//获取验证码
		var self = this;
		if (self.state.verifyFlag) {
			var phoneVal = self.state.phone.replace(/\s/g, "");
			if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phoneVal)) {
				alert("请输入正确的手机号");
				return false;
			} else {
				var obj = {
					mobile: phoneVal
				};
				request("http://ndapi.bestinfoods.com/user/password/register", "POST", obj).then(data => {
					if (data.errorcode == 0) {
						var leftTime = 60;
						var timer = setInterval(function () {
							if (leftTime == 0) {
								self.setState({
									verifyValue: "重新发送"
								});
								clearInterval(timer);
								self.setState({
									verifyFlag: true
								});
								return false;
							} else {
								self.setState({
									verifyValue: leftTime-- + "(s)",
									verifyFlag: false
								});
							}
						}, 1000);
					} else {
						alert(data.message);
					};
				});
			}
		};
	}
	loginHandle() {
		//登录
		const checked = this.state.checked;
		if (!checked) {
			return false;
		}
	}
};