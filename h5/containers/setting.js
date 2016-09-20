/*
 * 用户中心
 */

import React , { Component } from 'react';
import styles from '../styles/settingStyle';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Order from '../components/order';
import { listItem, imageUrls } from '../special/stringImage';
import { myOrderStateHandle } from '../../common/actions/userAction';
import { settingPressDown } from "../../common/actions/tabAction";
import { queryUserOrderData } from '../../common/actions/User_OrderActions';

class Setting extends Component {
	listItemRender () {
		return listItem.map(function(data,index){
			return (
				<Link key={index} to={data.link} >
					<div style = { styles.userListItem } >
						<p style = { styles.myOrder } >{ data.tip }</p>
						<img style = { styles.arrowRight } src ={imageUrls.ic_right_arrow} />
					</div>
				</Link>
			)
		})
	}

	componentDidMount() {
		this.props.tabAction();
	}

	render () {
		return (
			<div style = {styles.container} >
				<scrollView>
					<div style = { styles.userHeader } >
						<img style = { styles.userBgImg } src = {imageUrls.bg_my} />
						<div style = { styles.userInfo } >
							<Link to="/login" >
								<img style = { styles.userLogo } src = "common/images/default_profile.jpg" />
							</Link>
						</div>
						<Link to="/user_setting">
							<img style = { styles.userSettingImg } src = {imageUrls.ic_setting} />
						</Link>
					</div>

					<Link  to ={{ pathname:"/UserOrder",query:{handleId: '0'},state:{handleId: "0"}}} >
						<div style = { styles.userOrder } >
						<p style = { styles.myOrder } >我的订单</p>
						<div style = { styles.orderAll } >
							<p style = { styles.checkOrder } >查看所有订单</p>
							<img style = { styles.arrowRight } src = "common/images/icon_right_arrow.png" />
						</div>
						</div>
					</Link>

					<div style = { styles.orderItem } >
						<Order src = "common/images/icon_un_payment.png" tip = "待付款" handleId={'1'} />

						<Order src = "common/images/icon_un_deliver.png" tip = "待发货" handleId={'2'} />

						<Order src = "common/images/icon_un_receive.png" tip = "待收货" handleId={'3'} />

						<Order src = "common/images/icon_un_comment.png" tip = "待评价" handleId={'4'} />
					</div>
					<div style = { styles.userListItems } >
						{this.listItemRender()}
					</div>

					<div style = { styles.service } >
						<p style = { styles.myOrder } >源品客服</p>
						<img style = { styles.arrowRight } src ="common/images/icon_right_arrow.png" />
					</div>
				</scrollView>
			</div>
		)
	}
};

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
	return {
		tabAction : bindActionCreators(settingPressDown, dispatch),
		// bindActionCreators({},dispatch)
	}
}
//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
