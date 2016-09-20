/**
 * author : jiao.shen
 * date : 2016-08-01
 * description : 首页
 */

'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/homeStyle.js';
import {Link} from 'react-router';
import {
	fetchCategory,
	fetchActivity,
	fetchBanner,
	fetchGoodList,
	fetchRecommandGood
} from '../../common/actions/homeAction';
import ListView from "../special/ListView/ListView";
import ListViewDataSource from '../special/ListView/ListViewDataSource';
import ThematicPoster from '../components/Home/homeThematicPoster';
import SinglePoster from '../components/Home/singlePoster';
import "babel-polyfill";
import "swiper";
import { homePressDown } from "../../common/actions/tabAction";


class Home extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	banners: this.props.bannerDatas,
		// 	categorys: this.props.categoryDatas,
		// 	activitys: this.props.activityData,
		// 	thematics: this.props.goodsList
		// }
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log("come into willReceiveProps....");
	// 	if (this.props.bannerDatas !== nextProps.bannerDatas) {
	// 		this.setState({banners: nextProps.bannerDatas})
	// 	}
	// };

	componentWillMount() {
		this.props.fetchBanner();
		this.props.fetchActivity();
		this.props.fetchCategory();
		this.props.fetchGoodList();
		this.props.fetchRecommandGood();
		this.props.homePressDown();
	};

	componentDidUpdate(){
		var swiperBanner = new Swiper ('.swiperBanner', {
			pagination : '.swiper-pagination',
			width: 375,
			height: 188,
			spaceBetween : 10,
			autoplay : 3000,
			loop : true,
			lazyLoading : true,
  		});
  	}

	renderCategorys() {
		const categorydata = this.props.categoryDatas;
		if (!categorydata) { return; }

		return categorydata.categorys.map(function(item, i){
			return (
				<Link key={i} style={styles.category_item} to={{pathname:"/ProductList",
					query:{categoryId: item.categoryId,categoryName: item.categoryName}}}>
					<p style={styles.category_text}>{item.categoryName}</p>
				</Link>
			);
		})
	};

	renderBanners() {
		const banners = this.props.bannerDatas;
		if (!banners) { return<div></div>; }

		return banners.map(function(item, i) {
			let imgURL = item.ad_image.url;
			return (
				<div className = "swiper-slide" key={i} style={{width: 375}}>
					<img style={styles.activity_image} src={imgURL} />
				</div>
			)
		})
	};

	renderSinglePoster() {
		const activitys = this.props.activityData;
		if (!activitys) {return <div></div>}

		return activitys.map(function(item, i) {
			var datas = {
				goodImage: item.img_main.url,
				goodName: item.name,
				goodIcon: item.img_flag.url,
				activityId: item.id
			}
			return (<SinglePoster {...datas} key={i}/>)
		})
	};

	renderGoodsSegment(rowData,sectionID, rowID) {
		return (

			<div style={styles.segemnt_bar}>
				<Link to={{pathname: "/GoodsDetail", query:{goodsId: rowData.goodsId} }}>
					<img src={rowData.goodsImages} style={styles.goodImage}/>
				</Link>
				<div style={styles.bottom_segment}>
					<p style={styles.good_title}>{rowData.goodsName}</p>
					<div style={styles.price_bar}>
						<p style={styles.good_price}>{'¥'+rowData.goodsSalePrice}</p>
						<p style={styles.good_oldprice}>{'¥'+rowData.goodsMsrp}</p>
					</div>
				</div>
			</div>
		)
	}

	renderGoodSement() {
		return goodsData.map(function(rowData, index){
			return (
				<div style={styles.segemnt_bar} key={index}>
					<img src={rowData.img} style={styles.goodImage}/>
					<div style={styles.bottom_segment}>
						<p style={styles.good_title}>{rowData.name}</p>
						<div style={styles.price_bar}>
							<p style={styles.good_price}>{'¥'+rowData.price}</p>
							<p style={styles.good_oldprice}>{'¥'+rowData.oldPrice}</p>
						</div>
					</div>
				</div>
			)
		})
	}

	renderRow(rowData, sectionID, rowID){
    	return (<ThematicPoster thematicData={rowData} />);
  	};

	renderThematic() {
		const thematic = this.props.goodsList;
		if (!thematic) { return<div></div>; }

		return thematic.map(function(rowData, index) {
			return (<ThematicPoster thematicData={rowData} key={index} />);
		})
	}

	render() {
		if (!this.props.recommand) return <div></div>;

		var goodSource = new ListViewDataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		});
		goodSource = goodSource.cloneWithRows(this.props.recommand);

		return (
			<div style={styles.boss_div}>
				<div style={styles.navigationBar}>
					<Link to="/SearchKeyWords">
					<div style={styles.search_nav}>
						<img src="common/images/ic_search@2x.png" style={styles.search_Image} />
					</div>
					</Link>
					<img src="common/images/ic_message@2x.png" style={styles.category_img} />
				</div>

				<scrollView style={styles.scrollView} >
					<div style={styles.container}>

						<div className = "swiper-container swiperBanner" height={188} loop={true}>
					  		<div className = "swiper-wrapper">
						    	{this.renderBanners()}
					  		</div>
					  		<div className="swiper-pagination"></div>
						</div>

						<div style={styles.graydiv}></div>
						<div style={styles.categorys_div}>
							{this.renderCategorys()}
						</div>

      					{this.renderThematic()}
						{this.renderSinglePoster()}
						<ListView
							style={styles.goodListContainer}
							renderRow={this.renderGoodsSegment}
							dataSource={goodSource}
						/>
					</div>
				</scrollView>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
        categoryDatas: state.homeReducer.categoryDatas,
        bannerDatas: state.homeReducer.bannerDatas,
        goodsList: state.homeReducer.goodsList,
        recommand: state.homeReducer.recommandDatas,
        activityData: state.homeReducer.activitys
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategory,
        fetchActivity,
        fetchBanner,
        fetchGoodList,
        fetchRecommandGood,
				homePressDown
    }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Home);
