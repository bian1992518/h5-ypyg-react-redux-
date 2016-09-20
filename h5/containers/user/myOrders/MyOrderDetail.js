/*订单详情*/
import BaseComponent 					from '../../baseComponent';
import React , { Component } 	from 'react';
import { connect } 						from 'react-redux';
import {browserHistory, Link} from 'react-router';
import { bindActionCreators } from 'redux';
import styles 								from '../../../styles/user/orderDetailStyle';
import NavigatorBar 					from '../../../components/navigatorBar_noRightBtn';
import {imageUrls} 						from '../../../special/stringImage';
import { GoodsCell } 							from './MyOrderDetailContainer';
import { queryUserOrderDetailData } from '../../../../common/actions/User_orderActions';
import { getLocalTime,  getOrderStatus } 			from '../../../../common/config/Tools';

class OrderDetail extends BaseComponent {
	constructor(props) {
		super(props);

		this.renderCountdownView = this.renderCountdownView.bind(this);
		this.renderIdentityCardView = this.renderIdentityCardView.bind(this);
		this.renderWarehouseListView = this.renderWarehouseListView.bind(this);
		this.renderGoodsListView = this.renderGoodsListView.bind(this);
		this.renderLastGoodsCell = this.renderLastGoodsCell.bind(this);
		this.renderFlowView = this.renderFlowView.bind(this);
		this.getAddress = this.getAddress.bind(this);
	}
	componentDidMount() {
		let parameter = {
			orderId : this.props.location.query.orderId
		}
		this.props.queryUserOrderDetailData(parameter);
	}
	renderCountdownView(orderDetailData) {
		if (orderDetailData.order_status_id==2) {
			return (
				<div style = { styles.orderCountdownView }>
					<p style = { styles.orderCountdownBlackFont }>订单已取消</p>
				</div>
			)
		}else if (orderDetailData.order_status_id==1) {
			return (
				<div style = { styles.orderCountdownView }>
					<p style = { styles.orderCountdownBlackFont }>还剩</p>
					<p style = { styles.orderCountdownRedFont }> 00:23:10无字段 </p>
					<p style = { styles.orderCountdownBlackFont }>订单自动取消</p>
				</div>
			)
		}else {
			let paidWay = orderDetailData.pay_id ? (orderDetailData.pay_id==4?'支付宝':'微信支付') : '未知';
			return (
				<div style = { styles.orderCountdownView }>
					<p style = { styles.orderCountdownBlackFont }>支付方式：{paidWay}</p>
				</div>
			)
		}
	}
	renderIdentityCardView(orderDetailData) {
		if (!(orderDetailData.consignee_idcard==='')&&orderDetailData.consignee_idcard) {
			return (
				<div style = { styles.identityCardView }>
					<p style = { styles.identityCardFont }>身份证号码</p>
					<p style = { styles.identityCardFont }>{orderDetailData.consignee_idcard}</p>
				</div>
			)
		}
		return (<div />)
	}
	renderWarehouseListView(goodsData){
		let self = this;
		return goodsData.map(function(warehouseData,index){
				return (
					<div key = { index } style = { styles.warehouseList }>
						<div style = { styles.warehouse }>
							<p style = { styles.warehouseFont }>{warehouseData.warehouse}</p>
						</div>
						{self.renderGoodsListView(warehouseData.goodsList)}
					</div>
				)
			}
		)
	}
	renderGoodsListView(goodsList){
		let self = this;
		 if (goodsList.length===1) {
			let data = goodsList[0];
	    return (
				<div >
					{this.renderLastGoodsCell(data)}
				</div>
	    )
		}else {
			let length = goodsList.length;
			let lastGoodsData = goodsList[length-1];
			let datas = goodsList.splice(0,length-1);
			return (
				datas.map(function(data,index){
					return (
						<div key = {index}>
							<GoodsCell goodsData = { data }/>
							{self.renderLastGoodsCell(data)}
						</div>
					)
				})
			)
		}
	}
	renderLastGoodsCell(goodsData) {
		let urlObj = JSON.stringify(goodsData.imgobj);
		let url = urlObj.url ? urlObj.url : '';
		return (
			<div style = { styles.lastGoodsCell }>
				<div style = {styles.orderLogisticsCell} >
					<img style = { styles.orderLogisticsImg } src = {url}/>
					<p style = { styles.goodsTitle }>{goodsData.goods_name}</p>
					<div style = { styles.goodsTotal }>
						<p style = { styles.goodsCount }>{goodsData.goods_saleprice}</p>
						<p style = { styles.goodsNum }>x{goodsData.goods_num}</p>
					</div>
				</div>
				<button style = { styles.orderLogisticsBtn }>查看物流</button>
			</div>
		)
	}
	renderFlowView(orderDetailData) {
		switch (orderDetailData.order_status_id) {
			case 1:
			return (
				<div style = { styles.flowView }>
					<button style = { styles.orderBtnBlack }>取消订单</button>
					<button style = { styles.orderBtnRed }>立即付款</button>
				</div>
			)
				break;
			case 3:case 4:
			return (
				<div style = { styles.flowView }>
					<button style = { styles.orderBtnRed }>提醒发货</button>
				</div>
			)
				break;
			case 5:case 6:case 7:
			return (
				<div style = { styles.flowView }>
					<button style = { styles.orderBtnRed }>确认收货</button>
				</div>
			)
				break;
			case 8:
			return (
				<div style = { styles.flowView }>
					<button style = { styles.orderBtnBlack }>删除订单</button>
				</div>
			)
				break;
			default:
			return <div></div>
		}
	}
	getAddress(orderDetailData) {
		let address = orderDetailData.ship_area.replace(/\|/g,'3') + orderDetailData.ship_address;
		return address;
	}
	hasDataRender() {
		const { userOrderDetailReducer } = this.props;
		let orderDetailData = userOrderDetailReducer.orderDetailData.data;
		let time = getLocalTime(orderDetailData.order_time);
		return (
			<div style = {styles.viewDirection}>
				<scrollView style = { styles.scrollView }>
				<div style = { styles.orderInfo }>
					<p style = { styles.orderStatusFont }>{orderDetailData.order_status}</p>
					<p style = { styles.orderStateFont }>订单编号：{orderDetailData.pay_no}</p>
					<p style = { styles.orderTimeFont }>下单时间：{time}</p>
					{this.renderCountdownView(orderDetailData)}
				</div>

				<div style = { styles.orderAddressView }>
					<div style = { styles.consumerView }>
						<p style = { styles.consumerFont }>{orderDetailData.consignee}</p>
						<p style = { styles.consumerFont }>{orderDetailData.consignee_mobile}</p>
					</div>
					<p style = { styles.addressFont }>{this.getAddress(orderDetailData)}</p>
				</div>
				{this.renderIdentityCardView(orderDetailData)}

				{this.renderWarehouseListView(orderDetailData.good)}

				<div style = { styles.priceView }>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>商品总价</p>
						<p style = { styles.identityCardFont }>{orderDetailData.order_cost}</p>
					</div>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>活动优惠</p>
						<p style = { styles.identityCardFont }>???</p>
					</div>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>优惠券</p>
						<p style = { styles.identityCardFont }>{orderDetailData.discount_total}</p>
					</div>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>运费</p>
						<p style = { styles.identityCardFont }>{orderDetailData.ship_cost}</p>
					</div>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>税费</p>
						<p style = { styles.identityCardFont }>{orderDetailData.tax_cost}</p>
					</div>
					<div style = { styles.costView }>
						<p style = { styles.identityCardFont }>总计</p>
						<p style = { styles.identityCardFont }>{orderDetailData.item_cost}</p>
					</div>
				</div>
				</scrollView>
				{this.renderFlowView(orderDetailData)}
			</div>
		)
	}

	render () {
		const { userOrderDetailReducer } = this.props;
		let orderDetailData = userOrderDetailReducer.orderDetailData;

		let headerParam = {
      isHeaderShow: true,
      headerName: '订单详情',
      isBackShow: true
    };
    let netRequestParam = {
      isRequesting: userOrderDetailReducer.dataRequesting,
      isDataRequestSucc: userOrderDetailReducer.isDataRequestSucc,
      hasData: orderDetailData
    };
    return (
      <div style = { styles.container }>
				{super.allSceneRender(headerParam, netRequestParam)}
      </div>
    )
	}
}
function getValue(state){
	const { userOrderDetailReducer } = state;
  return {
    userOrderDetailReducer,
  }
}
function changeOrderState(dispatch){
	return bindActionCreators({
		queryUserOrderDetailData,
	},dispatch)
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue,changeOrderState)(OrderDetail)
