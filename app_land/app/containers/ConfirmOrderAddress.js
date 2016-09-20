/**
 * Created by zhangheng on 2016/8/19.
 * 确认订单界面 选择收获地址界面
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import * as addressListActions from '../../common/actions/addressListActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import styles from "../styles/addressListStyles";
import confirmStyles from "../styles/confirmOrderAddressStyles";
import STRING_RESOURCE from '../../common/StringResource';

class ConfirmOrderAddress extends BaseComponent {
    constructor(props) {
        super(props);
        this.hasDataRender = this.hasDataRender.bind(this);
        this.addressItemRender = this.addressItemRender.bind(this);
        this.defaultShowRender = this.defaultShowRender.bind(this);
        this.chooseShowRender = this.chooseShowRender.bind(this);
    }

    componentWillMount() {
        this.props.addressListActions.queryAddressListData();
    }

    defaultShowRender(isShow) {
        if (isShow) {
            return <View>
                    <Text style={confirmStyles.detailAddText}>[默认]</Text>
                </View>;
        }
    }

    chooseShowRender(isChoose) {
        if (isChoose) {
            return <View>
                    <Image style={confirmStyles.addressSelectImg} source = {
                     {
                        uri: failure
                    }
                } />
                </View>;
        }
    }

    addressItemRender() {
        return this.props.addressListState.addressListData.map((addressItem, index) => {
            var isShowDefault = 2 === addressItem.is_default ? true : false;

            var isChoose = addressItem.address_id === this.props.addressListState.choosedAddressId ? true : false;

            return <View key={index}>
                    <View style={confirmStyles.itemAddress_D} onClick={() => this.props.addressListActions.addressItemClick(addressItem.address_id)}>

                        <View style={confirmStyles.checkboxAddress_D}>
                            {this.chooseShowRender(isChoose)}
                        </View>

                        <View style={confirmStyles.itemAddressTwo_D}>
                            <View style={confirmStyles.itemAddressTwoOne_D}>
                                <Text style={confirmStyles.itemAddressTwoName_P}>
                                    {addressItem.consignee}
                                </Text>
                                <Text style={confirmStyles.itemAddressTwoName_P}>
                                    {addressItem.mobile}
                                </Text>
                            </View>
                            <View style={confirmStyles.itemDetailAddressView}>
                                {this.defaultShowRender(isShowDefault)}

                                <Text style={confirmStyles.itemAddressTwoTwo_D}>
                                    {addressItem.province} {addressItem.city} {addressItem.district} {addressItem.address}
                                </Text>
                            </View>
                        </View>

                        <View style={confirmStyles.verticalLine_D}></View>

                        <View style={confirmStyles.itemAddressThird_D}>
                            <Button onPress = {
                             () => Actions.ConfirmOrderEditorAddressModel({
                                addressId: addressItem.address_id
                            })
                        }>
                                <Image source = {
                                 require("../../common/images/address_item_edit.png")
                            } style={confirmStyles.editorImg_I} />
                            </Button>
                        </View>
                    </View>
                    <View style={styles.lineSty_D}></View>
                </View>;
        });
    }

    //展示数据
    hasDataRender() {
        return <View style={styles.bgColor}>

                <View style={confirmStyles.orderLine_D}></View>
                <View style={confirmStyles.tabLine}></View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.listSty_D}>
                        {this.addressItemRender()}
                    </View>
                </ScrollView>

                {/*to={{ pathname: '/user/bob', query: { showAge: true } }}*/}
                <Button onPress = {
                 Actions.ConfirmOrderEditorAddressModel
            }>
                    <Button style={styles.button_B}>
                        {STRING_RESOURCE.addAddressTitle}
                    </Button>
                </Button>
            </View>;
    }

    render() {
        const { addressListState, addressListActions } = this.props;

        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.confirmAddressTitle,
            isBackShow: true
        };

        var netRequestParam = {
            isRequesting: addressListState.dataRequesting,
            isDataRequestSucc: addressListState.isDataRequestSucc,
            hasData: addressListState.addressListData
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}

function mapStateToPropsTe(state) {
    const { addressListState } = state;
    return {
        addressListState
    };
}

function mapDispatchToPropsTe(dispatch) {
    return {
        addressListActions: bindActionCreators(addressListActions, dispatch)
    };
}

export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(ConfirmOrderAddress);