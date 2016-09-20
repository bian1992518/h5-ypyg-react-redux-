/**
 * Created by zhangheng on 2016/8/20.
 * 确认订单界面 选择优惠券
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import * as couponExchangeActions from '../../common/actions/couponExchangeActions';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/addressListStyles";
import footStyles from "../styles/couponListStyles";
import confirmStyles from "../styles/confirmOrderAddressStyles";
import conCouponStyles from "../styles/confirmOrderCouponStyles";
import STRING_RESOURCE from '../../common/StringResource';

var couponList = [{
    id: 0,
    describe: "注册满20元减10元",
    condition: "满20元使用",
    conditionProduct: "指定商品使用",
    beginTime: "2016.04.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}, {
    id: 1,
    describe: "注册满10元减5元",
    condition: "满10元使用",
    conditionProduct: "指定商品使用",
    beginTime: "2016.05.09",
    endTime: "2016.10.09",
    valueMoney: "5"
}, {
    id: 2,
    describe: "注册满30元减10元",
    condition: "满30元使用",
    conditionProduct: "指定商品使用",
    beginTime: "2015.10.09",
    endTime: "2016.08.09",
    valueMoney: "10"
}];

class ConfirmOrderCoupon extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            couponCode: ""
        };
    }

    //网络请求
    componentWillMount() {}

    //render之前 获取props
    componentWillReceiveProps(nextProps) {}

    handleChange(event) {
        this.setState({ couponCode: event.nativeEvent.text });
    }

    //展示数据
    hasDataRender() {

        return <View style={styles.bgColor}>

                <View style={conCouponStyles.line_D}></View>
                <View style={conCouponStyles.tabLine}></View>


                <View style={conCouponStyles.exchangeCoupon_D}>
                    {/*<p style={conCouponStyles.exchangeCouponText_P}>兑换优惠券</p>*/}
                    <TextInput placeholder={STRING_RESOURCE.couponCodeHint} style={conCouponStyles.exchangeCouponInput_I} value={this.state.couponCode} onChange={this.handleChange.bind(this)} />
                    <Text style={conCouponStyles.exchangeCou_P} onClick={() => this.submitPersonInfo()}>{STRING_RESOURCE.couponExchange}</Text>
                </View>


                <ScrollView style={styles.scrollView}>
                    <View style={conCouponStyles.couponList_D}>
                        {couponList.map(function (couponItem, index) {

                        return <View style={conCouponStyles.couponItemOrderRow_D} key={index}>

                                    <Image source = {
                                 require("../../common/images/orderCoupon_used.png")
                            } style={conCouponStyles.couponItemOrderImg_I} />

                                    <View style={conCouponStyles.couponValueStyleNew_D}>
                                        <View style={conCouponStyles.couponValueStyle_D}>
                                            <Text style={footStyles.couponItemRight_P}>
                                                {couponItem.valueMoney}
                                            </Text>
                                            <Text style={footStyles.couponValue_P}>元</Text>
                                        </View>
                                        <Text style={footStyles.couponValueNew_P}>{couponItem.condition}</Text>
                                    </View>


                                    <View style={conCouponStyles.couponItemOrder_D}>
                                        <Text style={footStyles.couponItemFirstText_D}>{couponItem.describe}</Text>
                                        <Text style={footStyles.couponItemSecond_D}>{couponItem.conditionProduct}</Text>
                                        <View style={footStyles.couponItemThird_D}>
                                            <Text style={footStyles.couponItemSecond_D}>{STRING_RESOURCE.couponValueTime}</Text>
                                            <Text style={footStyles.couponItemSecond_D}>{couponItem.beginTime}-</Text>
                                            <Text style={footStyles.couponItemSecond_D}>{couponItem.endTime}</Text>
                                        </View>
                                    </View>

                                    <View style={conCouponStyles.checkStyle_D}>
                                        <Image source = {
                                     require("../../common/images/icon_select.png")
                                } style={conCouponStyles.checkImg_I} />
                                    </View>
                                </View>;
                    })}
                    </View>
                    <Text style={conCouponStyles.noUsedCoupon_P}>有钱任性，不使用优惠劵</Text>
                </ScrollView>
            </View>;
    }

    render() {

        const { couponInfoState, couponExchangeActions } = this.props;

        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.couponListTitle,
            isBackShow: true
        };

        var netRequestParam = {
            isRequesting: false, //couponInfoState.dataRequesting
            isDataRequestSucc: true, //couponInfoState.isDataRequestSucc
            hasData: couponList //couponInfoState.couponInfoData
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}

function mapStateToPropsTe(state) {
    const { couponInfoState } = state;
    return {
        couponInfoState
    };
}

function mapDispatchToPropsTe(dispatch) {
    return {
        couponExchangeActions: bindActionCreators(couponExchangeActions, dispatch)
    };
}
export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(ConfirmOrderCoupon);