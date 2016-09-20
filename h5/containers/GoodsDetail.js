//商品详情界面  lxf

import React, { Component } from 'react';
import BaseComponent from './baseComponent';
import styles from '../styles/goodsDetailStyle';
import {browserHistory, Link} from 'react-router';
import { bindActionCreators } from 'redux';
import Swiper from 'swiper';
import { connect } from 'react-redux';
import { queryGoodsDetailData, queryCartCount, queryPushItemToCart, queryDirectchange, queryCollectgoods } from '../../common/actions/GoodsDetailActions';

class GoodsDetail extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      goodsId : null,
      isRenderToastView : false,
      toastState : 0,
      setSwiper : 0,
      collectionType : 2,
    };
    this.hasDataRender = this.hasDataRender.bind(this);
    this.renderGoodsBanners = this.renderGoodsBanners.bind(this);
    this.renderActivityCell = this.renderActivityCell.bind(this);
    this.renderShippingFeeCell = this.renderShippingFeeCell.bind(this);
    this.pushItemToCartAction = this.pushItemToCartAction.bind(this);
    this.renderToast = this.renderToast.bind(this);
    this.directMinusPaid = this.directMinusPaid.bind(this);
    this.directPlusPaid = this.directPlusPaid.bind(this);
    this.closeDirectPaid = this.closeDirectPaid.bind(this);
    this.collectgoods = this.collectgoods.bind(this);
    this.renderJudgeStockBtn = this.renderJudgeStockBtn.bind(this);
  }
  componentDidUpdate(){
    if (this.state.setSwiper<=1) {
      let swiper = new Swiper ('.swiper-container', {
          pagination : '.swiper-pagination',
          width: 175,
          height: 230,
          margin: 20,
          spaceBetween : 30,
          autoplay : 3000,
          loop : true,
          lazyLoading : true,
          autoplayDisableOnInteraction : false,
    		});
        this.state.setSwiper =this.state.setSwiper+1;
    }
  }
  componentDidMount() {
    console.log(this.props.location.query);
    let queryGoodsDataParameter = {
      goodsId : this.props.location.query.goodsId
    };
    this.props.queryGoodsDetailData(queryGoodsDataParameter);

    this.props.queryCartCount();

	};
  //渲染nav右侧按钮
  headerRightRender() {
      return (
        <button style={ styles.navRightView } onClick = {()=>this.directPlusPaid('10001')}>
          <img style = { styles.sharedImg } src = 'common/images/ico_shared.png'/>
        </button>
      )
  }
  //加入购物车
  pushItemToCartAction(goodId) {
    let pushItemToCartParameter = [{
      goodId : goodId,
      amount : 1
    }];
    pushItemToCartParameter = JSON.stringify(pushItemToCartParameter);
    this.props.queryPushItemToCart('goods='+pushItemToCartParameter)
  }
  //立即购买
  directMinusPaid(goodId) {
    let amount = this.props.GoodsDetailReducer.unpaidGoodsCount?this.props.GoodsDetailReducer.unpaidGoodsCount.data.amount:'0';
    amount = parseInt(amount)-1;
    if (amount===0) {
      return;
    }
     console.log('---',amount);
    let parameter = {
      goodsId : goodId,
      amount : amount
    };
    this.props.queryDirectchange(parameter)
  }
  directPlusPaid(goodId) {
    let amount = (this.props.GoodsDetailReducer.unpaidGoodsCount)?(this.props.GoodsDetailReducer.unpaidGoodsCount.data.amount):'0';
    amount = parseInt(amount)+1;
    // console.log('+++',amount);
    let parameter = {
      goodsId : goodId,
      amount : amount
    };
    this.props.queryDirectchange(parameter)
  }
  //收藏商品
  // http://ndapi.bestinfoods.com//user/post/collectgoods?goodsId=10010&type=2
  collectgoods() {
    let type = (this.state.collectionType===1)?2:1;
    this.state.collectionType = type;
    let parameter = {
      goodsId : goodId,
      type : type
    };
    this.props.queryCollectgoods(parameter)
  }
  //活动cell
  renderActivityCell(activityData) {
    if (activityData.inActivity) {
      return (
        <button
          style = { styles.costCell }
          onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView,toastState:1})}
          >
          <p style = { styles.costFont }>促销：{activityData.activities[0].name}</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </button>
      )
    }
    return(<div />)
  }
  //运费cell
  renderShippingFeeCell(shippingFee) {
    if (parseFloat(shippingFee)) {
      return(
        <button
          style = { styles.costCell }
          onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView,toastState:2})}
          >
          <p style = { styles.costFont }>运费：订单实付满99免运费</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </button>
      )
    }else {
      return (
        <button
          style = { styles.costCell }
          onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView,toastState:2})}
          >
          <p style = { styles.costFont }>运费：本商品免运费</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </button>
      )
    }

  }
  //提示框
  renderToast() {
    if (this.state.isRenderToastView) {
      if (this.state.toastState===1) {
        return (
          <div style = { styles.toastView }>
            <div style = { styles.shadowView }>
            </div>

            <div style = { styles.alertView }>
              <div style = { styles.alertName }>
                <p style = { styles.costFont }>促销活动</p>
                <button style = { styles.alertDelView } onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView})}>
                  <img style = { styles.alertDelImg } src = 'common/images/ico_goodsDetailDel.png'/>
                </button>
              </div>
              <div style = {styles.alertDetailView}>
                <p style = { styles.alertBlackFont }>满199减100</p>
              </div>
            </div>
          </div>
        )
      }else if (this.state.toastState===2) {
        return (
          <div style = { styles.toastView }>
            <div style = { styles.shadowView }>
            </div>

            <div style = { styles.alertView }>
              <div style = { styles.alertName }>
                <p style = { styles.costFont }>运费规则</p>
                <button style = { styles.alertDelView } onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView})}>
                  <img style = { styles.alertDelImg } src = 'common/images/ico_goodsDetailDel.png'/>
                </button>
              </div>
              <div style = {styles.alertDetailView}>
                <p style = { styles.alertBlackFont }>订单实付满99元免运费（不含税费、活动及优惠券）</p>
              </div>
            </div>
          </div>
        )
      }else if (this.state.toastState===3) {
        return (
          <div style = { styles.toastView }>
            <div style = { styles.shadowView }>
            </div>

            <div style = { styles.alertView }>
              <div style = { styles.alertName }>
                <p style = { styles.costFont }>税费规则</p>
                <button style = { styles.alertDelView } onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView})}>
                  <img style = { styles.alertDelImg } src = 'common/images/ico_goodsDetailDel.png'/>
                </button>
              </div>
              <div style = {styles.alertDetailView}>
                <p style = { styles.alertBlackFont }>税费=购买单价*件数*税率</p>
                <p style = { styles.alertGrayFont }>根据国家规定，本品使用于跨境综合税率11.9%</p>
                <p style = { styles.alertGrayFont }>注：活动商品买满指定金额可享税费补贴，实际结算税费请以提交订单时的应付金额明细为准。</p>
              </div>
            </div>
          </div>
        )
      }else if (this.state.toastState===4) {
        let directPaidData = this.props.GoodsDetailReducer.unpaidGoodsCount.data;
        let goodsId = this.props.GoodsDetailReducer.goodsDetailData.data.goodsId;
        let leftBtnStyle = (directPaidData.amount===1)?styles.directPaidChangeNumBtnMin:styles.directPaidChangeNumBtnFont;
        return (
          <div style = { styles.toastView }>
            <div style = { styles.shadowView }>
            </div>

            <div style = { styles.directPaidView }>
              <div style = { styles.directPaidAmount }>
                <div></div>
                <p style = { styles.directPaidPriceFont }>￥{directPaidData.TotalMoney}</p>
                <button style = { styles.alertDelView } onClick = {()=>this.closeDirectPaid()}>
                  <img style = { styles.alertDelImg } src = 'common/images/ico_goodsDetailDel.png'/>
                </button>
              </div>

              <div style = {styles.directPaidNumView}>
                <p style = { styles.costFont }>数量</p>
                <div style = {styles.directPaidChangeNumView}>
        					<button style = {styles.directPaidChangeNumBtn} onClick = {() => this.directMinusPaid(goodsId)} >
        						<p style = {leftBtnStyle}>-</p>
        					</button>
        					<div style = {styles.directPaidChangeNumBoxDiv}>
        						<p style = {styles.directPaidChangeNumBtnFont}>{directPaidData.amount}</p>
        					</div>
        					<button style = {styles.directPaidChangeNumBtn} onClick = {() => this.directPlusPaid(goodsId)} >
        						<p style = {styles.directPaidChangeNumBtnFont}>+</p>
        					</button>
        				</div>
              </div>

              <div style = { styles.costCell }>
                <p style = { styles.costFont }>商品税费</p>
                <p style = { styles.directPaidTaxMoneyFont }>￥{directPaidData.TaxMoney}</p>
              </div>
              <Link to = {{pathname:'/makeSureOrder',query:{goodsId: goodsId,count: directPaidData.amount,flag: 1}}} >
                <div style = { styles.directPaidBtnView }>
                  <button style = { styles.directPaidBtn }>
                    <p style = { styles.addCartsFont }>确认购买</p>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        )
      }else {
        return <div></div>
      }
    }
    return <div></div>
  }
  //关闭立即购买
  closeDirectPaid() {
    this.setState({isRenderToastView:!this.state.isRenderToastView});
    this.props.GoodsDetailReducer.unpaidGoodsCount = null;
  }
  //是否有库存
  renderJudgeStockBtn(data) {

    if (data.stock>=1) {
      return (
        <div style = { styles.noStock }>
          <button style = { styles.addCartsView } onClick = {() => this.pushItemToCartAction(data.goodsId)}>
            <p style = { styles.addCartsFont }>加入购物车</p>
          </button>
          <button style = { styles.immPaidView } onClick = {() => this.directPlusPaid(data.goodsId)}>
            <p style = { styles.addCartsFont }>立即购买</p>
          </button>
        </div>
      )
    }else {
      return (
        <div style = { styles.noStock }>
          <p style = { styles.addCartsFont }>暂时缺货</p>
        </div>
      )
    }
  }
  //商品轮播图
  renderGoodsBanners(imgs) {
    return imgs.map(function(img,index){
      return(
        <img key = {index} className="swiper-slide" style = { styles.goodsImg } src = {img.url}/>
      )
    })
  }
  //渲染有数据界面
  hasDataRender() {
    let data = this.props.GoodsDetailReducer.goodsDetailData.data;
    if (!data) { return(<div>无数据界面</div>) }

    let pushItemToCart = this.props.GoodsDetailReducer.pushItemToCart.errorcode;
    if (pushItemToCart===0) {
      this.props.GoodsDetailReducer.cartCount.data = parseInt(this.props.GoodsDetailReducer.cartCount.data)+1;
    }
    let cartCount = this.props.GoodsDetailReducer.cartCount.data;//购物车商品总数
    cartCount = cartCount?cartCount:0;
    //{()=>this.setState({isRenderToastView:!this.state.isRenderToastView,toastState:1})}
    if (this.props.GoodsDetailReducer.unpaidGoodsCount) {
      this.state.isRenderToastView = true;
      this.state.toastState = 4;
    }
    return (
      <div style = { styles.viewDirection }>
        <scrollView style = { styles.scrollView }>

          <div style = { styles.goodsImgsView }>
            <div style = { styles.backImgView } >
              <div className="swiper-container" height={175} width={175} loop={true}>
                <div className="swiper-wrapper">
                  {this.renderGoodsBanners(data.imgMain)}
                </div>
                <div className='swiper-pagination'></div>
              </div>
            </div>
            <div style = { styles.contentDetailView }>
              <p style = { styles.contentDetailFont }>图文详情</p>
            </div>
          </div>

          <div style = { styles.goodsInfoView }>
            <div style = { styles.priceView }>
              <p style = { styles.priceFont }>￥{data.goodsSalePrice}</p>
              <p style = { styles.originalPriceFont }>￥{data.goodsMsrp}</p>
              <button style = { styles.collectView }>
                <img style = { styles.collectionImg } src = 'common/images/ico_collection.png'/>
              </button>
            </div>
            <div style = { styles.speLine }/>
            <p style = { styles.goodsTitleFont }>'{data.goodsName}'</p>
            <p style = { styles.goodsBriefly }>{data.goodsBrief}</p>
            <div style = { styles.goodsBrandStorehouse }>
              <img style = { styles.brandImg } src = {data.imgFlag.url}/>
              <p style = { styles.brandFont }>{data.countryNameCh}｜{data.countryNameEn} {data.brandName}</p>
              <p style = { styles.brandFont }>{data.subName}发货</p>
            </div>
          </div>

          <div style = { styles.costView }>
            {this.renderActivityCell(data.activity)}
            {this.renderShippingFeeCell(data.shippingFee)}
            <button
              style = { styles.costCell }
              onClick = {()=>this.setState({isRenderToastView:!this.state.isRenderToastView,toastState:3})}
              >
              <p style = { styles.costFont }>税费：本商品适用税率{(parseFloat(data.goodsRate)*100).toFixed(2)}%</p>
              <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
            </button>
          </div>

          <div style = { styles.dragTopCell }>
            <img style = { styles.dragImg } src = 'common/images/icon_pullTop.png'/>
            <p style = { styles.dragFont }>上拉查看图文详情</p>
          </div>

        </scrollView>
        <div style = { styles.toolBar }>
          <Link to = '/ZtestPage' style = { styles.funView }>
            <img style = { styles.funImg } src = 'common/images/ico_customerServe.png'/>
            <p style = { styles.funFont }>客服</p>
          </Link>
          <Link to = "/CartPage" style = { styles.funView }>
            <img style = { styles.funImg } src = 'common/images/ico_shoppingCart.png'/>
            <p style = { styles.funFont }>购物车</p>
            <div style = { styles.cartNumView }>
              <p style = { styles.cartNumFont }>{cartCount}</p>
            </div>
          </Link>
          {this.renderJudgeStockBtn(data)}
        </div>
        {this.renderToast()}
      </div>
    )
  }

  render () {
    const { GoodsDetailReducer } = this.props;
    var headerParam = {
      isHeaderShow: true,
      headerName: '商品详情',
      isBackShow: true
    };
    var netRequestParam = {
      isRequesting: GoodsDetailReducer.dataRequesting,
      isDataRequestSucc: GoodsDetailReducer.isDataRequestSucc,
      hasData: GoodsDetailReducer.goodsDetailData,
    };
    return (
      <div style = { styles.container }>
        {super.allSceneRender(headerParam, netRequestParam)}
      </div>
    )
  }
}

function mapStateToProps(state){
	const { GoodsDetailReducer } = state;
  return {
		GoodsDetailReducer
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		queryGoodsDetailData,
    queryCartCount,
    queryPushItemToCart,
    queryDirectchange,
    queryCollectgoods
	},dispatch)
}

//将state和dispatch映射在props上
export default connect(mapStateToProps,mapDispatchToProps)(GoodsDetail)
