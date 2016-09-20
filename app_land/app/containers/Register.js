/******注册*****/

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../styles/loginStyle';
import { protocolHandle } from '../../common/actions/register';
import { connect } from 'react-redux';
import request from '../../common/config/request';


class Register extends Component {
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
	render() {
		const { img, protocolClick } = this.props;
		const logined = !this.state.checked ? styles.logined : Object.assign({}, styles.logined, styles.logineded);
		const close = this.state.iClose ? styles.clearInput : Object.assign({}, styles.clearInput, { visibility: "hidden" });
		return <View style={styles.login}>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.phone} ref="phone" onChange={() => this.phoneChange()} placeholder="请输入您的手机号" />
					<Image style={close} onClick={() => this.clearInput()} source = {
					 require("../../common/images/ic_clear_input@3x.png")
				} />
					<Text style={styles.verify} onClick={() => this.getVerify()}>{this.state.verifyValue}</Text>
				</View>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.verify} ref="verify" onChange={() => this.verifyChange()} placeholder="请输入短信验证码" />
				</View>
				<Text onClick={() => this.loginHandle()} style={logined}>提交</Text>
				<View style={styles.protocols}>
					<Image onClick={() => protocolClick(img.flag)} style={styles.checkImg} source = {
					 {
						uri: img.protocolImg
					}
				} />
					<Text onClick={() => protocolClick(img.flag)} style={styles.protocolMsg}>我已经阅读并同意
						<Button onPress = {
						 Actions.protocolModel
					} style={styles.protocolInfo}>
							《源品优购用户注册协议》
						</Button>
					</Text>
				</View>
			</View>;
	}
	phoneChange() {
		const refs = this.refs;
		var val = refs.phone.value;
		if (val.length > 11) {
			return false;
		}
		this.setState({
			iClose: val.length == 0 ? false : true,
			phone: val,
			checked: val.length == 11 && refs.verify.value.length == 6
		});
	}
	verifyChange() {
		const refs = this.refs;
		const val = refs.verify.value;
		if (val.length > 6) {
			return false;
		}
		this.setState({
			verify: val,
			checked: refs.phone.value.length == 11 && val.length == 6
		});
	}
	clearInput() {
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
			var phoneVal = self.refs.phone.value.replace(/\s/g, "");
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
		const checked = this.state.checked;
		if (!checked) {
			return false;
		}
		location.href = "/setPsw";
	}
};

function getValue(state) {
	return {
		img: state.registerReduce
	};
}

function mapDispatchToProps(dispatch) {
	return {
		protocolClick: param => dispatch(protocolHandle(param))
	};
}

export default connect(getValue, mapDispatchToProps)(Register);