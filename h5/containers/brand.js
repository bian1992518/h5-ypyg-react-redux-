/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-19 17:23
 * description : 品牌
 */

import React , { Component } from 'react';
import { browserHistory } from "react-router";
import styles from '../styles/brandStyle';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import baseComponent from './baseComponent';
import { queryBrand } from '../../common/actions/brandAction';
import "babel-polyfill";
import "swiper";

class Brand extends baseComponent {
	constructor(props) {
	  	super(props);

	  	this.state = {
	  		arrowTransform : false
	  	};
	}
	componentWillMount () {
		super.componentWillMount();
		this.props.queryBrand(this.props.location.query.brandId);
	}
	componentDidMount () {
		this.swiperDom();
	}

	componentDidUpdate () {
		this.swiperDom();
	}
	swiperDom (){
		var mySwiper = new Swiper('.swiper-container',{
			slidesPerView: 3,
			spaceBetween : 15,
			slidesOffsetBefore : 15,
			slidesOffsetAfter : 15,
	        freeMode: true,
	        freeModeSticky : true,
	        slidesPerView: 'auto',
		})
	}
	renderEachGood() {
		const goodsData = this.props.hotBrand.data.goods;
		return goodsData.map(function(item, i){
			return (
				<Link to = {{pathname: "/GoodsDetail", query:{goodsId: `${item.goodsId}`}}} className = "swiper-slide" style = { styles.hotShopInfo } key={i}>
			    	<img style = { styles.hotShopImg } src= { item.imgMain.url } />
			    	<p style = { styles.shopName } >{ item.goodsName }</p>
			    	<div style = { styles.shopPrice } >
			    		<p style = { styles.price } >￥{ item.goodsSalePrice }</p>
			    		<p style = { styles.delPrice } >￥{ item.goodsMsrp }</p>
			    	</div>
			    </Link>
			)
		})
	}

	hasDataRender (){
		var id = this.props.location.query.brandId;
		var arrow = this.state.arrowTransform ? Object.assign({},styles.expandArow,styles.tansform) : styles.expandArow;
		var brand = this.state.arrowTransform ? styles.brandIntro : Object.assign({},styles.brandIntro,styles.ellipsis);
		const brandData = this.props.brandData.data;
		return (
			<div>
				<img style = { styles.banner } src= { brandData.imgMain.url } />
				<div style = { styles.brandDetail } >
					<div style = { styles.brandInfo } >
						<img style = { styles.brandLogo } src = { brandData.imgLogo.url } />
						<div style = { styles.brandWrap } >
							<p style = { styles.brandName } >{ brandData.brandName }</p>
							<div style = { styles.brandMsg } >
								<img style ={ styles.brandFlag } src = { brandData.imgFlag.url } />
								<p style = { styles.country } >{ brandData.countryName_ch }</p>
							</div>
						</div>
					</div>
					<p style = { brand } >{ brandData.brandBrief }</p>
					<div style = { styles.expand } onClick = { () => this.showAll() } >
						<img  style = { arrow } src = "common/images/arrow_d@3x.png" />
					</div>
				</div>
				<div style = { styles.brandDetail } >
					<p style = { styles.hotTitle } >最热商品</p>

					<div className = "swiper-container">
					  	<div className = "swiper-wrapper">
						    {this.renderEachGood()}
					  	</div>
					</div>
				</div>

				<div style = { styles.allGoods } >
					<p style = { styles.hotTitle } >全部商品</p>
					{/*
					<div style = { styles.order } >
						<div style = { styles.orderItems } >
							<p>销量</p>
							<img style = { styles.orderImg } src = "common/images/i-order@3x.png" />
						</div>
						<div style = { styles.orderItems } >最新</div>
						<div style = { styles.orderItems } >价格</div>
					</div>
					*/}
				</div>
				<div style = { styles.shopItems } >
					{ this.renderGoods(brandData.goods) }
			    </div>
			</div>
		)
	}

	renderGoods (goods) {
		var self = this;
		return goods.map(function(index, elem) {
			return (
				<Link to = {{pathname: "/GoodsDetail" , query : { goodsId : `${ index.goodsId }` } }} style = { styles.shopItem } key = {elem} >
			    	<img style = { styles.shopImg } src= { index.imgMain.url } />
			    	<div style = { styles.shopBox } >
				    	<p style = { styles.shopName } >{ index.goodsName }</p>
				    	<div style = { styles.shopPrice } >
				    		<p style = { styles.price } >￥{ index.goodsSalePrice }</p>
				    		<p style = { styles.delPrice } >￥{ index.goodsMsrp }</p>
				    	</div>
			    	</div>
			    	{ self.activity(index) }
			    </Link>
			)
		})
	}

	activity (goods){
		var self = this;
		if (goods.activity) {
			var active = goods.activity.activities;
			return active.map(function(index, elem) {
				var toggle = index.activityType == 3 ? styles.show : styles.hide;
				var arr = [];
				if (index.activityType != 3) {
					arr.push(index)
				};
				return (
					<div key = {elem}>
						{ self.activeties(arr) }
				    	<div style = { toggle } >
				    		<img style = { styles.gived } src = "common/images/i_ give@3x.png" />
				    	</div>
					</div>
				)
			})
		}else{
			return false;
		}
	}

	activeties (arr){
		if (arr.length > 0) {
			return arr.map(function(index, elem) {
				return (
	   				<div style = { styles.activities } key = {elem} >
		    			<p>{index.name}</p>
		    		</div>
				)
			})
		}else{
			return false;
		}
	}

	headerRightRender (){
		return (
			<div style = { styles.shareBox } >
				<img style = { styles.share } src = "common/images/ico_share@3x.png" />
			</div>
		)
	}
	render () {
		const { queryGoodsData , brandData , searchParam } = this.props;
		var headerParam = {
	      	isHeaderShow: true,
	      	headerName: '这里是品牌名字',
	      	isBackShow: true
    	};
		return super.allSceneRender(headerParam, searchParam);
	}

	showAll (){
		this.setState({
			arrowTransform : !this.state.arrowTransform
		})
	}
}

function mapStateToProps(state){
	const brandReducer = state.brandReducer
	return {
		searchParam: {
			isRequesting: brandReducer.dataRequesting,
      		isDataRequestSucc: brandReducer.isDataRequestSucc,
      		hasData: brandReducer.brand
		},
		brandData : brandReducer.brand,
		hotBrand : brandReducer.hotBrand
	}
}

function mapDispatchToProps(dispatch){
	return {
		queryBrand : bindActionCreators(queryBrand,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Brand)
