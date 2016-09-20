/**
 * Created by zhangheng on 2016/8/19.
 * 确认订单界面 选择收获地址界面
 */

import React from "react";
import { browserHistory,Link } from 'react-router';
import * as addressListActions from '../../common/actions/addressListActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
            return (
                <div>
                    <p style = {confirmStyles.detailAddText}>[默认]</p>
                </div>
            );
        }
    }

    chooseShowRender(isChoose) {
        if (isChoose) {
            return (
                <div>
                    <img
                        style = {confirmStyles.addressSelectImg}
                        src={"common/images/icon_select.png"}
                    />
                </div>
            );
        }
    }


    //单选
    selectItem(){



    }



    addressItemRender() {
        return  this.props.addressListState.addressListData.data.map((addressItem,index) => {
            var isShowDefault = 2 == addressItem.is_default ? true : false;

            var isChoose = addressItem.address_id == this.props.addressListState.choosedAddressId ? true : false;

            return (
                <div key={index}>
                    <div style={confirmStyles.itemAddress_D}>

                        <div style={confirmStyles.checkboxAddress_D}>
                            {this.chooseShowRender(isChoose)}
                        </div>

                        <div
                            style={confirmStyles.itemAddressTwo_D}
                            onClick = {() => this.props.addressListActions.addressItemClick(addressItem.address_id)}
                        >
                            <div style={confirmStyles.itemAddressTwoOne_D}>
                                <p style={confirmStyles.itemAddressTwoName_P}>
                                    {addressItem.consignee}
                                </p>
                                <p style={confirmStyles.itemAddressTwoName_P}>
                                    {addressItem.mobile}
                                </p>
                            </div>
                            <div style={confirmStyles.itemDetailAddressView}>

                                {this.defaultShowRender(isShowDefault)}
                                <p style={confirmStyles.itemAddressTwoTwo_D}>
                                    {addressItem.province} {addressItem.city} {addressItem.district} {addressItem.address}
                                </p>
                            </div>
                        </div>

                        <div style={confirmStyles.verticalLine_D}></div>

                        <div style={confirmStyles.itemAddressThird_D}>
                            <Link  to = {{ pathname:"/ConfirmOrderEditorAddress",query:{addressId: addressItem.address_id} }} >
                                <img
                                    src="common/images/address_item_edit.png"
                                    style={confirmStyles.editorImg_I}
                                />
                            </Link>
                        </div>
                    </div>
                    <div style={styles.lineSty_D}></div>
                </div>
            );
        });
    }

    //展示数据
    hasDataRender() {
        return (
            <div style={styles.bgColor}>

                <div style={confirmStyles.orderLine_D}></div>
                <div style={confirmStyles.tabLine}></div>
                <scrollView style={styles.scrollView}>
                    <div style={styles.listSty_D}>
                        {this.addressItemRender()}
                    </div>
                </scrollView>

                {/*to={{ pathname: '/user/bob', query: { showAge: true } }}*/}
                <Link to='/ConfirmOrderEditorAddress'>
                    <button style={styles.button_B}>
                        {STRING_RESOURCE.addAddressTitle}
                    </button>
                </Link>
            </div>
        );
    }

    render() {
        const {addressListState, addressListActions} = this.props;

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
    const {addressListState} = state;
    return {
        addressListState
    }
}

function mapDispatchToPropsTe(dispatch) {
    return {
        addressListActions: bindActionCreators(addressListActions, dispatch)
    }
}

export default connect(mapStateToPropsTe, mapDispatchToPropsTe)(ConfirmOrderAddress);
