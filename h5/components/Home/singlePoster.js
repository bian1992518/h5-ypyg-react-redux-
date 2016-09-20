/*
 * 单品/专题海报
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import styles from '../../styles/home/singlePosterStyle';

// PropTypes = {
// 	goodImage: PropTypes.string.isReuqired,
// 	goodName: PropTypes.string.isReuqired,
//  goodIcon: PropTypes.string.isReuqired
// }

export default class SinglePoster extends Component {
	render() {
		return (
			<Link to={{pathname: "/GoodsDetail", query:{goodsId: this.props.goodId} }}>
			<div style={styles.container}>
				{/*<Link to={{pathname: "/GoodsDetail", query:{activityId: this.props.activityId}}} >*/}
					<img style={styles.goodImage} src={this.props.goodImage}/>
				{/*</Link>*/}
				<div style={styles.bottom_bar}>
					<img style={styles.circle_div} src={this.props.goodIcon} />
					<p style={styles.goodTitle}>{this.props.goodName}</p>
				</div>
			</div>
			</Link>
		)
	}
}
