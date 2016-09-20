/*我的订单*/
import React , { Component } from 'react';
import { Link } from 'react-router';
import styles from '../../../styles/user/orderStyle';
import { orderDetailDataHandle } from '../../../../common/actions/userAction';
import { getLocalTime, getOrderStatus } from '../../../../common/config/Tools';
//按钮栏
export class SegmentBar extends Component {
  constructor(props) {
		super(props);

		this.btnBarAction = this.btnBarAction.bind(this);
	}
  btnBarAction (selected) {
		let titles = [
			{ title : "全部" },
			{ title : "待付款" },
			{ title : "待发货" },
			{ title : "待收货" },
			{ title : "待评价" },
		];
    let btnState = [false,false,false,false,false];
    let selectBtn = parseInt(selected);
    btnState[selectBtn] = true;
		return titles.map((data,index)=>{
			return (
  				<CollectBtn key = { index } title = { data.title } selected = { btnState[index] } action = { ()=>this.props.action(index.toString()) }/>
			)
		})
	}
	render (){
		const { selected } = this.props;
		return (
			<div style = {styles.segmentBar}>
				{this.btnBarAction(selected)}
			</div>
		)
	}
}
//按钮
class CollectBtn extends Component {
	render (){
		const { title,selected,action } = this.props;
		if (selected) {
			return (
				<button style = {styles.btnView}>
					<div style = {styles.btnDiv}>
						<p style = {styles.collect}>{this.props.title}</p>
						<div style = {styles.line} />
					</div>
				</button>
			)
		}else {
			return (
				<button style = {styles.btnView} onClick = { action }>
					<p style = {styles.uncollect}>{this.props.title}</p>
				</button>
			)
		}
	}
}

//订单栏
export class OrderList extends Component {
  constructor(props) {
		super(props);

		this._renderGoodsList = this._renderGoodsList.bind(this);
	}
	_renderGoodsList(orderData){
		return(
			orderData.map(function(data,index){
				return (
					<div key = { index } style = { styles.list }>
						<OrderHeaderCell { ...data }/>
						<GoodsList data = {data} />
						<OrderFooterCell orderData = {data}/>
					</div>
				)
			})
		)
	}
	render(){
		const { orderData } = this.props;
		return (
			<div style = { styles.list }>
				{this._renderGoodsList(orderData)}
			</div>
		)
	}
}

//订单头部cell
class OrderHeaderCell extends Component {

	render () {
		const { order_time, order_status_id } = this.props;
    let time = getLocalTime(order_time);
    let status = getOrderStatus(order_status_id);
		return (
			<div style = { styles.orderHeader }>
				<p style = { styles.orderHeaderSN }>{ time }</p>
				<p style = { styles.orderHeaderState }>{ status }</p>
			</div>
		)
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
        return(
          <div style = { styles.orderFooterBtnView }>
            <Link to = {{ pathname:'/UserOrderCommment' }} style = { styles.orderFooterBtnBlack }>
              <p style = { styles.blackBtnFont }>取消订单</p>
            </Link>
            <button style = { styles.orderFooterBtnRed }>
              <p style = { styles.redBtnFont }>立即付款</p>
            </button>
          </div>
        )
        break;
        case 3:case 4:
          return(
            <div style = { styles.orderFooterBtnView }>
              <button style = { styles.orderFooterBtnRed }>
                <p style = { styles.redBtnFont }>提醒发货</p>
              </button>
            </div>
          )
          break;
          case 5:case 6:case 7:
            return(
              <div style = { styles.orderFooterBtnView }>
                <Link to = {{ pathname:'/UserOrderCommment' }} style = { styles.orderFooterBtnBlack }>
                  <p style = { styles.blackBtnFont }>查看物流</p>
                </Link>
                <button style = { styles.orderFooterBtnRed }>
                  <p style = { styles.redBtnFont }>确认收货</p>
                </button>
              </div>
            )
            break;
          case 8:
            return (
              <div style = { styles.orderFooterBtnView }>
                <button style = { styles.orderFooterBtnRed }>
                  <p style = { styles.redBtnFont }>评价订单</p>
                </button>
              </div>
            )
      default:
        return(
          <div style = { styles.orderFooterBtnView }>
            <button style = { styles.orderFooterBtnBlack }>
              <p style = { styles.blackBtnFont }>删除订单</p>
            </button>
          </div>
        )
    }

  }
	render () {
		const { orderData } = this.props;
		return (
      <div style = { styles.orderFooter }>
  			<div style = { styles.orderFooterGoods }>
  				<p style = { styles.orderFooterFont }>共{orderData.goodsNum}件商品 应付总额：</p>
          <p style = { styles.orderFooterAcount }>￥{orderData.order_cost}</p>
        </div>
        {this._renderFooterBtn(orderData)}
      </div>
		)
	}
}
//商品list
class GoodsList extends Component {
	goodsList(goodsData){
		return(
			goodsData.map(function(data,index){
				return (
					<GoodsCell key = { index } data = { data }/>
				)
			})
		)
	}
	render (){
		const { data } = this.props;
		return (
			<Link to = {{ pathname:"/UserDetailOrder",query:{orderId: data.order_id} }}  style = {styles.list}>
				{this.goodsList(data.order_goods_list)}
			</Link>
		)
	}
}
class GoodsCell extends Component{
	render (){
		const { data } = this.props;
    let url = data.imgobj ? data.imgobj.url : '';
		return (
      <div style = {styles.goodsCell} >
				<img style = { styles.goodsImg } src = { url }/>
        <p style = { styles.goodsTitle }>{ data.goods_name }</p>
        <div style = { styles.goodsTotal }>
          <p style = { styles.goodsCount }>{ data.goods_saleprice }</p>
          <p style = { styles.goodsNum }>x{ data.goods_num }</p>
        </div>
      </div>
		)
	}
}
//待评价订单列表
class OrderCommentList extends Component {
  constructor(props) {
    super(props);

    this._renderCommentCell = this._renderCommentCell.bind(this);
  }
  _renderCommentCell(){
    return(
      <div>

      </div>
    )
  }
  render () {
    return(
      <div style = { styles.orderCommentList }>
        {this._renderCommentCell()}
      </div>
    )
  }
}
class OrderCommentCell extends Component {
  render () {
    return (
      <div style = { styles.list }>
        <div style = {styles.orderCommentCell} >
  				<img style = { styles.orderCommentImg } src = ''/>
          <p style = { styles.goodsTitle }>fafafafdweacEfFSACXZC</p>
          <div style = { styles.goodsTotal }>
            <p style = { styles.goodsCount }>2.00</p>
            <p style = { styles.goodsNum }>x2</p>
          </div>
        </div>
        <button style = { styles.orderCommentBtn }>评价晒单</button>
      </div>
    )
  }
}
