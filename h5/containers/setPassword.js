/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-16 13:34
 * description : 设置密码
 */

import React , { Component } from 'react';
import styles from '../styles/setPwdStyle';
import "babel-polyfill";


export default class setPsw extends Component {
	constructor(props){
		super(props);

		this.state = {
			nickname : "",
			pwd : "",
			iClose : false,
			flag : false,		//密码的显示切换
			checked : false
		}
	}
	render (){
		const img = this.state.flag ? "common/images/ic_show_pw@3x.png" : "common/images/ic_hide_pw@3x.png" ;
		const close = this.state.iClose ? styles.clearInput : Object.assign({},styles.clearInput,{ visibility : "hidden"});
		const logined = !this.state.checked ? styles.finish : Object.assign({},styles.finish,styles.finished);
		return (
			<div>
				<div style = { styles.header } >
					<p style = { styles.notip } ></p>
					<p style = { styles.headerTip } >设置密码</p>
					<p onClick = { () => this.skip() } style = { styles.skip }>跳过</p>
				</div>
				<div style = { styles.tip } >
					不设置密码，下次通过手机验证码进行登录，一样安全
				</div>
				<div style = { styles.input } >
					<input style = { styles.inputText } type = "text" autoFocus = { true }  value = { this.state.nickname } ref = "nickname" onChange = { () => this.nickChange() }  placeholder = "昵称" />
					<img style = { close } onClick = { () => this.clearInput() } src = "common/images/ic_clear_input@3x.png" />
				</div>
				<div style = { styles.input } >
					<input style = { styles.inputText } type = "password" value = { this.state.pwd } ref = "pwd" onChange = { () => this.pwdChange() } placeholder = "请输入(6-20)位密码" />
					<img onClick ={ () => this.showPwd() } ref = "eyes" style = { styles.eyes } src = { img } />
				</div>
				<p style = { logined } >完成</p>
			</div>
		)
	}
	skip () {	//跳过登陆
		alert("注册成功");
		location.href ="/setting";
	}
	nickChange () {
		const ref = this.refs;
		var nickname = ref.nickname.value;
		if (/[@#$%^&*`.]+/g.test(nickname)) {
			alert("不能输入非法字符");
			return false;
		}else if (nickname.length > 20) {
			return false;
		};
		this.setState({
			nickname : nickname,
			iClose : true,
			checked : ( (nickname.length >= 2 && nickname.length <= 18) && (ref.pwd.value.length >= 6 && ref.pwd.value.length <= 20 ) )
		})
	}
	pwdChange () {
		const ref = this.refs;
		var pwd = ref.pwd.value;
		if (/[@#$%^&*]+/g.test(pwd)) {
			alert("不要输入非法字符");
			return false;
		}else if (pwd.length > 20) {
			return false
		};

		this.setState({
			pwd : pwd,
			checked : ( (pwd.length >= 6 && pwd.length <= 20) && (ref.nickname.value.length >= 2 && ref.nickname.value.length <= 18 ) )
		})
	}
	clearInput (){
		this.setState({
			iClose : false,
			nickname : ""
		})
	}
	showPwd () {
		const ref = this.refs;
		this.setState({
			flag : !this.state.flag
		})
		ref.pwd.type = this.state.flag ? "password" : "text";
	}
}