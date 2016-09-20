'use strict';

import React from "react";
import {View,Text,Image,TouchableOpacity,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/homeStyle.js';
import { fetchCategory, fetchActivity, fetchBanner } from '../../common/actions/homeAction';

import ThematicPoster from '../components/Home/homeThematicPoster';

// let store = Redux.createStore()
let categorys = ["推荐", "品牌团", "营养保健", "瘦身美丽", "母婴健康", "休闲食品"];

var thematicSource = [{
	adImage: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742cfeeb8e01.jpg",
	thematicGoods: [{
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1033
	}, {
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1024
	}]
}, {
	adImage: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742d03852026.jpg",
	thematicGoods: [{
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1222
	}, {
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1025
	}, {
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1077
	}]
}, {
	adImage: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742d03852026.jpg",
	thematicGoods: [{
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1079
	}, {
		goodImage: "http://desc.bestinfoods.com/items/2016-04-11/570b68164c398.jpg",
		goodTitle: "挪威三文鱼油",
		price: 234,
		goodId: 1078
	}]
}];

class Home extends React.Component {

	componentWillReceiveProps(nextProps) {
		//console.log("got nextProps: ", nextProps);
	}

	componentWillMount() {
		this.props.fetchBanner();
		this.props.fetchCategory();
	}

	_renderCategorys() {
		const categorydata = this.props.categorydatas;
		if (!categorydata) {
			return;
		}

		return categorydata.classList.map(function (item, i) {
			return <Button key={i} style={styles.category_item}>
					<Text style={styles.category_text}>{item.cat_name}</Text>
				</Button>;
		});
	}

	renderThematic() {
		return thematicSource.map(function (item, index) {
			return <ThematicPoster thematicData={item} key={index} />;
		});
	}

	_renderBanners() {
		const banners = this.props.bannerdatas;
		//console.log("got banners: ", banners);
		if (!banners) {
			return <View></View>;
		}

		return banners.map(function (item, i) {
			let imgURL = item.ad_image.url;
			return <Image style={styles.activity_image} key={i} source = {
				 {
					uri: imgURL
				}
			} />;
		});
	}

	renderRow(rowData, sectionID, rowID) {
		return <Text>{rowData}</Text>;
	}

	renderSectionHeader(sectionData, sectionID) {
		return <View style={styles.section}>
        		<Text style={styles.text}>
          			{sectionData}
        		</Text>
      		</View>;
	}

	renderHeader() {
		return <Button style={styles.header} onPress={() => console.log('Footer!')}>
        	<View style={styles.header}>
          	<Text style={styles.text}>
            	Table Header (click me)
          	</Text>
        	</View>
      		</Button>;
	}

	renderFooter() {
		return <View style={styles.header}>
        	<Text style={styles.text}>
          		Table Footer
        	</Text>
      		</View>;
	}

	render() {
		var getSectionData = (dataBlob, sectionID) => {
			return dataBlob[sectionID];
		};
		var getRowData = (dataBlob, sectionID, rowID) => {
			return dataBlob[rowID];
		};

		var dataSource = new ListView.DataSource({
			getRowData: getRowData,
			getSectionHeaderData: getSectionData,
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});

		var dataBlob = {};
		var sectionIDs = [];
		var rowIDs = [];
		for (var ii = 0; ii < 5; ii++) {
			var sectionName = 'Section ' + ii;
			sectionIDs.push(sectionName);
			dataBlob[sectionName] = sectionName;
			rowIDs[ii] = [];

			for (var jj = 0; jj < 10; jj++) {
				var rowName = 'Section:' + ii + ', Row:' + jj;
				rowIDs[ii].push(rowName);
				dataBlob[rowName] = rowName;
			}
		}

		var settings = {
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		dataSource = dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
		return <View>
				<View style={styles.navigationBar}>
					<View style={styles.searchBar}>
						<View style={styles.category_nav}>
							<Image source = {
							 require("../../common/images/tab_homepage_unpress.png")
						} style={styles.category_img} />
							<Text style={styles.category_font}>分类</Text>
						</View>
						<View style={styles.search_nav}>
							<Image source = {
							 require("../../common/images/icon_search.png")
						} style={styles.search_Image} />
						</View>
					</View>
				</View>

				<ScrollView>
					<View style={styles.container}>
						<Swiper {...settings} height={150} loop={true} style={{ width: "7.5rem" }}>
							{this._renderBanners()}
						</Swiper>
						<View style={styles.categorys_div}>
							{this._renderCategorys()}
						</View>
						{this.renderThematic()}
						<View>
							<Image style={styles.activity_image} source = {
							 {
								uri: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742cfeeb8e01.jpg"
							}
						} />
							<Image style={styles.activity_image} source = {
							 {
								uri: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742d03852026.jpg"
							}
						} />
							<Image style={styles.activity_image} source = {
							 {
								uri: "http://desc.bestinfoods.com/advert/slide/2016-05-23/5742cff8478c0.jpg"
							}
						} />
						</View>
						<ListView style={styles.listview} dataSource={dataSource} renderHeader={this.renderHeader} renderFooter={this.renderFooter} renderSectionHeader={this.renderSectionHeader} renderRow={this.renderRow} />
					</View>
				</ScrollView>
			</View>;
	}
}

function mapStateToProps(state) {
	return {
		categorydatas: state.homeReducer.categorydatas,
		bannerdatas: state.homeReducer.bannerdatas
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCategory,
		fetchActivity,
		fetchBanner
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);