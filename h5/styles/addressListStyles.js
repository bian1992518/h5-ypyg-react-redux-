/**
 * Created by zhangheng on 2016/8/2.
 */

var styles = {
    scrollView: {
        height: "11.5rem",
        background : "#EEEEEE"
    },
    scrollViewCoupon: {
        height: "13rem",
        background : "#EEEEEE"
    },
    bgColor : {
        background : "#ffffff",
        display : "flex",
        flexDirection : "column"
    },
    navColumn_D : {
        //导航栏
        display : "flex",
        height : "0.88rem",
        width : "7.5rem",
        alignItems : "center",
        justifyContent : "space-between",
        position : "fixed",
        top : 0,
        background : "#ffffff",
        flexDirection : "row"
    },
    back_I : {
        width : "0.24rem",
        height : "0.44rem",
        marginLeft : "0.2rem"
    },
    textFont_P : {
        display : "flex",
        fontSize : "0.36rem",
        color : "#333333"
    },
    fillSpan_P : {
        width : "0.4rem"
    },
    line_D : {
        background : "#DBDBDB",
        height : "0.02rem",
        deleteNext: "true",
        position : "fixed",
        deleteNext: "true",
        top : "0.86rem",
        width : "7.5rem"
    },
    listSty_D : {
        deleteNext: "true",
        marginTop : "0.88rem",
        deleteNext: "true",
        marginBottom : "0.85rem"
    },
    defaultSty_D : {
        display : "flex",
        flexDirection : "column",
        background : "#ffffff"
    },
    selectImg : {
        marginTop : "0.13rem",
        width : "0.24rem",
        height : "0.24rem",
        marginRight : "0.1rem"
    },
    defaultText_P : {
        fontSize : "0.24rem",
        marginTop : "0.1rem",
        width : "4.56rem",
        color : "#666666"
    },
    defaultTextNext_P : {
        fontSize : "0.24rem",
        marginTop : "0.1rem",
        width : "4.56rem",
        color : "#FF6700"
    },

    nameText_D : {
        paddingLeft : "0.3rem",
        marginTop : "0.36rem",
        display : "flex",
        flexDirection : "row",
        paddingRight : "0.3rem"
    },
    nameText_P : {
        fontSize : "0.3rem",
        color : "#333333",
        width : "5.6rem"
    },
    cardProve_P : {
        display : "flex",
        fontSize : "0.22rem",
        color : "#FF5400",
        width : "0.8rem",
        height : "0.36rem",
        borderColor : "#FF5400",
        borderStyle : "solid",
        borderRadius : 4,
        borderWidth : 1,
        marginLeft : "0.2rem",
        alignItems : "center",
        justifyContent : "center"
    },
    phoneText_P : {
        fontSize : "0.3rem",
        color : '#333333'
    },
    addressDetail_D : {
        display : "flex",
        flexDirection : "row",
        paddingLeft : "0.3rem",
        paddingRight : "0.3rem",
        height : "0.6rem",
        alignItems : "center"
    },
    addressDetail_P : {
        paddingLeft : "0.3rem",
        fontSize : "0.22rem",
        color : "#333333",
        marginTop : "0.22rem",
        paddingRight : "0.3rem"
    },
    addressDetailSave_P : {
        marginRight : "0.2rem",
        fontSize : "0.36rem",
        alignItems : 'flex-end'
    },
    itemDustbin_I : {
        width : "0.22rem",
        height : "0.24rem"
    },
    itemEdit_I : {
        width : "0.22rem",
        height : "0.24rem",
        marginLeft : "0.4rem"
    },

    lineSty_D : {
        background : "#DBDBDB",
        height : "0.02rem"
    },
    button_B : {
        height : '0.88rem',
        width : "7.5rem",
        background : "#ff6700",
        position : "fixed",
        bottom : 0,
        color : "#ffffff",
        fontSize : "0.32rem"
    },
    addressDetailColumn_D : {
        position : "fixed",
        top : 0,
        display : "flex",
        background : "#fff",
        height : "1rem",
        alignItems : "center",
        justifyContent : "space-between",
    },
    newLine_D : {
        marginTop : "0.28rem",
        background : "#DBDBDB",
        height : 1
    },
    changeText_P : {
        fontSize : "0.24rem",
        color : "#666666",
        marginLeft : "0.1rem"
    },
    setDefaultAddress_D : {
        display : "flex",
        flexDirection : "row"
    }
};

module.exports = styles;