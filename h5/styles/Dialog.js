/*
 * Name: ChoosePayWay
 * Creator: ZhangZhao
 * Create Time: 2016-09-12
 * Instruction: 对话框组件样式
 */

const styles = {
    backgroundView: {
        position: 'fixed',
        zIndex: 10001,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#333333',
        opacity: 0.3,
        top: 0
    },
    standardDialogView: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        zIndex: 10002,
        width: 2/3 * window.innerWidth,
        height: '3rem',
        backgroundColor: '#ffffff',
        top: '4.5rem',
        left: window.innerWidth/2 - window.innerWidth/3,
        borderRadius: '0.08rem',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    standardDialogTitleText: {
        fontSize: '0.32rem',
        color: '#333333',
        marginTop: '0.9rem'
    },
    standardDialogButtonView: {
        display: 'flex',
        flexDirection: 'row',
        height: '0.88rem',
        width: 2/3 * window.innerWidth,
        borderTop: '0.02rem solid #dddddd'
    },
    standardDialogLeftButton: {
        height: '0.88rem',
        width: window.innerHeight/3,
        borderRight: '0.02rem solid #dddddd',
        fontSize: '0.32rem',
        color: '#008cff'
    },
    standardDialogRightButton: {
        height: '0.88rem',
        width: window.innerHeight/3,
        fontSize: '0.32rem',
        color: '#008cff'
    },
    standardDialogLeftLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '0.88rem',
        width: window.innerHeight/3,
        borderRight: '0.02rem solid #dddddd',
    },
    buttonText: {
        fontSize: '0.32rem',
        color: '#008cff'
    }
}

module.exports = styles;
