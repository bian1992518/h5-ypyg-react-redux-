/**
 * author : bianlongting
 * email : 1137060420@qq.com
 * date : 2016-08-22 14:54
 * description : 搜索
 */

import React , { Component } from 'react';
import { browserHistory } from "react-router";
import styles from '../styles/searchStyle';
import baseComponent from '../containers/baseComponent';
import { connect } from "react-redux";
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {  queryGoodsData } from '../../common/actions/searchAction';
import {imageUrls} from '../special/stringImage';
import "babel-polyfill";


var index = 1,	//默认索引
	flag = false;

class Search extends baseComponent {
	constructor(props) {
	  	super(props);

	  	this.state = {
	  		arrowTransform : false,
	  		toggleBrand : false,
	  		goodsRender : [],
	  		totalPage : 1,		//默认总页码为1
	  		salesNum : "soldHigh",	//销量排序，默认从高到低 soldHigh : 高 soldLow : 低
	  		newShop : "low" ,	//新商品排序，new : 新 old : 旧
	  		price : "priceLow", //按价格排序 priceLow : 从高到低 priceHight : 从低到高
	  		sortBy  : "soldHigh",
	  		orderBy : [		// 商品排序相关属性 by 控制箭头方向 1上0下 clsName控制样式 1激活0默认 show控制箭头是否显示 1显示0隐藏
				{ id : 1 , name : "销量" , by : 1 , clsName : 1 , show : 1 },
				{ id : 2 , name : "最新" , by : 0 , clsName : 0 , show : 0 },
				{ id : 3 , name : "价格" , by : 0 , clsName : 0 , show : 0 },
			],
	  	}
	}
	/**
	 * [componentWillMount description]
	 * @return {[type]} [页面进来时加载]
	 */
	componentWillMount (){
		super.componentWillMount();
		const keyWords = this.props.location.query.keyWords || "";
		const brandId = this.props.location.query.brandId || "";
		this.props.queryGoodsData(1,10,this.state.sortBy,brandId,keyWords);
	}

	componentWillUnmount() {
		super.componentWillUnmount();
		this.props.getGoodsReducer.data.goods = []
	}

	/**
	 * [componentDidMount description]
	 * @return {[type]} [页面加载完后执行]
	 */
	componentDidMount (){
		this.setState({
			totalPage : this.props.totalPage
		})
	}

	headerRightRender (){
		return (
			<div style = { styles.searchBox } >
				<img style = { styles.search } src = "common/images/i_search@3x.png" />
			</div>
		)
	}

	/**
	 * [loadMoreData description]
	 * @return {[type]} [加载更多]
	 */
	loadMoreData (){
		++ index;
		flag = false;
		if (!this.state.arrowTransform) {	//当显示品牌的时候下拉到底不请求数据
			if (this.state.totalPage >= index ) {
				this.props.queryGoodsData(index,10,this.state.sortBy);
			}else{
				return false;
			}
		};
	}

	/**
	 * [headerRender description]
	 * @return {[type]} [头部]
	 */
	headerRender() {
		var arrow = this.state.arrowTransform ? Object.assign({},styles.dArrow,styles.tansform) : styles.dArrow;
		let headerTitle = this.props.location.query.keyWords ? this.props.location.query.keyWords : this.props.sendMessage;
		return(
			<div>
				{super.headerRender(true,headerTitle)}
				<div style = { styles.allGoods } >
					<div style = { styles.order } >
						{ this.sortByName() }
						<div style = { styles.allBrand } onClick = { () => this.allBrand() } >
							<p style = { styles.orderName } >品牌</p>
							<img style = { arrow } src = "common/images/arrow_d@3x.png" />
						</div>
					</div>
				</div>
			</div>
		);

	}

	/**
	 * [sortByName description]
	 * @return {[type]} [标题栏排序]
	 */
	sortByName (){		//排序条件
		const self = this;
		return this.state.orderBy.map(function(index, elem) {
			var testImg = index.show == 1 ? styles.orderImg : styles.hide;
			return (
				<div style = { styles.orderItems } key = {elem} >
					<p onClick = {() => self.sortShop(`${index.id}`,this)} style = { index.clsName == 1 ? styles.orderActive : styles.orderName } >{index.name}</p>
					<img style = { testImg } src = { index.by == 1 ? imageUrls.iOrderBy : imageUrls.iOrderByDown } />
				</div>
			)
		})
	}

	hasDataRender() {
		var toggleImg = this.state.toggleBrand ? Object.assign({},styles.toggleImg,styles.tansform) : styles.toggleImg;
		return (
			<div style =  { styles.goodsBox } >
				<div style = { this.state.arrowTransform ? styles.hide : styles.show } >
					<div style = { styles.shopItems } >
						{ this.allGoods() }
				    </div>
				    <div style = { styles.cart } >
				    	<div style = { styles.cartBox } >
				    		<img style = { styles.cartImg } src = "common/images/i-cart@3x.png" />
				    		<p style = { styles.cartNum } >2</p>
				    	</div>
				    </div>
			    </div>
			    <div style = { !this.state.arrowTransform ? styles.hide : styles.show }>
				    <div style = { styles.brandsName } >
				    	<p style = { styles.allName } >全部品牌</p>
				    	{ this.allBrandName () }
				    </div>
				    <div style = { styles.nameToggle } onClick = { () => this.toggleBrand() } >
			    		<img style = { toggleImg } src = "common/images/i-up@3x.png" />
			    	</div>
				</div>
			</div>
		)
	}

	render () {
		const { queryGoodsData ,brandReducer, getGoodsReducer ,searchParam } = this.props;
		var headerParam = {

    	};
		return super.allSceneRender(headerParam, searchParam);
	}

	/**
	 * [allBrand description]
	 * @return {[type]} [品牌和商品界面切换]
	 */
	allBrand () {
		this.setState({
			arrowTransform : !this.state.arrowTransform,
			toggleBrand : false
		});
	}
	/**
	 * [toggleBrand description]
	 * @return {[type]} [品牌显示/隐藏状态]
	 */
	toggleBrand () {
		this.setState({
			toggleBrand : !this.state.toggleBrand
		})
	}
	/**
	 * [allBrandName description]
	 * @return {[object]} [获取品牌]
	 */
	allBrandName (){
		const self = this;
		var brandNames = this.props.getGoodsReducer || false;
		var toggleBrand = this.state.toggleBrand ? styles.hide : styles.show;
		if (brandNames) {
			const brandName = brandNames.data.brands.brands;
			return brandName.map(function(index, elem) {
				return (
	 				<div style = { toggleBrand } key = { elem } >
				    	<p onClick = { () => self.sortShop('1',`${index.brandId}`) } style = { styles.name } >{ index.brandName }</p>
				    </div>
				)
			})
		};
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
	/**
	 * [allGoods description]
	 * @return {[object]} [所有商品]
	 */
	allGoods (){
		var self = this;
		var goods = this.props.getGoodsReducer || false;
		if (goods) {
			const goodsItems = goods.data.goods;
			this.state.totalPage = goods.data.totalPage;
			var goodsRender;
			if (this.state.flag) {
				goodsRender = goodsItems;
			}else{
				this.state.goodsRender = this.state.goodsRender.concat(goodsItems)
				goodsRender = this.unique(this.state.goodsRender)
			}
			return goodsRender.map(function(goodsItem, elem) {
				return (
					<Link to = {{pathname: "/GoodsDetail" , query : { goodsId : `${ goodsItem.goodsId }` } }} style = { styles.shopItem } key = { elem } >
				    	<img style = { styles.shopImg } src= { goodsItem.imgMain.url } />
				    	<div style = { styles.shopBox } >
					    	<p style = { styles.shopName } >{ goodsItem.goodsName }</p>
					    	<div style = { styles.shopPrice } >
					    		<p style = { styles.price } >￥{ goodsItem.goodsSalePrice }</p>
					    		<p style = { styles.delPrice } >￥{ goodsItem.goodsMsrp }</p>
					    	</div>
				    	</div>
				    	{ self.activity(goodsItem) }
				    	{/*
				    	<div style = { styles.activity } >
				    		<div style = { styles.activities } >
				    			<p>限时</p>
				    			<p>9.0折</p>
				    		</div>
				    		<div style = { styles.activities } >
				    			<p>限时</p>
				    			<p>9.0折</p>
				    		</div>
				    	</div>
				    	<img style = { styles.gived } src = "common/images/i_ give@3x.png" />
				    	*/}
				    </Link>
		    	)
			})
		};
	}
	/**
	 * [activity description]
	 * @param  {[array]} goods [活动商品数组]
	 * @return {[type]}       [判断是否有活动商品]
	 */
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
	/**
	 * [activeties description]
	 * @param  {[array]} arr [description]
	 * @return {[type]}     [判断是否有其他活动]
	 */
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
	/**
	 * [sortShop description]
	 * @param  {[string]} param [区分按照什么字段排序]
	 * @param  {[number]} id    [品牌id]
	 * @return {[object]}       	[商品排序]
	 */
	sortShop (param,id){
		this.setState({
			goodsRender : [],
			arrowTransform : false
		})
		index = 1;
		flag = true;
		switch (param) {
			case "1": 			//销量
				this.state.sortBy = this.state.salesNum = this.state.salesNum == "soldHigh" ? "soldLow" : "soldHigh";
				break;
			case "2": 			//新旧
				this.state.sortBy = this.state.newShop = this.state.newShop == "new" ? "old" : "new";
				break;
			case "3": 			//价格
				this.state.sortBy = this.state.price = this.state.price == "priceHight" ? "priceLow" : "priceHight";
				break;
			default:
				break;
		}
		for (var i = 0; i < this.state.orderBy.length; i++) {
			if (( param - 1 ) == i) {
				this.state.orderBy[i].by =  this.state.orderBy[i].by == 1 ? 0 : 1 ;
				this.state.orderBy[i].clsName = 1 ;
				this.state.orderBy[i].show = 1;
			}else{
				this.state.orderBy[i].by = 0;
				this.state.orderBy[i].clsName = 0;
				this.state.orderBy[i].show = 0;
			}
		};
		const keyWords = this.props.location.query.keyWords || "";
		const brandId = this.props.location.query.brandId || "";
		this.props.queryGoodsData("1",10,this.state.sortBy,brandId,keyWords)
	}
}

function mapStateToProps (state) {
	const searchReducer = state.searchReducer;
	let sendMessage = state.sendMessageReducer.message//传递的类目名
	return {
		searchParam: {
			isRequesting: searchReducer.dataRequesting,
  		isDataRequestSucc: searchReducer.isDataRequestSucc,
  		hasData: searchReducer.goods,
		},
		brandReducer : searchReducer.brands,
		getGoodsReducer : searchReducer.goods,
		sendMessage,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		queryGoodsData : bindActionCreators(queryGoodsData,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
