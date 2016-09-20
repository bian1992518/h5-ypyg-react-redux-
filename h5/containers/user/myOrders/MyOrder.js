/*订单*/
import React , { Component } from 'react';
import BaseComponent from '../../baseComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../../styles/user/orderStyle';
import { myOrderStateHandle, orderDetailDataHandle } from '../../../../common/actions/userAction';
import { queryUserOrderData } from '../../../../common/actions/User_orderActions';
import { SegmentBar, OrderList } from './MyOrderContainer';
import {browserHistory, Link} from 'react-router';
import {imageUrls} from "../../../special/stringImage";

class MyOrder extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			isRefresh : true,
			currentPage : 1,
			totalPage : 1,
			is_require : [false,false,false,false,false],
			orderData : null,//当前加载的订单数据
			totalOrderData : null,//当前界面所有订单数据
		}
		this.hasDataRender = this.hasDataRender.bind(this);
		this.noDataRender = this.noDataRender.bind(this);
		this.unique = this.unique.bind(this);
		this.repeatLoadData = this.repeatLoadData.bind(this);
	}

	componentDidMount() {
		const { userOrderReducer } = this.props;
		let selected = userOrderReducer.selected;
		let handleId = selected?selected:this.props.location.query.handleId;
		this.props.queryUserOrderData(handleId,this.state.currentPage);
	}
	unique(arr) {
		var result = [], isRepeated;
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem.order_id]) {
            result.push(elem);
            hash[elem.order_id] = true;
        }
    }
    return result;
	}
	loadMoreData() {
		if (this.state.isRefresh) {
			this.state.currentPage = this.state.currentPage+1;
			if (this.state.currentPage<=this.state.totalPage) {
				this.state.isRefresh = false;
				const { userOrderReducer } = this.props;
				let selected = userOrderReducer.selected;
				let handleId = selected?selected:this.props.location.query.handleId;
				this.props.queryUserOrderData(handleId,this.state.currentPage);
			}
		}else {
			return null;
		}
	}
	hasDataRender() {
		this.state.totalPage = this.state.orderData.totalPage;
    let netCurrentPage = parseInt(this.state.orderData.currentPage);
    if (this.state.currentPage==netCurrentPage&&this.state.currentPage<=this.state.totalPage) {
      var orderData;
      if (!this.state.isRefresh) {
        this.state.isRefresh = true;
        this.state.totalOrderData = this.state.totalOrderData.concat(this.state.orderData.orderlist);
        orderData = this.unique(this.state.totalOrderData);
      }else {
        this.state.totalOrderData = this.state.orderData.orderlist;
        orderData = this.state.totalOrderData;
      }
      return(
				<div style = { styles.viewDirection }>
					<scrollView style={styles.scrollView} >
						<OrderList orderData = { this.state.totalOrderData }/>
					</scrollView>
				</div>
      )
    }else {
			return (
				<div style = { styles.viewDirection }>
					{this.noDataRender()}
				</div>
			)
    }
	}
	noDataRender() {
		return (
			<div style = { styles.noDataContainer }>
				<img style = { styles.noDataImgView } src ={imageUrls.icoOrderNoData}/>
				<p style = { styles.noDataTipFont }>啊哦，您还没有任何订单哦！</p>
				<button style = { styles.noDataBtn }>去逛逛</button>
			</div>
		)
	}
	repeatLoadData(selected) {
		this.state.currentPage = 1;
		this.state.orderData = null;
		this.state.totalOrderData = null;
		document.body.scrollTop=0;
		this.props.queryUserOrderData(selected);
	}
	render () {
  	const { userOrderReducer,queryUserOrderData } = this.props;
		let selected = userOrderReducer.selected;
		switch (selected) {
			case '0':
				this.state.orderData = userOrderReducer.myAllOrderData?userOrderReducer.myAllOrderData.data:null;
				break;
			case '1':
				this.state.orderData = userOrderReducer.waitPaidOrderData?userOrderReducer.waitPaidOrderData.data:null;
				break;
			case '2':
				this.state.orderData = userOrderReducer.waitSendOrderData?userOrderReducer.waitSendOrderData.data:null;
				break;
			case '3':
				this.state.orderData = userOrderReducer.waitReceiveOrderData?userOrderReducer.waitReceiveOrderData.data:null;
				break;
			case '4':
				this.state.orderData = userOrderReducer.waitCommentOrderData?userOrderReducer.waitCommentOrderData.data:null;
				break;
			default:
				this.state.orderData = null;
				break;
		}
		let isUpdate = this.state.orderData&&this.state.orderData.orderlist ? true : false ;
		let actions = this.repeatLoadData;

		let headerParam = {
      isHeaderShow: true,
      headerName: '我的订单',
      isBackShow: true
    };
    let netRequestParam = {
      isRequesting: userOrderReducer.dataRequesting,
      isDataRequestSucc: userOrderReducer.isDataRequestSucc,
      hasData: isUpdate,
    };
    return (
      <div style = { styles.container }>
				<SegmentBar selected = { selected } action = {(selected)=>{this.repeatLoadData(selected)}}/>
				{super.allSceneRender(headerParam, netRequestParam)}
      </div>
    )
	}
}

function getValue(state){
	const { userOrderReducer } = state;
  return {
    userOrderReducer,
  }
}
function changeOrderState(dispatch){
	return bindActionCreators({
		queryUserOrderData,
	},dispatch)
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue,changeOrderState)(MyOrder)
