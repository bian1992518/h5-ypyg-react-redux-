/*
*订单评价
*/
import React , { Component } from 'react';
import BaseComponent from '../../baseComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import styles from '../../../styles/user/orderStyle';
// import { myOrderStateHandle, orderDetailDataHandle } from '../../../../common/actions/userAction';
// import { queryUserOrderData } from '../../../../common/actions/User_orderActions';
import { SegmentBar, OrderList } from './MyOrderContainer';
import {browserHistory, Link} from 'react-router';

class CommentView extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      starts : [1,1,1,1,1],
      mark : 5,
      message: '123',
    }
    this.renderStartView = this.renderStartView.bind(this);
  }
  //星星界面
  renderStartView() {
    for (var i = 5; i > this.state.mark; i--) {
      this.state.starts[i-1] = 0
    }
    return (
      this.state.starts.map((select,index)=>{
        let url = select ? 'common/images/star_select.png' : 'common/images/star_unSelect.png';
        let start = index+1;
        return (
          <button key = { index } style = { styles.starView } onClick = {()=>this.setState({mark:start,starts : [1,1,1,1,1]})}>
            <img style = { styles.startImg } src = {url}/>
          </button>
        )
      })
    )
  }
  //渲染nav右侧按钮
  headerRightRender() {
      return (
        <button style={ styles.navRightView } >
          <p style = { styles.submitFont }>提交</p>
        </button>
      )
  }
  //
  changeComponent(change) {
    this.state.message = change.target.value
  }
  //
  hasDataRender() {
    return (
      <div style = { styles.commentView }>
        <div style = { styles.markView }>
          <img style = { styles.goodsImg }/>
          <p style = { styles.markFont }>评分：</p>
          {this.renderStartView()}
        </div>
        <div style = { styles.ideaView }>
          <textarea
            style = { styles.ideaInput }
            onChange = {(e)=>this.changeComponent(e)}
            placeholder = ' 写下购买体会和使用感受来帮助其他小伙伴~'
            />
        </div>
        <p style = { styles.brefs }>有图有真相，给小伙伴们晒一晒~</p>
      </div>
    )
  }

  render () {
    // const { userOrderDetailReducer } = this.props;
		// let orderDetailData = userOrderDetailReducer.orderDetailData;

		let headerParam = {
      isHeaderShow: true,
      headerName: '评价晒单',
      isBackShow: true
    };
    let netRequestParam = {
      isRequesting: false,
      isDataRequestSucc: true,
      hasData: true
    };
    return (
      <div style = { styles.container }>
				{super.allSceneRender(headerParam, netRequestParam)}
      </div>
    )
  }
}

var styles = {
  container : {
    display : 'flex',
    flexDirection : 'column',
    width : '7.5rem',
    marginTop : '0.88rem',
    backgroundColor : '#f3f3f3',
  },
  navRightView : {
    display : 'flex',
    flex : 1,
    alignItems : 'center',
    height : '0.88rem',
    justifyContent : 'flex-end',
  },
  submitFont : {
    fontSize : '0.28rem',
    color : '#333333',
  },
  commentView : {
    marginTop : '0.2rem',
    flexDirection : 'column',
    backgroundColor : 'white',
  },
  markView : {
    display : 'flex',
    height : '1.8rem',
    width : '7.5rem',
    flexDirection : 'row',
    alignItems : 'center',
  },
  goodsImg : {
    width : '1.2rem',
    height : '1.2rem',
    margin : '0.3rem',
  },
  markFont : {
    color : '#333333',
    fontSize : '0.28rem',
  },
  starView : {
    display : 'flex',
    height : '0.64rem',
    width : '0.64rem',
    justifyContent : 'center',
    alignItems : 'center',
  },
  startImg : {
    height : '0.4rem',
    width : '0.4rem',
  },
  ideaView : {
    marginLeft : '0.3rem',
    marginRight : '0.3rem',
    height : '1.76rem',
    border : '0.01rem solid #dddddd'
  },
  ideaInput : {
    marginTop : '0.1rem',
    marginBottom : '0.1rem',
    fontSize : '0.24rem',
    color : '#333333',
    width : '6.9rem',
    height : '1.56rem'
  },
  brefs : {
    marginTop : '0.26rem',
    marginLeft : '0.3rem',
  },
  commentImg : {
    width : '60px',
    height : '60px',
    marginTop : '0.26rem',
    marginLeft : '0.3rem',
  },
}

function mapStateToProps(state){
	const { GoodsDetailReducer } = state;
  return {
		GoodsDetailReducer
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({

	},dispatch)
}

//将state和dispatch映射在props上
export default connect(mapStateToProps,mapDispatchToProps)(CommentView)
