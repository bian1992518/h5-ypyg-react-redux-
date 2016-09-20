/*
 * Name: PaymentSuccess
 * Creator: ZhangZhao
 * Create Time: 2016-09-12
 * Instruction: 支付成功后页面
 */

import React from 'react';
import BaseComponent from './baseComponent';
import styles from '../styles/PaymentSuccess';
import StringImgSrc from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';
import {Link} from 'react-router';

export default class PaymentSuccess extends BaseComponent {
    constructor(props) {
        super(props);
    }

    hasDataRender() {
        return (
            <div style = {styles.contentView}>
                <img
                    style = {styles.imageStyle1}
                    src = {StringImgSrc.imageUrls.ic_payment_success}
                />
                <p style = {styles.textStyle1}>
                    {STRING_RESOURCE.paymentSuccess}
                </p>
                <div style = {styles.barView1}>
                    <p style = {styles.textStyle2}>{STRING_RESOURCE.amountPaid}</p>
                    <p style = {styles.textStyle3}>¥ xxx.xx</p>
                </div>
                <div style = {styles.barView2}>
                    <p style = {styles.textStyle2}>{STRING_RESOURCE.payWayDot}</p>
                    <p style = {styles.textStyle3}>支付宝支付</p>
                </div>

                <div style = {styles.barView1}>
                    <Link to = {'/UserOrder'}>
                        <button style = {styles.buttonStyle}>
                            {STRING_RESOURCE.checkOrders}
                        </button>
                    </Link>

                    <div style = {{width: '0.6rem'}}/>

                    <Link to = {'/'}>
                        <button style = {styles.buttonStyle}>
                            {STRING_RESOURCE.backToHome}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.paymentSuccess,
            isBackShow: false
        };

        var netRequestParam = {
            isRequesting: false,
            isDataRequestSucc: true,
            hasData: true,
            isDialogLoading: false
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}
