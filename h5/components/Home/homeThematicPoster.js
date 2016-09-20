/*
 * 专题海报
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import styles from '../../styles/home/thematicPosterStyle';
import ThematicGood from './thematicPosterGoods';
import {imageUrls} from '../../special/stringImage';
import "swiper";

// PropTypes = {
// 	thematicData: PropTypes.object.isRequired,
// }

export default class HomeThematicPoster extends Component {
	componentDidMount () {
		var goodlist = new Swiper('.goodlist',{
			slidesPerView: 3,
			slidesOffsetBefore : 15,
			slidesOffsetAfter : 15,
	        freeMode: true,
	        freeModeSticky : true,
	        slidesPerView: 'auto',
		})
	}

	renderThematicGood() {
		var thematicData = this.props.thematicData.goodlist;
		return thematicData.map(function(item, index){
			var lastOne = index === thematicData.length-1;
			var sigleStyle = index ? styles.thematicDiv : styles.firstDiv;
			return (
				<div className = "swiper-slide" key={index} style={sigleStyle}>
					<ThematicGood 
						goodId={item.goodsId} 
						price={'￥'+item.goodsSalePrice} 
						title={item.goodsName} 
						img={item.imgMain.url}
						isLast={lastOne}
						oldPrice={'￥'+item.goodsMsrp}
					/>
				</div>
			)
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<img src={this.props.thematicData.imgMain.url} style={styles.thematicImage}/>
				<img src={imageUrls.thematicArrow} style={styles.arrowBackground}/>
				<scrollView 
					horizontal={true} 
					style={styles.nativeScroll} 
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.scollContent}
				>
					<div  className = "swiper-container goodlist" style={styles.scrollgoods} deleteComponet>
				  		<div className = "swiper-wrapper">
					    	{this.renderThematicGood()}
				  		</div>
					</div>
				</scrollView>
			</div>
		)
	}
}