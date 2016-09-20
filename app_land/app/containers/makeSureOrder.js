import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from './baseComponent';
import { Actions } from 'react-native-router-flux';
import { EditBar, ChooseAddBar, CouponBar, PayWayBar } from '../components/makeSureOrder/editBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/makeSureOrder/makeSureOrder';
import Special from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';
import * as makeSureOrderActions from '../../common/actions/MakeSureOrderActions';

class MakeSureOrder extends BaseComponent {
    constructor(props) {
        super(props);

        this.hasDataRender = this.hasDataRender.bind(this);
        this.contentRender = this.contentRender.bind(this);
        this.orderFooterRender = this.orderFooterRender.bind(this);
        this.orderDetailRender = this.orderDetailRender.bind(this);

        this.addBarRender = this.addBarRender.bind(this);
        this.hasDefaultAddRender = this.hasDefaultAddRender.bind(this);
        this.noDefaultAddRender = this.noDefaultAddRender.bind(this);

        this.whouseListRender = this.whouseListRender.bind(this);
        this.activityListRender = this.activityListRender.bind(this);
        this.goodsListRender = this.goodsListRender.bind(this);

        this.chooseAlipayHandle = this.chooseAlipayHandle.bind(this);
        this.chooseWechatHandle = this.chooseWechatHandle.bind(this);

        this.consigneeonChangeHandle = this.consigneeonChangeHandle.bind(this);
        this.phoneNumberonChangeHandle = this.phoneNumberonChangeHandle.bind(this);
        this.detailAddonChangeHandle = this.detailAddonChangeHandle.bind(this);
        this.idNumberonChangeHandle = this.idNumberonChangeHandle.bind(this);

        this.state = {
            isAlipayChoosed: true,
            isOrderDetailShow: false,
            consignee: '',
            phoneNumber: '',
            detailAddress: '',
            idNumber: ''
        };
    }

    componentWillMount() {
        if ('IMMEDIATELYBUY' === this.props.makeSureOrderState.requestFlag) {} else {
            this.props.makeSureOrderActions.queryShoppingCartOrderData();
        }
    }

    componentWillUnmount() {
        this.props.makeSureOrderActions.initState();
    }

    hasDefaultAddRender() {
        var consignee = '';
        var phoneNumber = '';
        var detailAddress = '';

        this.props.makeSureOrderState.addressData.map((data, index) => {
            if (null === this.props.choosedAddressId) {
                if (2 === data.is_default) {
                    consignee = data.consignee;
                    phoneNumber = data.mobile;
                    detailAddress = data.province + ' ' + data.city + ' ' + data.district + ' ' + data.address;
                }
            } else {
                if (this.props.choosedAddressId === data.address_id) {
                    consignee = data.consignee;
                    phoneNumber = data.mobile;
                    detailAddress = data.province + ' ' + data.city + ' ' + data.district + ' ' + data.address;
                }
            }
        });

        return <Button onPress = {
             Actions.ConfirmOrderAddressModel
        } style={styles.addContentView}>
                <View style={styles.addInfoContentView}>
                    <View style={styles.addNamePhoneContentView}>
                        <Text style={styles.textSt1}>
                            {consignee}
                        </Text>
                        <Text style={styles.textSt1}>
                            {phoneNumber}
                        </Text>
                    </View>

                    <View style={styles.addDetailContentView}>
                        <Text style={styles.textSt2}>
                            {detailAddress}
                        </Text>
                    </View>
                </View>

                <View style={styles.addArrowContentView}>
                    <Image style={styles.imgSt1} source={Special.imageUrls.ic_right_arrow} />
                </View>
            </Button>;
    }

    consigneeonChangeHandle(event) {
        this.setState({
            consignee: event.nativeEvent.text
        });
    }

    phoneNumberonChangeHandle(event) {
        if (event.nativeEvent.text.length > 11) {
            return;
        }
        this.setState({
            phoneNumber: event.nativeEvent.text
        });
    }

    detailAddonChangeHandle(event) {
        this.setState({
            detailAddress: event.nativeEvent.text
        });
    }

    idNumberonChangeHandle(event) {
        if (event.nativeEvent.text.length > 18) {
            return;
        }
        this.setState({
            idNumber: event.nativeEvent.text
        });
    }

    noDefaultAddRender() {
        return <View>
                {EditBar(STRING_RESOURCE.consignee, '', this.consigneeonChangeHandle, this.state.consignee)}
                {EditBar(STRING_RESOURCE.phoneNumber, '', this.phoneNumberonChangeHandle, this.state.phoneNumber)}
                {ChooseAddBar()}
                {EditBar(STRING_RESOURCE.detailAddress, STRING_RESOURCE.moreThanFiveChinese, this.detailAddonChangeHandle, this.state.detailAddress)}
                {EditBar(STRING_RESOURCE.idCard, STRING_RESOURCE.customsNeed, this.idNumberonChangeHandle, this.state.idNumber)}
                <View style={styles.saveAddContentView}>
                    <View style={styles.saveAddButtonView} onClick={() => this.props.makeSureOrderActions.saveDefaultAddress(this.state.consignee, this.state.phoneNumber, this.state.detailAddress, this.state.idNumber)}>
                        <Text style={styles.saveAddButtonText}>
                            {STRING_RESOURCE.saveAndUse}
                        </Text>
                    </View>
                </View>
            </View>;
    }

    addBarRender(hasDefaultAdd) {
        if (hasDefaultAdd) {
            return this.hasDefaultAddRender();
        } else {
            return this.noDefaultAddRender();
        }
    }

    whouseListRender() {
        return this.props.makeSureOrderState.makeSureOrderData.whGoods.map((whouseData, index) => {
            return <View style={styles.whouseContentView} key={index}>
                    <View style={styles.whouseHeaderView}>
                        <Text style={styles.textSt2}>
                            {whouseData.whName}
                        </Text>
                    </View>

                    {this.activityListRender(whouseData.activityGoods)}

                    <View style={styles.whouseFooterView}>
                        <Text style={styles.textSt2}>
                            {STRING_RESOURCE.totalGoodsPayable}{whouseData.totalMoney}
                        </Text>
                    </View>
                </View>;
        });
    }

    activityListRender(activityListData) {
        return activityListData.map((activityData, index) => {
            return <View key={index}>
                    {this.goodsListRender(activityData.goodsList)}
                </View>;
        });
    }

    goodsListRender(goodsListData) {
        return goodsListData.map((goodsData, index) => {
            return <View key={index} style={styles.goodsContentView}>
                    <View style={styles.goodsIntroContentView}>
                        <Image style={styles.goodsImg} source = {
                         {
                            uri: goodsData.imgobj.url
                        }
                    } />
                        <View style={styles.goodsNameContentView}>
                            <Text styles={styles.textSt2}>{goodsData.goodsName}</Text>
                        </View>
                    </View>

                    <View style={styles.goodsPriceAmountContentView}>
                        <View style={styles.goodsPriceAmountView}>
                            <Text style={styles.textSt2}>¥{goodsData.goodsSalePrice}</Text>
                            <Text style={styles.textSt3}>x{goodsData.amount}</Text>
                        </View>
                    </View>
                </View>;
        });
    }

    orderFooterRender() {
        let detailArrow = this.state.isOrderDetailShow ? Special.imageUrls.ic_up_arrow : Special.imageUrls.ic_down_arrow;

        return <View style={styles.orderFooterContentView}>
                <View style={styles.orderFooterMsgView}>
                    <View style={styles.orderFooterPriceView}>
                        <Text style={styles.textSt2}>{STRING_RESOURCE.total}</Text>
                        <Text style={styles.textSt4}>￥697.00</Text>
                    </View>

                    <View onClick={() => this.setState({ isOrderDetailShow: !this.state.isOrderDetailShow })} style={styles.orderFooterDetailView}>
                        <Text style={styles.textSt2}>{STRING_RESOURCE.payableDetail}</Text>
                        <Image style={styles.imgSt2} source = {
                         {
                            uri: detailArrow
                        }
                    } />
                    </View>
                </View>


                <View style={styles.orderFooterPayView}>
                    <Button onPress = {
                     Actions.ZtestPageModel
                }>
                        <Text style={styles.textSt5}>
                            {STRING_RESOURCE.goToPay}
                        </Text>
                    </Button>
                </View>
            </View>;
    }

    chooseAlipayHandle() {
        if (!this.state.isAlipayChoosed) {
            this.setState({
                isAlipayChoosed: !this.state.isAlipayChoosed
            });
        }
    }

    chooseWechatHandle() {
        if (this.state.isAlipayChoosed) {
            this.setState({
                isAlipayChoosed: !this.state.isAlipayChoosed
            });
        }
    }

    contentRender() {
        return <View style={styles.mainContentView}>
                {this.addBarRender(true)}
                {this.whouseListRender()}
                {CouponBar()}
                <Text style={styles.textSt6}>{STRING_RESOURCE.payWay}</Text>
                {PayWayBar(Special.imageUrls.ic_alipay, STRING_RESOURCE.alipayPay, this.state.isAlipayChoosed, this.chooseAlipayHandle)}
                {PayWayBar(Special.imageUrls.ic_wechat, STRING_RESOURCE.wechatPay, !this.state.isAlipayChoosed, this.chooseWechatHandle)}
            </View>;
    }

    orderDetailRender() {
        if (this.state.isOrderDetailShow) {
            return <View>
                    <View style={styles.orderDetailContentView}>
                        <View style={styles.orderDetailLeftView}>
                            <Text style={styles.textSt2}>{STRING_RESOURCE.goodsTotalPrice}</Text>
                            <Text style={styles.textSt7}>{STRING_RESOURCE.activityDiscount}</Text>
                            <Text style={styles.textSt7}>{STRING_RESOURCE.coupon}</Text>
                            <Text style={styles.textSt7}>{STRING_RESOURCE.freight}</Text>
                            <Text style={styles.textSt7}>{STRING_RESOURCE.taxation}</Text>
                            <Text style={styles.textSt7}>{STRING_RESOURCE.total}</Text>
                        </View>

                        <View style={styles.orderDetailRightView}>
                            <Text style={styles.textSt8}>￥199.00</Text>
                            <Text style={styles.textSt9}>-￥20.00</Text>
                            <Text style={styles.textSt9}>￥20.00</Text>
                            <Text style={styles.textSt9}>包邮</Text>
                            <Text style={styles.textSt9}>￥2.23</Text>
                            <Text style={styles.textSt9}>￥697.00</Text>
                        </View>
                    </View>
                    <View style={styles.orderDetailShadow} />
                </View>;
        }
    }

    hasDataRender() {
        return <View>
                {this.contentRender()}
                {this.orderFooterRender()}
                {this.orderDetailRender()}
            </View>;
    }

    render() {
        const { makeSureOrderState } = this.props;

        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.confirmOrder,
            isBackShow: true
        };

        var netRequestParam = {
            isRequesting: makeSureOrderState.dataRequesting,
            isDataRequestSucc: makeSureOrderState.isDataRequestSucc,
            hasData: makeSureOrderState.makeSureOrderData,
            isDialogLoading: makeSureOrderState.loadingData
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}

function mapStateToProps(state) {
    const { makeSureOrderState, addressListState } = state;
    return {
        makeSureOrderState,
        choosedAddressId: addressListState.choosedAddressId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        makeSureOrderActions: bindActionCreators(makeSureOrderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeSureOrder);