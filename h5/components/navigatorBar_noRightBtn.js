/*
 * navigatorbar
 */

import React , { Component } from 'react';
import styles from "../styles/navigatorBarStyle";
import { browserHistory, Link } from 'react-router';

export default class NavigatorBar extends Component {
	render () {
		const { title } = this.props;
		return (
			<div style={ styles.navigatorBar }>
					<button style = { styles.navLeftView } onClick = {() => browserHistory.goBack() }>
						<img src="common/images/icon_left_arrow.png" style={ styles.navBack } />
					</button>
					<p style={ styles.navTitle }>{title}</p>
					<div style={ styles.navRightView }></div>
			</div>
		)
	}
}
