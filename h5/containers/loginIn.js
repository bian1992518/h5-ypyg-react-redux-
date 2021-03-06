/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-16 13:34
 * description : 密码登录
 */

import React , { Component } from 'react';
import styles from '../styles/setPwdStyle';
import { Link } from 'react-router';
import request from '../../common/config/request';
import "babel-polyfill";


export default class loginIn extends Component {
	constructor(props){
		super(props);

		this.state = {
			phone : "",
			pwd : "",
			iClose : false,
			checked : false,	//控制提交按钮
			flag : false,		//密码的显示切换
		}
	}
	render (){
		const img = this.state.flag ? "common/images/ic_show_pw@3x.png" : "common/images/ic_hide_pw@3x.png" ;
		const logined = !this.state.checked ? styles.finish : Object.assign({},styles.finish,styles.finished);
		const close = this.state.iClose ? styles.clearInput : Object.assign({},styles.clearInput,{ visibility : "hidden"});
		return (
			<div>
				<div style = { styles.header } >
					<p style = { styles.headerTip } >登录</p>
				</div>
				<div style = { styles.input } >
					<input style = { styles.inputText } type = "number" autoFocus = { true }  value = { this.state.phone } ref = "phone" onChange = { () => this.nickChange() }  placeholder = "请输入您的手机号" />
					<img style = { close } onClick = { () => this.clearInput() } src = "common/images/ic_clear_input@3x.png" />
				</div>
				<div style = { styles.input } >
					<input style = { styles.inputText } type = "password" value = { this.state.pwd } ref = "pwd" onChange = { () => this.pwdChange() } placeholder = "请输入您的密码" />
					<img onClick ={ () => this.showPwd() } ref = "eyes" style = { styles.eyes } src = { img } />
				</div>
				<button onClick = { () => this.submited() } style = { logined } >登录</button>
				<div style = { styles.forgerPwd } >
					<Link to = "/forgerPwd"  >
						忘记密码?
					</Link>
				</div>
			</div>
		)
	}
	nickChange () {
		const ref = this.refs;
		var phone = ref.phone.value;
		if(phone.length > 11){
			return false;
		}
		this.setState({
			phone : phone,
			iClose : true,
			checked : (phone.length == 11 && ( ref.pwd.value.length >= 6 && ref.pwd.value.length <=20 ) )
		})
	}
	pwdChange () {
		const ref = this.refs;
		var pwd = ref.pwd.value;
		if (/[@#$%^&*]+/g.test(pwd)) {
			alert("不要输入非法字符");
			return false;
		}else if (pwd.length > 20) {
			return false;
		};

		this.setState({
			pwd : pwd,
			checked : (ref.phone.value.length == 11 && ( pwd.length >= 6 && pwd.length <=20 ) )
		})
	}
	clearInput (){
		this.setState({
			iClose : false,
			phone : ""
		})
	}
	showPwd () {
		const ref = this.refs;
		this.setState({
			flag : !this.state.flag
		})
		var checked = this.state.flag;
		ref.pwd.type = this.state.flag ? "password" : "text";
	}
	submited (){
		var self = this;
		var refs = self.refs;
		const checked = self.state.checked;
		if (!checked) {
			return false
		};

		var data = {
			username : refs.phone.value,
			password : refs.pwd.value
		};
		request("http://ndapi.bestinfoods.com/user/get/login","POST",data)
		.then( data => {
			if (data.errorcode == 0) {
				location.href = "/setting";
			}else{
				alert(data.message);
			}
		})
	}
}