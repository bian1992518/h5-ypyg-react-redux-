/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-26 17:13
 * description : 活动商品列表
 */

import React , { Component } from 'react';
import { browserHistory } from "react-router";
import styles from '../styles/brandStyle';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import baseComponent from './baseComponent';
import { queryActivy } from '../../common/actions/activitiesAction';
import "babel-polyfill";
import "swiper";

var goodsData = [
	{
		name: "名字",
	},
	{
		name: "名字",
	},
	{
		name: "名字",
	},
	{
		name: "名字",
	}
]

class Activities extends baseComponent {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		arrowTransform : false,
	  		index :  1 ,
	  		totalPage : 1,
	  		goodsRender : [],
	  	};
	}
	componentWillMount () {
		super.componentWillMount();
		this.props.queryActivy(14,1,10);
	}
	/**
	 * [componentDidMount description]
	 * @return {[type]} [页面加载完后执行]
	 */
	componentDidMount () {
		this.swiperDom();
	}

	componentDidUpdate () {
		this.swiperDom();
	}
	
	swiperDom (){
		var mySwiper = new Swiper('.swiper-container',{
			spaceBetween : 15,
			slidesOffsetBefore : 15,
			slidesOffsetAfter : 15,
	        slidesPerView: 4,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true
		})
	}
	renderEachGood() {
		return goodsData.map(function(item, i){
			return (
				<div className = "swiper-slide" style = { styles.activeName } key={i}>
			    	<p style = { styles.shopName } >{ item.name}</p>
			    </div>
			)
		})
	}

	/**
	 * [loadMoreData description]
	 * @return {[type]} [加载更多]
	 */
	loadMoreData (){
		if (this.state.totalPage >= this.state.index ) {
			this.setState({
				index : ++ this.state.index,
			})
			this.props.queryActivy(14,this.state.index,10);
		}else{
			return false;
		}
	}

	hasDataRender (){
		var id = this.props.location.query.brandId;
		var arrow = this.state.arrowTransform ? Object.assign({},styles.expandArow,styles.tansform) : styles.expandArow;
		var brand = this.state.arrowTransform ? styles.brandIntro : Object.assign({},styles.brandIntro,styles.ellipsis);
		const brandData = this.props.brandData.data;
		if (brandData.totalPage) {
			this.setState({
				totalPage : brandData.totalPage
			})
		};
		return (
			<div style = { styles.barImg } >
				<img style = { styles.banner } src= { brandData.img_main.url } />
				<div style = { styles.brandDetail } >
					<div className = "swiper-container">
					  	<div className = "swiper-wrapper">
						    {/*{this.renderEachGood()}*/}
					  	</div>
					</div>
				</div>

				<div style = { styles.allGoods } >
					{/*
					<div style = { styles.order } >
						<div style = { styles.orderItems } >
							<p>销量</p>
							<img style = { styles.orderImg } src = "../common/images/i-order@3x.png" />
						</div>
						<div style = { styles.orderItems } >最新</div>
						<div style = { styles.orderItems } >价格</div>
					</div>
					*/}
				</div>
				<div style = { styles.shopItems } >
					{ this.renderGoods(brandData.goodlist) }
			    </div>
			</div>
		)
	}
	/**
	 * [unique description]
	 * @param  {[array]} array [需要去重的数组]
	 * @return {[array]}       [去重后的数组]
	 */
	unique(array){ 
		var r = []; 
		for(var i = 0, l = array.length; i < l; i++) { 
		 	for(var j = i + 1; j < l; j++) 
		  		if (array[i] === array[j]) j = ++i; 
		 		r.push(array[i]); 
		} 
		return r; 
	}

	renderGoods (goods) {
		var self = this;
		var goodsRender;
		this.state.goodsRender = this.state.goodsRender.concat(goods);
		goodsRender = this.unique(this.state.goodsRender);
		return goodsRender.map(function(index, elem) {
			return (
				<Link to = {{pathname: "/GoodsDetail" , query : { goodsId : `${ index.goodsId }` } }} style = { styles.shopItem } key = {elem} >
			    	<img style = { styles.shopImg } src= { index.imgobj.url } />
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
				    		<img style = { styles.gived } src = "../common/images/i_ give@3x.png" />
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
				<img style = { styles.share } src = "../common/images/ico_share@3x.png" />
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
	const activitiesReducer = state.activitiesReducer
	return {
		searchParam: {
			isRequesting: activitiesReducer.dataRequesting,
      		isDataRequestSucc: activitiesReducer.isDataRequestSucc,
      		hasData: activitiesReducer.brand
		},
		brandData : activitiesReducer.brand,
	}
}

function mapDispatchToProps(dispatch){
	return {
		queryActivy : bindActionCreators(queryActivy,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Activities)