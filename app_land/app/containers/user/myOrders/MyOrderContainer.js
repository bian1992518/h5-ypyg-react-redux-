/*我的订单*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import styles from '../../../styles/user/orderStyle';
import { orderDetailDataHandle } from '../../../../common/actions/userAction';
import { getLocalTime } from '../../../../common/config/Tools';
//按钮栏
export class SegmentBar extends Component {
	constructor(props) {
		super(props);

		this.btnBarAction = this.btnBarAction.bind(this);
	}
	btnBarAction(selected) {
		let titles = [{ title: "全部" }, { title: "待付款" }, { title: "待发货" }, { title: "待收货" }, { title: "待评价" }];
		let btnState = [false, false, false, false, false];
		let selectBtn = parseInt(selected);
		btnState[selectBtn] = true;
		const { queryUserOrderData } = this.props;
		return titles.map(function (data, index) {
			return <CollectBtn key={index} title={data.title} selected={btnState[index]} action={() => queryUserOrderData(index.toString())} />;
		});
	}
	render() {
		const { selected } = this.props;
		return <View style={styles.segmentBar}>
				{this.btnBarAction(selected)}
			</View>;
	}
}
//按钮
class CollectBtn extends Component {
	render() {
		const { title, selected, action } = this.props;
		if (selected) {
			return <Button style={styles.btnView}>
					<View style={styles.btnDiv}>
						<Text style={styles.collect}>{this.props.title}</Text>
						<View style={styles.line} />
					</View>
				</Button>;
		} else {
			return <Button style={styles.btnView} onPress={action}>
					<Text style={styles.uncollect}>{this.props.title}</Text>
				</Button>;
		}
	}
}

//订单栏
export class OrderList extends Component {
	constructor(props) {
		super(props);

		this._renderGoodsList = this._renderGoodsList.bind(this);
	}
	_renderGoodsList(orderData) {
		return orderData.map(function (data, index) {
			return <View key={index} style={styles.list}>
						<OrderHeaderCell {...data} />
						<GoodsList data={data.order_goods_list} />
						<OrderFooterCell orderData={data} />
					</View>;
		});
	}
	render() {
		const { orderData } = this.props;
		return <View style={styles.list}>
				{this._renderGoodsList(orderData)}
			</View>;
	}
}

//订单头部cell
class OrderHeaderCell extends Component {

	render() {
		const { order_time, order_status } = this.props;
		let time = getLocalTime(order_time);
		return <View style={styles.orderHeader}>
				<Text style={styles.orderHeaderSN}>{time}</Text>
				<Text style={styles.orderHeaderState}>{order_status}</Text>
			</View>;
	}
}
//订单尾部cell
class OrderFooterCell extends Component {
	constructor(props) {
		super(props);

		this._renderFooterBtn = this._renderFooterBtn.bind(this);
	}
	_renderFooterBtn(orderData) {
		switch (orderData.order_status_id) {
			case 1:
				return <View style={styles.orderFooterBtnView}>
            <Button style={styles.orderFooterBtnBlack}>取消订单</Button>
            <Button style={styles.orderFooterBtnRed}>立即付款</Button>
          </View>;
				break;
			case 2:
				return <View style={styles.orderFooterBtnView}>
              <Button style={styles.orderFooterBtnRed}>提醒发货</Button>
            </View>;
				break;
			case 3:
				return <View style={styles.orderFooterBtnView}>
                <Button style={styles.orderFooterBtnBlack}>查看物流</Button>
                <Button style={styles.orderFooterBtnRed}>确认发货</Button>
              </View>;
				break;
			default:
				return <View style={styles.orderFooterBtnView}>
            <Button style={styles.orderFooterBtnBlack}>删除订单</Button>
          </View>;
		}
	}
	render() {
		const { orderData } = this.props;
		return <View style={styles.orderFooter}>
  			<View style={styles.orderFooterGoods}>
  				<Text style={styles.orderFooterFont}>共{orderData.goodsNum}件商品 应付总额：</Text>
          <Text style={styles.orderFooterAcount}>￥{orderData.order_cost}</Text>
        </View>
        {this._renderFooterBtn(orderData)}
      </View>;
	}
}
//商品list
class GoodsList extends Component {
	goodsList(goodsData) {
		return goodsData.map(function (data, index) {
			return <GoodsCell key={index} data={data} />;
		});
	}
	render() {
		const { data } = this.props;
		return <Button onPress = {
			 () => Actions.UserDetailOrderModel({
				orderId: 23
			})
		} style={styles.list}>
				{this.goodsList(data)}
			</Button>;
	}
}
class GoodsCell extends Component {
	render() {
		const { data } = this.props;
		let url = data.good_img ? data.good_img.url : '';
		return <View style={styles.goodsCell}>
				<Image style={styles.goodsImg} source = {
				 {
					uri: url
				}
			} />
        <Text style={styles.goodsTitle}>{data.goods_name}</Text>
        <View style={styles.goodsTotal}>
          <Text style={styles.goodsCount}>{data.goods_saleprice}</Text>
          <Text style={styles.goodsNum}>x{data.goods_num}</Text>
        </View>
      </View>;
	}
}
//待评价订单列表
class OrderCommentList extends Component {
	constructor(props) {
		super(props);

		this._renderCommentCell = this._renderCommentCell.bind(this);
	}
	_renderCommentCell() {
		return <View>

      </View>;
	}
	render() {
		return <View style={styles.orderCommentList}>
        {this._renderCommentCell()}
      </View>;
	}
}
class OrderCommentCell extends Component {
	render() {
		return <View style={styles.list}>
        <View style={styles.orderCommentCell}>
  				<Image style={styles.orderCommentImg} src="" />
          <Text style={styles.goodsTitle}>fafafafdweacEfFSACXZC</Text>
          <View style={styles.goodsTotal}>
            <Text style={styles.goodsCount}>2.00</Text>
            <Text style={styles.goodsNum}>x2</Text>
          </View>
        </View>
        <Button style={styles.orderCommentBtn}>评价晒单</Button>
      </View>;
	}
}