import React from "react";
import styles from "../styles/aboutStyle.js";
import { browserHistory, Link } from 'react-router';

export default class AboutScreen extends React.Component {

	render (){
		return (
			<div style={styles.container}>
				<div style={styles.about_us}>
					<button onClick={() => browserHistory.goBack()}>
						<img style = {styles.arrow} src = "common/images/i-arrow-l.jpg" />
					</button>
					<p style = {styles.about_title} >关于源品</p>
					<p style = {styles.share} >分享</p>
				</div>
				<div style={styles.about}>
					<img style = {styles.logo} src = "common/images/logo.jpg"  />
					<img style = {styles.code} src = "common/images/code.jpg" />
					<p style = {styles.concern} >扫描二维码 , 让你的</p>
					<p style = {styles.concern} >小伙伴也拥有源品吧</p>
				</div>
				<div style = {styles.phone} >
					<p style={styles.phone_text}>联系源品</p>
					<p style={styles.phone_text}>400-670-1118</p>
				</div>
			</div>
		)
	}
}