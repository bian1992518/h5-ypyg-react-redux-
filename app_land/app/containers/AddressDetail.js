/**
 * Created by zhangheng on 2016/8/2.
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import * as addressDetailActions from '../../common/actions/addressDetailActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import AddressRow from "../components/addressRowView";
import footStyles from "../styles/couponListStyles";
import itemStyles from "../styles/addressItemStyles";
import styles from "../styles/addressListStyles";
import { imageUrls } from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';

class AddressDetail extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            realName: "sdfsd",
            phone: "",
            proCityCounty: "",
            detailInfo: "",
            idCard: "",
            isDefault: false,

            addressType: "",
            addressId: ""
        };
    }

    componentWillMount() {

        let addressId = this.props.addressId;
        let addressDefaultId = this.props.is_default;
        if (addressId) {
            var obj = {
                id: addressId
            };

            this.setState({
                addressType: 1,
                addressId: addressId
            });

            //获取地址详情
            this.props.addressDetailActions.queryAddressDetailData(obj);
        } else {
            console.log("没有传参过来");
        }
    }

    //render之前 获取props
    componentWillReceiveProps(nextProps) {
        // console.log("nextProps is:", nextProps);

        if (this.state.addressType == 1) {
            var addressItem = nextProps.addressDetailState.addressDetailData.data;
            this.setState({
                realName: addressItem.consignee,
                phone: addressItem.mobile,
                proCityCounty: addressItem.province + addressItem.city + addressItem.district,
                detailInfo: addressItem.address,
                idCard: addressItem.idcard,
                isDefault: addressItem.is_default == 2
            });
        }
    }

    handleChange(index, event) {

        switch (index) {
            case "1":
                this.setState({ realName: event.nativeEvent.text });
                break;
            case "2":
                this.setState({ phone: event.nativeEvent.text });
                break;
            case "3":
                this.setState({ proCityCounty: event.nativeEvent.text });
                break;
            case "4":
                this.setState({ detailInfo: event.nativeEvent.text });
                break;
            case "5":
                this.setState({ idCard: event.nativeEvent.text });
                break;
        }
    }

    //是否设为默认地址
    _isDefaultAddress() {

        let isFalse;
        if (this.state.isDefault) {
            isFalse = false;
        } else {
            isFalse = true;
        }
        this.setState({
            isDefault: isFalse
        });
    }

    //提交信息  添加收货地址
    submitPersonInfo() {

        var submitInfo = {
            areaId: "区域id  Integer  ？？？ ",
            address: this.state.detailInfo,
            name: this.state.realName,
            idCard: this.state.idCard,
            mobile: this.state.phone,
            isDefault: this.state.isDefault ? 2 : 1,
            id: this.state.addressId
        };

        if (this.state.addressType == 1) {
            //修改地址
            this.props.addressDetailActions.changeAddressDetailData(submitInfo);
        } else {
            //添加地址
            this.props.addressDetailActions.addAddressDetailData(submitInfo);
        }
    }

    //title
    titleView() {
        return <View style={itemStyles.addressDetailColumn_D}>
                <Image source = {
                 require("../../common/images/icon_left_arrow.png")
            } style={itemStyles.back_I} onClick={Actions.pop} />
                <Text style={itemStyles.textFont_P}>{STRING_RESOURCE.addressDetailTitle}</Text>
                <Text style={styles.fillSpan_P}> </Text>
            </View>;
    }

    //展示数据
    hasDataRender() {
        return <View style={itemStyles.addressDetail_D}>

                <View style={itemStyles.addressDetailLine_D}></View>

                <View style={footStyles.tabLine}></View>
                <AddressRow title={STRING_RESOURCE.consignee} value={this.state.realName} onChange={this.handleChange.bind(this, "1")} />

                <AddressRow title={STRING_RESOURCE.phoneNumber} value={this.state.phone} onChange={this.handleChange.bind(this, "2")} />

                <View style={itemStyles.addressDetailItem_D}>
                    <Image source = {
                     require("../../common/images/star_mark.png")
                } style={itemStyles.addressDetailCheck_I} />
                    <Text style={itemStyles.addressDetailDefault_P}>{STRING_RESOURCE.localArea}</Text>
                    <TextInput style={itemStyles.addressDetailAreaInput_In} value={this.state.proCityCounty} onChange={this.handleChange.bind(this, "3")} />
                    <Text style={itemStyles.areaProCityCounty_P}>请选择</Text>
                    <Image source = {
                     require("../../common/images/icon_right_arrow.png")
                } style={itemStyles.areaProCityCountyImg_I} />
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>

                <View style={itemStyles.addressDetailInfo_D}>
                    <Image source = {
                     require("../../common/images/star_mark.png")
                } style={itemStyles.addressDetailCheckNew_I} />
                    <Text style={itemStyles.addressDetailDefault_P}>{STRING_RESOURCE.detailAddress}</Text>
                    <textarea rows="2" placeholder={STRING_RESOURCE.moreThanFiveChinese} style={itemStyles.addressDetailLongInput_In} value={this.state.detailInfo} onChange={this.handleChange.bind(this, "4")} numberOfLines={2} multiline={true} />
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>

                <View style={itemStyles.addressDetailItem_D}>
                    <Text style={itemStyles.addressDetailDefault_P}>{STRING_RESOURCE.idCard}</Text>
                    <TextInput placeholder={STRING_RESOURCE.customsNeed} style={itemStyles.addressDetailIdCardInput_In} value={this.state.idCard} onChange={this.handleChange.bind(this, "5")} keyboardType="numeric" />
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>

                <View style={footStyles.tabLine}></View>
                <View style={itemStyles.addressDetailDefault_D}>
                    <Text style={itemStyles.addressDetailDefault_P}>{STRING_RESOURCE.setDetailAddress}</Text>
                    <Image source={this.state.isDefault ? imageUrls.addressDetail : imageUrls.addressDetailDown} style={itemStyles.addressDetailDeta_I} onClick={() => this._isDefaultAddress()} />
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>

                <Button style={itemStyles.saveAddress_B} onPress={() => this.submitPersonInfo()}>
                    {STRING_RESOURCE.saveAddress}
                </Button>
            </View>;
    }

    render() {

        const { addressDetailState, addressDetailActions } = this.props;
        //请求
        if (this.state.addressType == 1) {
            var netRequestParam = {
                isRequesting: addressDetailState.dataRequesting,
                isDataRequestSucc: addressDetailState.isDataRequestSucc,
                hasData: addressDetailState.addressDetailData
            };

            var headerParam = {
                isHeaderShow: true,
                headerName: STRING_RESOURCE.addressDetailTitle,
                isBackShow: true
            };
            return super.allSceneRender(headerParam, netRequestParam);
        } else {
            return <View style={itemStyles.addressDetailTitle_D}>
               {this.titleView()}
               {this.hasDataRender()}
               </View>;
        }
    }
}

function mapStateToPropsTe(state) {
    const { addressDetailState } = state;
    return {
        addressDetailState
    };
}

function mapDispatchToPropsTe(dispatch) {
    return {
        addressDetailActions: bindActionCreators(addressDetailActions, dispatch)
    };
}
export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(AddressDetail);