/******注册*****/

import React , { Component } from 'react';
import { Link } from 'react-router';
import styles from '../styles/loginStyle';
import { protocolHandle } from '../../common/actions/register';
import { connect } from 'react-redux';
import request from '../../common/config/request';
import "babel-polyfill";

class Register extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		phone : "",
	  		verify : "",
	  		pwd : "",
	  		repwd : "",
	  		checked : false,
	  		iClose : false,
	  		verifyValue : "获取验证码",
	  		verifyFlag : true,
	  		flag : false,
	  		reflag : false
	  	};
	}
	render () {
		const eyesImg = this.state.flag ? "common/images/ic_show_pw@3x.png" : "common/images/ic_hide_pw@3x.png" ;
		const reyesImg = this.state.reflag ? "common/images/ic_show_pw@3x.png" : "common/images/ic_hide_pw@3x.png" ;
		const { img , protocolClick }  = this.props;
		const logined = !this.state.checked ? styles.logined : Object.assign({},styles.logined,styles.logineded);
		const close = this.state.iClose ? styles.clearInput : Object.assign({},styles.clearInput,{ visibility : "hidden"});
		return (
			<div style = { styles.login } >
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } value = { this.state.phone } ref = "phone" onChange={ () => this.phoneChange()} type = "tpl" placeholder = "请输入您的手机号" />
					<img style = { close } onClick = { () => this.clearInput() } src = "common/images/ic_clear_input@3x.png" />
					<p style = { styles.verify } onClick = { () => this.getVerify() } >{this.state.verifyValue}</p>
				</div>
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } value = { this.state.verify } ref = "verify" onChange = { () => this.verifyChange() } type = "number" placeholder = "请输入短信验证码" />
				</div>
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } value = { this.state.pwd } ref = "pwd" onChange = { () => this.pwdChange() } type = "password" placeholder = "请输入密码" />
					<img onClick ={ () => this.showPwd() } ref = "eyes" style = { styles.eyes } src = { eyesImg } />
				</div>
				<div style = { styles.loginIn } >
					<input style = { styles.loginInput } value = { this.state.repwd } ref = "repwd" onChange = { () => this.repwdChange() } type = "password" placeholder = "请确认密码" />
					<img onClick ={ () => this.reshowPwd() } ref = "eyes" style = { styles.eyes } src = { reyesImg } />
				</div>
				<button onClick = {  () => this.loginHandle() } style = { logined } >提交</button>
				<div style = { styles.protocols } >
					<img onClick = { () => protocolClick(img.flag) } style = { styles.checkImg } src = { img.protocolImg } />
					<p onClick = { () => protocolClick(img.flag) } style = { styles.protocolMsg } >我已经阅读并同意
						<Link to = "/protocol" style = { styles.protocolInfo} >
							《源品优购用户注册协议》
						</Link>
					</p>
				</div>
			</div>
		)
	}
	phoneChange (){
		const refs = this.refs;
		var val = refs.phone.value;
		if(val.length > 11){
			return false;
		}
		this.setState({
			iClose : val.length == 0 ? false : true,
			phone: val,
			checked : (val.length == 11 && refs.verify.value.length == 6 && (refs.pwd.value.length >=6 && refs.pwd.value.length <= 20) && (refs.repwd.value.length >=6 && refs.repwd.value.length <= 20))
		})
	}
	verifyChange (){
		const refs = this.refs;
		const val = refs.verify.value;
		if(val.length > 6){
			return false;
		}
		this.setState({
			verify: val,
			checked : (refs.phone.value.length == 11 && val.length == 6 && (refs.pwd.value.length >=6 && refs.pwd.value.length <= 20) && (refs.repwd.value.length >=6 && refs.repwd.value.length <= 20) )
		})
	}
	pwdChange (){
		const refs = this.refs;
		const val = refs.pwd.value;
		if (/[@#$%^&*]+/g.test(val)) {
			alert("不要输入非法字符");
			return false;
		}else if (val.length > 20) {
			return false
		}
		this.setState({
			pwd: val,
			checked : (refs.phone.value.length == 11 && refs.verify.value.length == 6 && (val.length >=6 && val.length <= 20) && (refs.repwd.value.length >=6 && refs.repwd.value.length <= 20) )
		})
	}
	repwdChange (){
		const refs = this.refs;
		const val = refs.repwd.value;
		if (/[@#$%^&*]+/g.test(val)) {
			alert("不要输入非法字符");
			return false;
		}else if (val.length > 20) {
			return false
		}
		this.setState({
			repwd: val,
			checked : (refs.phone.value.length == 11 && refs.verify.value.length == 6 && (val.length >=6 && val.length <= 20) && (refs.pwd.value.length >=6 && refs.pwd.value.length <= 20) )
		})
	}
	clearInput (){
		const refs = this.refs;
		this.setState({
			iClose : false,
			phone : ""
		})
	}
	getVerify (){			//获取验证码
		var self = this;
		if (self.state.verifyFlag) {
			var phoneVal = self.refs.phone.value.replace(/\s/g,"");
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
	loginHandle (){
		const checked = this.state.checked;
		const ref = this.refs;
		const pwd = ref.pwd.value;
		const repwd = ref.repwd.value;
		const phone = ref.phone.value;
		if (!checked) {
			return false;
		}else if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone)) {
			alert("请输入正确的手机号");
			return false;
		}else if (pwd != repwd ) {
			alert("密码不一致");
			return false;
		}else{
			var obj = {
				mobile : ref.phone.value,
				type : 2,
				code : ref.verify.value,
				password : pwd,
				passwordRepeat : repwd
			}
			request("http://ndapi.bestinfoods.com/user/password/register","POST",obj)
			.then(data => {
				if (data.errorcode == 0) {
					location.href = "/setting";
				}else{
					alert(data.message)
				}
			})
		}
	}
	showPwd () {
		const ref = this.refs;
		this.setState({
			flag : !this.state.flag
		})
		ref.pwd.type = this.state.flag ? "password" : "text";
	}
	reshowPwd () {
		const ref = this.refs;
		this.setState({
			reflag : !this.state.reflag
		})
		ref.repwd.type = this.state.reflag ? "password" : "text";
	}
	reshowPwd () {
		const ref = this.refs;
		this.setState({
			reflag : !this.state.reflag
		})
		ref.repwd.type = this.state.reflag ? "password" : "text";
	}
};

function getValue (state){
	return {
		img : state.registerReduce
	}
}

function mapDispatchToProps(dispatch){
	return {
		protocolClick : (param) => dispatch(protocolHandle(param)),
	}
}

export default connect(getValue,mapDispatchToProps)(Register);