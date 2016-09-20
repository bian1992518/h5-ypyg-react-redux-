/**
 * Created by zhangheng on 2016/8/2.
 * 地址列表
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import * as addressListActions from '../../common/actions/addressListActions';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/addressListStyles";
import footStyles from "../styles/couponListStyles";
import { imageUrls } from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';

var names = [{ address_id: 1, consignee: "小明1", address: "中山路256号 桃子街道1栋", mobile: "123456789", is_default: 1 }, { address_id: 2, consignee: "小明2", address: "中山路256号 桃子街道2栋", mobile: "123456789", is_default: 2 }, { address_id: 3, consignee: "小明3", address: "中山路256号 桃子街道3栋", mobile: "123456789", is_default: 2 }, { address_id: 4, consignee: "小明4", address: "中山路256号 桃子街道4栋", mobile: "123456789", is_default: 2 }, { address_id: 5, consignee: "小明5", address: "中山路256号 桃子街道5栋", mobile: "123456789", is_default: 2 }, { address_id: 6, consignee: "小明6", address: "中山路256号 桃子街道6栋", mobile: "123456789", is_default: 2 }, { address_id: 7, consignee: "小明7", address: "中山路256号 桃子街道7栋", mobile: "123456789", is_default: 2 }, { address_id: 8, consignee: "小明8", address: "中山路256号 桃子街道8栋", mobile: "123456789", is_default: 2 }, { address_id: 9, consignee: "小明9", address: "中山路256号 桃子街道9栋", mobile: "123456789", is_default: 2 }, { address_id: 10, consignee: "小明10", address: "中山路256号 桃子街道10栋", mobile: "123456789", is_default: 2 }];

class AddressList extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null
        };
    }

    componentWillMount() {
        this.props.addressListActions.queryAddressListData();
    }

    //render之前 获取props
    componentWillReceiveProps(nextProps) {
        // console.log("nextProps is:", nextProps);
        if (nextProps.addressListState.isDataRequestSucc) {
            if (nextProps.addressListState.addressListData.data) {
                this.setState({
                    dataSource: nextProps.addressListState.addressListData.data
                });
            } else {
                //响应成功 没有地址
            }
        } else {
                //数据请求失败
            }
        if (this.props.addressListState.addressListDefault) {
            alert("设置成功");
        }
    }

    //地址 1 删除 2 设置默认 3 取消默认 4 编辑
    selectItem(rowID, type) {

        var addressList = this.state.dataSource;
        switch (type) {
            case 1:
                addressList.remove(rowID);
                var obj = {
                    id: addressList[rowID].address_id,
                    type: 1
                };
                this.props.addressListActions.querySetDefaultAddress(obj);
                break;
            case 2:
                if (!(addressList[rowID].is_default == 2)) {
                    for (var j = 0; j < addressList.length; j++) {
                        if (addressList[j].is_default == 2) {
                            addressList[j].is_default = 1;
                            break;
                        }
                    }
                    addressList[rowID].is_default = 2;

                    var obj = {
                        id: addressList[rowID].address_id,
                        type: 2
                    };
                    this.props.addressListActions.querySetDefaultAddress(obj);
                }
                break;
            case 3:
                break;
            case 4:
                // return(
                //     <Link  to ={{ pathname:"/AddressDetail",query:{addressItem: addressList[rowID]} }} >
                //     </Link>
                // );
                break;
        }
        this.setState({
            loaded: true,
            dataSource: addressList
        });
    }

    //展示数据
    hasDataRender() {

        var _this = this;
        return <View style={styles.bgColor}>
                <View style={styles.line_D}></View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.listSty_D}>
                        {this.state.dataSource.map(function (item, index) {

                        var checkStyle = item.is_default == 2 ? styles.defaultTextNext_P : styles.defaultText_P;
                        var checkText = item.is_default == 2 ? "默认地址" : "设为默认";

                        return <View key={index}>
                                    <View style={styles.defaultSty_D}>

                                        <View style={footStyles.tabLine}></View>
                                        <View style={styles.nameText_D}>
                                            <Text style={styles.nameText_P}>{item.consignee}</Text>
                                            {/*<p style={styles.cardProve_P}>未认证</p>*/}
                                            <Text style={styles.phoneText_P}>{item.mobile}</Text>
                                        </View>
                                        <Text style={styles.addressDetail_P}>{item.address}</Text>

                                        <View style={styles.newLine_D}></View>
                                        <View style={styles.addressDetail_D}>
                                            <Image style={styles.selectImg} source={item.is_default == 2 ? imageUrls.checkBox : imageUrls.checkBoxDown} onClick={() => _this.selectItem(index, 2)} />
                                            <Text style={checkStyle}>{checkText}</Text>

                                            <Button onPress = {
                                         () => Actions.AddressDetailModel({
                                            addressId: item.address_id
                                        })
                                    }>
                                                <View style={styles.setDefaultAddress_D}>
                                                    <Image source = {
                                                 require("../../common/images/address_item_edit.png")
                                            } style={styles.itemDustbin_I} />
                                                    <Text style={styles.changeText_P}>{STRING_RESOURCE.edit}</Text>
                                                </View>
                                            </Button>

                                            <View style={styles.setDefaultAddress_D} onClick={() => _this.selectItem(index, 1)}>
                                                <Image source = {
                                             require("../../common/images/dustbin_icon.png")
                                        } style={styles.itemEdit_I} />
                                                <Text style={styles.changeText_P}>{STRING_RESOURCE.delete}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.lineSty_D}></View>
                                </View>;
                    })}
                    </View>
                </ScrollView>

                <Button onPress = {
                 Actions.AddressDetailModel
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
            headerName: STRING_RESOURCE.addressListTitle,
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
export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(AddressList);