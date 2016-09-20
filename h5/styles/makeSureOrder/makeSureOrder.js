/*
 * Name: makeSureOrder.js
 * Creator: ZhangZhao
 * Create Time: 2016-08-20
 * Instruction: 确认订单页面样式
 */
const styles = {
    mainContentView: {
        marginTop: '1.1rem',
        marginBottom: '1.1rem'
    },
    saveAddContentView: {
        display: 'flex',
        flexDirection: 'row',
        height: '1.48rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #dddddd'
    },
    saveAddButtonView: {
        display: 'flex',
        flexDirection: 'row',
        height: '0.88rem',
        width: '6.9rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.08rem',
        border: '1px solid #ff6700'
    },
    saveAddButtonText: {
        fontSize: '0.32rem',
        color: '#ff6700'
    },
    addContentView: {
        display: 'flex',
        flexDirection: 'row',
        height: '1.8rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #dddddd'
    },
    addInfoContentView: {
        display: 'flex',
        flexDirection: 'column',
        flex: 10
    },
    addArrowContentView: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    addNamePhoneContentView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0.3rem'
    },
    addDetailContentView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0.3rem'
    },
    whouseContentView: {
        marginTop: 10
    },
    whouseHeaderView: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '0.3rem',
        alignItems: 'center',
        height: '0.6rem',
        backgroundColor: '#ffffff',
        marginBottom: '0.02rem'
    },
    whouseFooterView: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '0.3rem',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '0.6rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #dddddd'
    },
    goodsContentView: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: '1.8rem',
        marginBottom: '0.02rem',
    },
    goodsIntroContentView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 5,
    },
    goodsNameContentView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '0.3rem',
        height: '1.2rem',
        width: '4.26rem'
    },
    goodsImg: {
        marginLeft: '0.3rem',
        height: '1.2rem',
        width: '1.2rem',
        border: '1px solid #dddddd'
    },
    goodsPriceAmountContentView: {
        display: 'flex',
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    goodsPriceAmountView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        height: '1.2rem',
        marginRight: '0.3rem'
    },
    orderFooterContentView: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        bottom: 0,
        height: '0.88rem',
        width: '7.5rem',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #dddddd',
        zIndex: 12000
    },
    orderFooterMsgView: {
        display: 'flex',
        flex: 2.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    orderFooterPriceView: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '0.3rem'
    },
    orderFooterDetailView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '0.72rem'
    },
    orderFooterPayView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#ff6700'
    },
    orderDetailContentView: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        bottom: '0.9rem',
        height: window.innerHeight * 210/667,
        width: '7.5rem',
        backgroundColor: '#ffffff',
        zIndex: 11000
    },
    orderDetailShadow: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        height: window.innerHeight * 622/667,
        width: '7.5rem',
        backgroundColor: '#000000',
        opacity:0.3,
        zIndex: 10001
    },
    orderDetailLeftView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '0.3rem'
    },
    orderDetailRightView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '0.3rem'
    },
    textSt1: {
        fontSize: '0.28rem',
        color: '#333333'
    },
    textSt2: {
        fontSize: '0.24rem',
        color: '#333333'
    },
    textSt3: {
        fontSize: '0.24rem',
        color: '#666666',
        marginTop: '0.16rem'
    },
    textSt4: {
        fontSize: '0.24rem',
        color: '#ff6700'
    },
    textSt5: {
        fontSize: '0.32rem',
        color: '#ffffff'
    },
    textSt6: {
        fontSize: '0.24rem',
        color: '#999999',
        marginLeft: '0.3rem',
        marginTop: '0.4rem',
        marginBottom: '0.2rem'
    },
    textSt7: {
        fontSize: '0.24rem',
        color: '#333333',
        marginTop: '0.28rem'
    },
    textSt8: {
        fontSize: '0.24rem',
        color: '#999999',
    },
    textSt9: {
        fontSize: '0.24rem',
        color: '#999999',
        marginTop: '0.28rem'
    },
    imgSt1: {
        marginRight: '0.3rem',
        height: '0.28rem',
        width: '0.14rem'
    },
    imgSt2: {
        height: '0.14rem',
        width: '0.28rem',
        marginLeft: '0.08rem'
    }
};

module.exports = styles;
