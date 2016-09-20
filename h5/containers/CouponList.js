/**
 * Created by zhangheng on 2016/8/3.
 * 个人中心  优惠券列表
 */

import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BaseComponent from './baseComponent';
import * as couponListActions from '../../common/actions/couponListActions';
import { browserHistory, Link } from 'react-router';
import styles from "../styles/addressListStyles";
import TopTabView from "../components/topTabView";
import footStyles from "../styles/couponListStyles";
import STRING_RESOURCE from '../../common/StringResource';
import conCouponStyles from "../styles/confirmOrderCouponStyles";


var listText = ["未使用", "已使用", "已过期"];
var listItemState = [
    {textColor: "#FF6700", bgColor: "#FF6700"},
    {textColor: "#333333", bgColor: "#ffffff"},
    {textColor: "#333333", bgColor: "#ffffff"}
];


 class CouponList extends BaseComponent{


    constructor(props) {
        super(props);
        this.state = {
        	isTrue:false,
            isShow:false,
            couponCode:null,
            couponList:null
        };

        this.submitCouponCodeTouch = this.submitCouponCodeTouch.bind(this);
    }


    //userId 待定
    //请求  status=1(可用) =2(已使用) =3(已过期)
     componentWillMount() {

         var obj = {
             userId:1,
             type:1,
             status:1
         };
         this.props.couponListActions.queryCouponListData(obj);
     }


     //render之前 获取props
     componentWillReceiveProps(nextProps) {

         if (nextProps.couponListState.isDataRequestSucc){
             if (nextProps.couponListState.couponListData.data.length>0){
                 this.setState({
                     couponList:nextProps.couponListState.couponListData.data,
                     isTrue:false
                 });
             }else {
                 //响应成功 没有数据
                 this.setState({
                     couponList:null,
                     isTrue:true
                 });
             }

             //兑换成功
             if (nextProps.couponListState.couponInfoData && this.state.couponCode==null){
                 if (nextProps.couponListState.couponInfoData.errorcode==0){

                     if (this.state.couponList[0].status==1){
                         this.state.couponList.splice(0,0,nextProps.couponListState.couponInfoData.data);
                     }
                     alert("兑换成功");

                 }else {
                     //二次兑换  或 兑换失败   提示语
                     alert(nextProps.couponListState.couponInfoData.message);
                 }
             }
         }else {
             //数据请求失败
             alert("数据请求失败，请稍候重试")
         }
     }


    submitCouponCodeTouch(){
        this.setState({
            isShow:true
        })
    }


    //券码  兌換优惠券
     handleChange(event) {
         this.setState({couponCode: event.target.value});
     }


    //弹框
    submitCouponCode() {
        return(
            <div>
                <div style={footStyles.exchangeBombBoxBg_D}/>

                <div style={footStyles.exchangeBombBox_D}>
                    <p style={footStyles.exchangeCodeTitle}>请输入优惠券码</p>
                    <input type="text"
                           style={footStyles.couponCodeInput_In}
                           value={this.state.couponCode}
                           onChange={this.handleChange.bind(this)}
                    />
                    <div style={footStyles.bottomStyles_D}>
                        <button style={footStyles.buttonStyle_B}
                                onClick={()=> this.onClickButton(2)}>取消</button>
                        <div style={footStyles.columnLin_D}></div>
                        <button style={footStyles.buttonStyle_B}
                                onClick={()=> this.onClickButton(1)}>确定</button>
                    </div>
                </div>
            </div>
        )
    }


    //确定 取消
     onClickButton(type){

         switch (type){
             case 1:
                 //提交券码
                 var obj;
                 if (this.state.couponCode){
                     obj={
                         copuon:this.state.couponCode,
                         mobile:15868130813,
                         // userId:"  待定  "
                     };
                     this.props.couponListActions.exchangeCouponData(obj);
                     this.setState({
                         isShow:false,
                         couponCode:null
                     });
                 }else {
                     alert("请输入优惠券码");
                 }
                 break;
             case 2:
                 //取消 不兑换
                 this.setState({
                     isShow:false,
                     couponCode:null
                 });
                 break;
         }
     }


    //选项栏 选中第几个tan
    chooseItem(index){

        switch (index){
            case 0:
                //可使用
                var obj = {
                    userId:1,
                    type:1,
                    status:1
                };
                this.props.couponListActions.queryCouponListData(obj);
                break;
            case 1:
                //已使用
                var obj = {
                    userId:1,
                    type:1,
                    status:2
                };
                this.props.couponListActions.queryCouponListData(obj);
                break;
            case 2:
                //已过期
                var obj = {
                    userId:1,
                    type:1,
                    status:3
                };
                this.props.couponListActions.queryCouponListData(obj);
                break;
        }
    }

    //格式时间
    formatDate (now){

        var dataTime=new Date(now);
        var year=dataTime.getFullYear();
        var month= dataTime.getMonth()+1;
        var date=dataTime.getDate();
        if (month<10){
            month = "0"+month;
        }
        if (date<10){
            date = "0"+date;
        }
        return year+"."+month+"."+date;
    }


     //导航栏
    tabColumn (){
        return (
            <div style={footStyles.wholeHintStyle}>
                <div style={footStyles.line_D}></div>
                <div style={footStyles.topTab_D}
                >
                    <div style={footStyles.tabLine}></div>
                    <TopTabView
                        listItem={listItemState}
                        list={listText}
                        updateItemChoosen={(index) => this.chooseItem(index)}
                    />
                </div>
            </div>
        )
    }


    //没点击兑换之前
     beforeCode(){
         return(
             <div></div>
         )
     }


    //导航栏 右边按钮
     headerRightRender() {
         return (
             <p style={styles.addressDetailSave_P} onClick={()=> this.submitCouponCodeTouch()}>{STRING_RESOURCE.couponExchange}</p>
         )
     }


     //没有数据
     emptyList(){
         return <div style = {footStyles.contentView}>
             <p>没有数据~</p>
         </div>
     }


     //展示数据
     hasDataRender(){

         var _this=this;
         let isShow = null;
         let emptyView = null;
         if (this.state.isShow){
             isShow = this.submitCouponCode();
         }else {
             isShow = this.beforeCode();
         }

         if (this.state.isTrue){
             emptyView=this.emptyList();
         }
         return (
             <div style={styles.bgColor}>
                 {isShow}
                 {this.tabColumn()}
                 {emptyView}

                 <scrollView style={styles.scrollViewCoupon} >
                     <div style={footStyles.couponList_D}>
                         {
                             this.state.couponList.map(function (couponItem, index) {

                                 var star_time = _this.formatDate(couponItem.star_time*1000);
                                 var end_time = _this.formatDate(couponItem.end_time*1000);

                                 return <div style={footStyles.couponItemRow_D}  key={index}>

                                     <img src="common/images/orderCoupon_used.png" style={footStyles.couponItemOrderImg_I}/>
                                     <div style={footStyles.couponValueStyle_D}>
                                         <p style={footStyles.couponItemRight_P}>
                                             {couponItem.coupon_award}
                                         </p>
                                         <p style={footStyles.couponValue_P}>元</p>
                                     </div>

                                     <div style={footStyles.couponItemLeft_D}>
                                         <p style={footStyles.couponItemFirstText_D}>满{couponItem.coupon_condition}元使用</p>
                                         <p style={footStyles.couponItemSecond_D}>适用范围：{couponItem.good_type}</p>
                                         <div style={footStyles.couponItemThird_D}>
                                             <p style={footStyles.couponItemSecond_D}>{STRING_RESOURCE.couponValueTime}</p>
                                             <p style={footStyles.couponItemSecond_D}>{star_time}-</p>
                                             <p style={footStyles.couponItemSecond_D}>{end_time}</p>
                                         </div>
                                     </div>
                                 </div>
                             })
                         }
                     </div>
                 </scrollView>
             </div>
         )
     }


    render() {

        const {couponListState, couponListActions} = this.props;

        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.couponTitle,
            isBackShow: true
        };

        var netRequestParam = {
            isRequesting: couponListState.dataRequesting,
            isDataRequestSucc: couponListState.isDataRequestSucc,
            hasData: couponListState.couponListData
        };
        return super.allSceneRender(headerParam, netRequestParam);
    }
}


function mapStateToPropsTe(state) {
    const {couponListState} = state;
    return {
        couponListState
    }
}

function mapDispatchToPropsTe(dispatch) {
    return {
        couponListActions: bindActionCreators(couponListActions, dispatch)
    }
}
export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(CouponList);