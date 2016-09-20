/*
 * 专题海报商品控件
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import styles from '../../styles/home/thematicGoodStyle.js';

var propTypes = {
	goodId: PropTypes.number.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	isLast: PropTypes.boolen,
}

export default class HomeThematicPoster extends Component {
	render() {
		return (
			<div style={styles.marginPos}>
				<Link to={{pathname: "/GoodsDetail", query:{goodsId: this.props.goodId} }}>
					<div style={styles.container}>
						<div style={styles.good_img_div}>
							<img src={this.props.img} style={styles.goodImg}/>
						</div>
						<p style={styles.goodTitle}>{this.props.title}</p>
						<div style={styles.price_bar}>
							<p style={styles.goodPrice}>{this.props.price}</p>
							<p style={styles.good_oldprice}>{this.props.oldPrice}</p>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}
