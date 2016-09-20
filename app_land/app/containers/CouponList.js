/**
 * Created by zhangheng on 2016/8/3.
 * 个人中心  优惠券列表
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import * as couponListActions from '../../common/actions/couponListActions';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/addressListStyles";
import TopTabView from "../components/topTabView";
import footStyles from "../styles/couponListStyles";
import STRING_RESOURCE from '../../common/StringResource';
import conCouponStyles from "../styles/confirmOrderCouponStyles";

var listText = ["未使用", "已使用", "已过期"];
var listItemState = [{ textColor: "#FF6700", bgColor: "#FF6700" }, { textColor: "#333333", bgColor: "#ffffff" }, { textColor: "#333333", bgColor: "#ffffff" }];

var couponList = [{
    id: 0,
    describe: "注册满20元减10元",
    condition: "满20元使用",
    beginTime: "2016.04.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}, {
    id: 1,
    describe: "注册满10元减5元",
    condition: "满10元使用",
    beginTime: "2016.05.09",
    endTime: "2016.10.09",
    valueMoney: "5"
}, {
    id: 2,
    describe: "注册满30元减10元",
    condition: "满30元使用",
    beginTime: "2015.10.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}, {
    id: 3,
    describe: "注册满100元减20元",
    condition: "满100元使用",
    beginTime: "2016.01.09",
    endTime: "2016.07.09",
    valueMoney: "20"
}, {
    id: 0,
    describe: "注册满20元减10元",
    condition: "满20元使用",
    beginTime: "2016.04.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}, {
    id: 1,
    describe: "注册满10元减5元",
    condition: "满10元使用",
    beginTime: "2016.05.09",
    endTime: "2016.10.09",
    valueMoney: "5"
}, {
    id: 2,
    describe: "注册满30元减10元",
    condition: "满30元使用",
    beginTime: "2015.10.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}, {
    id: 3,
    describe: "注册满100元减20元",
    condition: "满100元使用",
    beginTime: "2016.01.09",
    endTime: "2016.07.09",
    valueMoney: "20"
}];

class CouponList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            isTrue: false,
            isShow: false,
            couponCode: null
        };

        this.submitCouponCodeTouch = this.submitCouponCodeTouch.bind(this);
    }

    //请求
    componentWillMount() {
        this.props.couponListActions.queryCouponListData();
    }

    //render之前 获取props
    componentWillReceiveProps(nextProps) {
        // console.log("nextProps is:", nextProps);
        if (nextProps.couponListState.isDataRequestSucc) {
            if (nextProps.couponListState.couponListData.data) {
                this.setState({
                    // dataSource:nextProps.couponListState.couponListData.data,
                });
            } else {
                    //响应成功 没有地址
                }
        } else {
                //数据请求失败
            }
    }

    submitCouponCodeTouch() {
        this.setState({
            isShow: true
        });
    }

    //券码
    handleChange(event) {

        this.setState({ couponCode: event.nativeEvent.text });
    }

    //弹框
    submitCouponCode() {
        // alert("新序列：" + TopTabView.prototype.indexx);
        return <View>
                <View style={footStyles.exchangeBombBoxBg_D} />

                <View style={footStyles.exchangeBombBox_D}>
                    <Text style={footStyles.exchangeCodeTitle}>请输入优惠券码</Text>
                    <TextInput style={footStyles.couponCodeInput_In} value={this.state.couponCode} onChange={this.handleChange.bind(this)} />
                    <View style={footStyles.bottomStyles_D}>
                        <Button style={footStyles.buttonStyle_B}>取消</Button>
                        <View style={footStyles.columnLin_D}></View>
                        <Button style={footStyles.buttonStyle_B}>确定</Button>
                    </View>
                </View>
            </View>;
    }

    //选项栏 选中第几个tan
    chooseItem(index) {}
    // console.log("got item : ", index);


    //导航栏
    tabColumn() {
        return <View style={footStyles.wholeHintStyle}>
                <View style={footStyles.line_D}></View>
                <View style={footStyles.topTab_D}>
                    <View style={footStyles.tabLine}></View>
                    <TopTabView listItem={listItemState} list={listText} updateItemChoosen={index => this.chooseItem(index)} />
                </View>
            </View>;
    }

    //m没点击兑换之前
    beforeCode() {
        return <View></View>;
    }

    //导航栏 右边按钮
    headerRightRender() {
        return <Text style={styles.addressDetailSave_P} onClick={() => this.submitCouponCodeTouch()}>{STRING_RESOURCE.couponExchange}</Text>;
    }

    //展示数据
    hasDataRender() {

        let isShow = null;
        if (this.state.isShow) {
            isShow = this.submitCouponCode();
        } else {
            isShow = this.beforeCode();
        }
        return <View style={styles.bgColor}>
                 {isShow}
                 {this.tabColumn()}

                 <ScrollView style={styles.scrollView}>
                     <View style={footStyles.couponList_D}>
                         {couponList.map(function (couponItem, index) {

                        return <View style={footStyles.couponItemRow_D} key={index}>

                                     <Image source = {
                                 require("../../common/images/orderCoupon_used.png")
                            } style={footStyles.couponItemOrderImg_I} />
                                     <View style={footStyles.couponValueStyle_D}>
                                         <Text style={footStyles.couponItemRight_P}>
                                             {couponItem.valueMoney}
                                         </Text>
                                         <Text style={footStyles.couponValue_P}>元</Text>
                                     </View>

                                     <View style={footStyles.couponItemLeft_D}>
                                         <Text style={footStyles.couponItemFirstText_D}>{couponItem.describe}</Text>
                                         <Text style={footStyles.couponItemSecond_D}>{couponItem.condition}</Text>
                                         <View style={footStyles.couponItemThird_D}>
                                             <Text style={footStyles.couponItemSecond_D}>{STRING_RESOURCE.couponValueTime}</Text>
                                             <Text style={footStyles.couponItemSecond_D}>{couponItem.beginTime}-</Text>
                                             <Text style={footStyles.couponItemSecond_D}>{couponItem.endTime}</Text>
                                         </View>
                                     </View>
                                 </View>;
                    })}
                     </View>
                 </ScrollView>
             </View>;
    }

    render() {
        const { couponListState, couponListActions } = this.props;

        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.couponTitle,
            isBackShow: true
        };

        var netRequestParam = {
            isRequesting: false, //couponListState.dataRequesting,
            isDataRequestSucc: true, //couponListState.isDataRequestSucc,
            hasData: couponList //couponListState.couponListData
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}

function mapStateToPropsTe(state) {
    const { couponListState } = state;
    return {
        couponListState
    };
}

function mapDispatchToPropsTe(dispatch) {
    return {
        couponListActions: bindActionCreators(couponListActions, dispatch)
    };
}
export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(CouponList);