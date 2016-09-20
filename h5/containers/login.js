/******登录*****/

import React , { Component } from 'react';
import { Link } from 'react-router';
import styles from '../styles/loginStyle';
import request from '../../common/config/request';
import merge from 'lodash/merge';
import "babel-polyfill";

export default class Login extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		phone : "",
	  		verify : "",
	  		checked : false,
	  		iClose : false,
	  		verifyValue : "获取验证码",
	  		verifyFlag : true,
	  	};
	}

	onPhoneChange (event){			//手机号
		var val = event.target.value;
		if(val.length > 11) return false;
		this.setState({
			iClose : val.length == 0 ? false : true,
			phone: val,
			checked : (val.length == 11 && this.state.verify.length == 6)
		})
	}
		
	onVerifyChange (event){		//验证码
		const val = event.target.value;
		if(val.length > 6) return false;
		this.setState({
			verify: val,
			checked : (this.state.phone.length == 11 && val.length == 6)
		})
	}

	render () {
		const { img , protocolClick }  = this.props;
		const logined = !this.state.checked ? styles.logined : Object.assign({},styles.logined,styles.logineded);
		const close = this.state.iClose ? styles.clearInput : merge({},styles.clearInput, styles.clearMerge);

		return (
			<div style = { styles.login } >
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } placeholder = "请输入您的手机号" value={this.state.phone}
						onChange={this.onPhoneChange.bind(this)} type="tel"  
					/>
					<img style = { close } onClick = { () => this.clearInput() } src = "common/images/ic_clear_input@3x.png" />
					<button style = { styles.verify } onClick = { () => this.getVerify() } >{this.state.verifyValue}</button>
				</div>
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } placeholder = "请输入短信验证码" value={this.state.verify}
						onChange = {this.onVerifyChange.bind(this)} type = "tel"  
					/>
				</div>
				<button onClick = { () => this.loginHandle() } style = { logined } >登录</button>
				<div style = { styles.registerOrCodeLoginDiv } >
					<Link to = "/register" >
						<p style = {styles.registerOrCodeLoginP}>快速注册</p>
					</Link>
					<Link to = "/loginIn" >
						<p style = {styles.registerOrCodeLoginP}>使用密码登录</p>
					</Link>
				</div>
			</div>
		)
	}

	clearInput (){			//清空手机号
		const refs = this.refs;
		this.setState({
			iClose : false,
			phone : ""
		})
	}
	getVerify (){			//获取验证码
		var self = this;
		if (self.state.verifyFlag) {
			var phoneVal = self.state.phone.replace(/\s/g,"");
			if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phoneVal)) {
				alert("请输入正确的手机号");
				return false;
			}else{
				var obj = {
					mobile : phoneVal
				}
				request("http://ndapi.bestinfoods.com/user/password/register","POST",obj)
				.then(data => {
					if (data.errorcode == 0) {
						var leftTime = 60;
						var timer  = setInterval(function(){
							if (leftTime == 0) {
								self.setState({
									verifyValue : "重新发送"
								});
								clearInterval(timer);
								self.setState({
									verifyFlag : true
								})
								return false;
							}else{
								self.setState({
									verifyValue : leftTime -- + "(s)",
									verifyFlag : false
								})	
							}
						},1000);
					}else{
						alert(data.message);
					};
				})
			}
		};
	  	
	}
	loginHandle (){		//登录
		const checked = this.state.checked;
		if (!checked) {
			return false;
		}

	}
};

