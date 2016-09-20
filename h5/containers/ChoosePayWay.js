/*
 * Name: ChoosePayWay
 * Creator: ZhangZhao
 * Create Time: 2016-09-12
 * Instruction: 支付失败后重新选择支付方式界面
 */
import React from 'react';
import BaseComponent from './baseComponent';
import styles from '../styles/ChoosePayWay';
import {Link} from 'react-router';
import StringImgSrc from '../special/stringImage';
import {PayWayBar} from '../components/makeSureOrder/editBar';
import STRING_RESOURCE from '../../common/StringResource';
import {standardDialog} from '../components/Dialog';

export default class ChoosePayWay extends BaseComponent {
    constructor(props) {
        super(props);

        this.chooseAlipayHandle = this.chooseAlipayHandle.bind(this);
        this.chooseWechatHandle = this.chooseWechatHandle.bind(this);
        this.resumePay = this.resumePay.bind(this);

        this.state = {
            isAlipayChoosed: true,
            isGiveUpDialogShow: false
        }
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

    headerLeftRender() {
        return (
            <div
                onClick = {() => this.setState({isGiveUpDialogShow: true})}
                style = {styles.headerLeftView}
            >
                <img
                    style = {styles.headerLeftArrowImg}
                    src = {StringImgSrc.imageUrls.ic_left_arrow}
                />
            </div>
        );
    }

    resumePay() {
        this.setState({
            isGiveUpDialogShow: false
        })
    }

    hasDataRender() {
        return (
            <div style = {styles.contentView}>
                <div style = {styles.priceBarView}>
                    <p style = {styles.textStyle1}>¥398.00</p>
                    <div style = {styles.commitOrderBarView}>
                        <img
                            style = {styles.imgStyle1}
                            src = {StringImgSrc.imageUrls.ic_checkbox_gr}
                        />
                        <p style = {styles.textStyle2}>
                            {STRING_RESOURCE.orderHasBeenSubmit}
                        </p>
                    </div>
                    <p style = {styles.textStyle3}>
                        {STRING_RESOURCE.pleaseFinishPaymentIn24Hours}
                    </p>
                </div>
                <p style = {styles.textStyle4}>{STRING_RESOURCE.payWay}</p>
                {PayWayBar(StringImgSrc.imageUrls.ic_alipay, STRING_RESOURCE.alipayPay, this.state.isAlipayChoosed, this.chooseAlipayHandle)}
                {PayWayBar(StringImgSrc.imageUrls.ic_wechat, STRING_RESOURCE.wechatPay, !this.state.isAlipayChoosed, this.chooseWechatHandle)}

                <Link to = {"/PaymentSuccess"}>
                    <button style = {styles.confirmButton}>
                        {STRING_RESOURCE.confirmPay}
                    </button>
                </Link>
                {standardDialog(this.state.isGiveUpDialogShow, '订单已生成，真的不要了吗', '/shopCart', this.resumePay, '狠心放弃', '继续买买买')}
            </div>
        );
    }

    render() {
        var headerParam = {
            isHeaderShow: true,
            headerName: STRING_RESOURCE.confirmPayment,
            isBackShow: true
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
