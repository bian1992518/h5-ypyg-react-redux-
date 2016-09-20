/*
 * Name: baseComponent
 * Creator: ZhangZhao
 * Create Time: 2016-08-18
 * Instruction: baseComponent样式
 */

var styles = {
    hearderView: {
        display : "flex",
        position : "fixed",
        flex: 1,
        flexDirection: 'row',
        alignItems : "center",
        top : "0",
        width : "6.9rem",
        height : "0.88rem",
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        backgroundColor : "#ffffff",
        borderBottomWidth : "1px",
        borderBottomStyle : "solid",
        borderBottomColor : "#dddddd",
        zIndex : 10000
    },
    headerLeftView: {
        display: 'flex',
        flex: 1,
        height: '0.88rem',
        alignItems: 'center'
    },
    headerRightView: {
        display: 'flex',
        flex: 1,
        height: '0.88rem',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headerLeftArrowImg: {
        height: '0.44rem',
        width: '0.22rem',
    },
    headerTitleContentView: {
        display: 'flex',
        flex: 4,
        justifyContent: 'center'
    },
    headerTitleText: {
        fontSize: '0.36rem',
        color: '#333333'
    },
    contentView: {
        display: 'flex',
		flex: 1,
		flexDirection: 'column',
        deleteNext: "true",
		height: window.innerHeight,
		justifyContent: 'center',
		alignItems: 'center'
    },
    loadingImage: {
        height: '1.28rem',
        width: '1.28rem'
    },
    loadingText: {
        fontSize: '0.28rem',
        color: '#999999',
        marginTop: '0.34rem'
    }
};

 module.exports = styles;
