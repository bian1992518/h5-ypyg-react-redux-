/*收藏的商品*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../../../styles/user/collectGoodsStyle';
import { collectionHandle, unCollectionHandle } from '../../../../common/actions/userAction';
import { connect } from 'react-redux';
import { GoodsCell, CollectBtn, SegmentBar } from './CollectionContainer';
import NavigatorBar from '../../../components/navigatorBar_noRightBtn';
import { Actions } from 'react-native-router-flux';

class Collection extends Component {

	constructor(props) {
		super(props);

		this.listItemRender = this.listItemRender.bind(this);
	}

	goBack() {
		this.props.history.goBack();
	}

	listItemRender() {
		const { collectionData } = this.props;
		return collectionData.map(function (data, index) {
			return <GoodsCell key={index} img={data.img[0]} name={data.name} price={data.price} />;
		});
	}
	render() {
		const { offSale, collectionClick, unCollectionClick } = this.props;
		return <View style={styles.container}>
				<NavigatorBar title="收藏的商品" />
				<SegmentBar offSale={offSale} action={collectionClick} unAction={unCollectionClick} />
				<ScrollView style={styles.scrollView}>
				<View style={styles.list}>
					{this.listItemRender()}
				</View>
				</ScrollView>
			</View>;
	}
}

function getValue(state) {
	return {
		collectionData: state.collection.message,
		offSale: state.collection.offSale
	};
}
function segmentBarAction(dispatch) {
	return {
		collectionClick: () => dispatch(collectionHandle()),
		unCollectionClick: () => dispatch(unCollectionHandle())
	};
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue, segmentBarAction)(Collection);