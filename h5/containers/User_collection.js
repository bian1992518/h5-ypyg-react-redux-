/*
**我的收藏
*罗晓锋
 */
import React , { Component } from 'react';
import BaseComponent from './baseComponent';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { queryUserCollectionData } from '../../common/actions/User_collectionAction';
import styles from '../styles/User_collectionStyle';

class UserCollection extends BaseComponent{
  constructor(props) {
    super(props);

    this.state = {
      currentPage : 1,
      totalPage : 1,
      isRefresh : true,//是否需要加载刷新
      collectionData : null,
    }
    this.hasDataRender = this.hasDataRender.bind(this);
    this.renderListView = this.renderListView.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.unique = this.unique.bind(this);
  }
  componentDidMount() {
    let page = this.state.currentPage;
    this.props.queryUserCollectionData(page);
  }
  loadMoreData() {
    if (this.state.isRefresh) {
      this.state.currentPage = this.state.currentPage+1;
      if (this.state.currentPage<=this.state.totalPage) {
        this.state.isRefresh = false;
        this.props.queryUserCollectionData(this.state.currentPage);
      }
    }else {
      return null;
    }
  }
  //排除相同数组
  unique(arr) {
    var result = [], isRepeated;
    var result = [], hash = {};
      for (var i = 0, elem; (elem = arr[i]) != null; i++) {
          if (!hash[elem.goodsId]) {
              result.push(elem);
              hash[elem.goodsId] = true;
          }
      }
      return result;
  }
  hasDataRender() {
    const { userCollectionReducer } = this.props;
    this.state.totalPage = userCollectionReducer.collectionData.data.totalPage;
    let netCurrentPage = parseInt(userCollectionReducer.collectionData.data.currentPage);
    if (this.state.currentPage==netCurrentPage&&this.state.currentPage<=this.state.totalPage) {
      var collectionData;
      if (!this.state.isRefresh) {
        this.state.isRefresh = true;
        this.state.collectionData = this.state.collectionData.concat(userCollectionReducer.collectionData.data.goods);
        collectionData = this.unique(this.state.collectionData);
      }else {
        this.state.collectionData = userCollectionReducer.collectionData.data.goods;
        collectionData = this.state.collectionData;
      }
      return(
        <div style = { styles.listView }>
          {this.renderListView(collectionData)}
        </div>
      )
    }else {
      return(
        <div style = { styles.listView }>
          无数据
        </div>
      )
    }
  }
  renderListView(collectionData) {
    return (
        collectionData.map((data,index)=>{
        return (
          <div key = { index }>
            {this.renderItem(data)}
          </div>
        )
      })
    )
  }
  renderItem(data) {
    let url = data.imgMain ? data.imgMain.url : '';
    if (data.sale===1) {
      if (data.stock>=1) {
        return(
          <Link to = {{ pathname:"/GoodsDetail",query:{goodsId: data.goodsId} }}>
          <div style = { styles.goodsItem }>
            <img style = { styles.goodsImg } src = { url }/>
            <p style = { styles.goodsName }>{data.goodsName}</p>
            <div style = { styles.priceView }>
              <p style = { styles.price }>{data.goodsSalePrice}</p>
              <p style = { styles.delPrice }>{data.goodsMsrp}</p>
            </div>
          </div>
          </Link>
        )
      }else {
        return(
          <div style = { styles.goodsItem }>
            <img style = { styles.goodsImg } src = { url }/>
            <div style = { styles.overflowView }>
              <p style = { styles.goodsState }>已抢光</p>
            </div>
            <p style = { styles.goodsName }>{data.goodsName}</p>
            <div style = { styles.priceView }>
              <p style = { styles.price }>{data.goodsSalePrice}</p>
              <p style = { styles.delPrice }>{data.goodsMsrp}</p>
            </div>
          </div>
        )
      }
    }else{
      return(
        <div style = { styles.goodsItem }>
          <img style = { styles.goodsImg } src = { url }/>
          <div style = { styles.overflowView }>
            <p style = { styles.goodsState }>已下架</p>
          </div>
          <p style = { styles.goodsName }>{data.goodsName}</p>
          <div style = { styles.priceView }>
            <p style = { styles.price }>{data.goodsSalePrice}</p>
            <p style = { styles.delPrice }>{data.goodsMsrp}</p>
          </div>
        </div>
      )
    }
  }
  render () {
		const { userCollectionReducer } = this.props;
    let collectionData = userCollectionReducer.collectionData ? userCollectionReducer.collectionData.data.goods :userCollectionReducer.collectionData;
    let headerParam = {
      isHeaderShow: true,
      headerName: '我的收藏',
      isBackShow: true
    };
    let netRequestParam = {
      isRequesting: userCollectionReducer.dataRequesting,
      isDataRequestSucc: userCollectionReducer.isDataRequestSucc,
      hasData: collectionData,
    };
    return (
      <div style = { styles.container }>
				{super.allSceneRender(headerParam, netRequestParam)}
      </div>
    )
  }
}

function getValue(state){
	const { userCollectionReducer } = state;
  return {
    userCollectionReducer,
  }
}
function changeOrderState(dispatch){
	return bindActionCreators({
    queryUserCollectionData,
	},dispatch)
}

//将state的指定值射在props上，将action的所有方法映射在props上
export default connect(getValue,changeOrderState)(UserCollection)
