/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-16 16:13
 * description : 忘记密码
 */

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../styles/loginStyle';
import request from '../../common/config/request';


export default class forgerPwd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: "",
			verify: "",
			imgverify: "",
			pwd: "",
			checked: false,
			iClose: false,
			verifyValue: "获取验证码",
			verifyFlag: true,
			flag: false,
			imgSrc: "http://ndapi.bestinfoods.com/user/post/piccertcode"
		};
	}
	render() {
		const { img, protocolClick } = this.props;
		const logined = !this.state.checked ? styles.logined : Object.assign({}, styles.logined, styles.logineded);
		const close = this.state.iClose ? styles.clearInput : Object.assign({}, styles.clearInput, { visibility: "hidden" });
		const eyesImg = this.state.flag ? "common/images/ic_show_pw@3x.png" : "common/images/ic_hide_pw@3x.png";
		return <View style={styles.login}>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.phone} autoFocus={true} ref="phone" onChange={() => this.phoneChange()} placeholder="请输入您的手机号" />
					<Image style={close} onClick={() => this.clearInput()} source = {
					 require("../../common/images/ic_clear_input@3x.png")
				} />
					<Text style={styles.verify} onClick={() => this.getVerify()}>{this.state.verifyValue}</Text>
				</View>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.verify} ref="verify" onChange={() => this.verifyChange()} placeholder="请输入短信验证码" />
				</View>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.imgverify} ref="imgverify" onChange={() => this.imgverify()} placeholder="请输入图片验证码" />
					<Image style={styles.imgverify} source = {
					 {
						uri: this.state.imgSrc
					}
				} onClick={() => this.imgChange()} />
				</View>
				<View style={styles.loginIn}>
					<TextInput style={styles.loginInput} value={this.state.pwd} ref="pwd" onChange={() => this.pwdChange()} placeholder="请输入(6-20)位密码" />
					<Image onClick={() => this.showPwd()} ref="eyes" style={styles.eyes} source = {
					 {
						uri: eyesImg
					}
				} />
				</View>
				<Button onPress={() => this.loginHandle()} style={logined}>提交</Button>
			</View>;
	}
	phoneChange() {
		//手机号
		const refs = this.refs;
		var val = refs.phone.value;
		if (val.length > 11) {
			return false;
		}
		this.setState({
			iClose: val.length == 0 ? false : true,
			phone: val,
			checked: val.length == 11 && refs.verify.value.length == 6 && refs.pwd.value.length >= 6 && refs.pwd.value.length <= 20
		});
	}
	verifyChange() {
		//验证码
		const refs = this.refs;
		const val = refs.verify.value;
		if (val.length > 6) {
			return false;
		}
		this.setState({
			verify: val,
			checked: refs.phone.value.length == 11 && val.length == 6 && refs.pwd.value.length >= 6 && refs.pwd.value.length <= 20
		});
	}
	pwdChange() {
		const refs = this.refs;
		var pwd = refs.pwd.value;
		if (/[@#$%^&*]+/g.test(pwd)) {
			alert("不要输入非法字符");
			return false;
		} else if (pwd.length > 20) {
			return false;
		}

		this.setState({
			pwd: pwd,
			checked: refs.phone.value.length == 11 && refs.verify.value.length == 6 && pwd.length >= 6 && pwd.length <= 20

		});
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
	imgverify() {}
	imgChange() {
		this.setState({
			imgSrc: "http://ndapi.bestinfoods.com/user/post/piccertcode?" + Math.random()
		});
	}
	loginHandle() {
		//登录
		const checked = this.state.checked;
		if (!checked) {
			return false;
		}
	}
	showPwd() {
		const ref = this.refs;
		this.setState({
			flag: !this.state.flag
		});
		ref.pwd.type = this.state.flag ? "password" : "text";
	}
};