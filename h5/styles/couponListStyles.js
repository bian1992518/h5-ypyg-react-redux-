/**
 * Created by zhangheng on 2016/8/3.
 */

var styles = {
    scrollView: {
        height: "10.34rem",
    },
    topTab_D : {
        display : "flex",
        height : "1rem",
        background : "#ffffff",
        flexDirection : "column",
        position : "fixed",
        top : "0.89rem",
        zIndex : "1000"
    },
    topLine_D : {
        deleteNext: "true",
        position : "fixed",
        deleteNext: "true",
        top : "2.19rem",
        background : "#DBDBDB",
        height : "0.02rem",
        width : "7.5rem"
    },
    couponList_D : {
        background : "#EEEEEE",
        deleteNext: "true",
        marginTop : "2.22rem",
        paddingTop : "0.1rem"
    },
    couponItem_D : {
        display : "flex",
        flexDirection : "column"
    },
    couponItemRow_D : {
        display : "flex",
        flexDirection : "row",
        margin : "0.3rem",
        height : "1.6rem",
        alignItems : "center",
        background : "#ffffff",
        deleteNext: "true",
        position : "relative"
    },
    couponItemLeft_D : {
        flexDirection : "column",
        paddingTop : "0.24rem",
        paddingBottom : "0.22rem",
        marginLeft : "0.3rem",
        deleteNext: "true",
        position : "relative"
    },
    couponItemFirst_D : {
        display : "flex",
        alignItems : "center",
        flexDirection : "row"
    },
    couponItemFirstImg_D : {
        width : "0.52rem",
        height : "0.44rem"
    },
    couponItemFirstText_D : {
        fontSize : "0.3rem",
        color : "#333333",
        display : "flex",
        alignItems : "center",
    },
    couponItemSecond_D : {
        color : "#999999",
        fontSize : "0.24rem"
    },
    couponItemThird_D : {
        display : "flex",
        alignItems : "center",
        flexDirection : "row"
    },
    couponValueStyle_D : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        height : "1.6rem",
        width : "2rem",
        deleteNext: "true",
        position : "relative"
    },
    couponItemRight_P : {
        fontSize : "0.64rem",
        color : "#ffffff"
    },
    couponValue_P : {
        color : "#ffffff",
        fontSize : "0.2rem",
        marginTop : "0.22rem"
    },
    couponValueNew_P : {
        color : "#ffffff",
        fontSize : "0.2rem",
    },
    couponItemBottomLine : {
        background : "#DBDBDB",
        height : "0.16rem"
    },
    topTabView_D : {
        //三个tab导航栏
        display : "flex",
        height : "0.89rem",
        background : "#ffffff",
        flexDirection : "row",
        deleteNext: "true",
        position : "fixed",
        deleteNext: "true",
        top : "1.23rem"
    },
    tabLine : {
        display : "flex",
        height : "0.22rem",
        deleteNext: "true",
        width : "7.5rem",
        background : "#EEEEEE"
    },
    topTabButton : {
        display : "flex",
        flexDirection : "column",
        width : "2.5rem",
        alignItems : "center",
        justifyContent : "center",
        height : "0.9rem",
        borderBottomWidth : "0.06rem",
        borderBottomColor : "#FF6700",
        borderBottomStyle : "solid"
    },
    selectTopTabButton : {
        display : "flex",
        flexDirection : "column",
        width : "2.5rem",
        alignItems : "center",
        justifyContent : "center",
        height : "0.88rem",
        borderBottomWidth : "0.06rem",
        borderBottomColor : "#FF6700",
        borderBottomStyle : "solid"
    },
    tabTopButtonBg : {
        fontSize : "0.4rem",
        color : "#595056",
        marginTop : "0.2rem"
    },
    tabTopButton : {
        fontSize : "0.3rem",
        color : "#9A8994",
        marginTop : "0.2rem"
    },
    unSelectTabTopButton : {
        fontSize : "0.3rem",
        color : "#9A8994",
        marginTop : "0.2rem"
    },
    hintImg_I : {
        width : "2.2rem",
        height : "2.2rem",
        deleteNext: "true",
        marginTop : "2.8rem"
    },
    hintText_P : {
        display : "flex",
        fontSize : "0.32rem",
        color : "#999999",
        justifyContent : "center",
        marginTop : "0.4rem",
        deleteNext: "true",
        marginBottom : "5rem"
    },
    hintStyle_D : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        deleteNext: "true",
        marginTop : "2.14rem",
        flex : 1
    },
    wholeHintStyle : {
        display : "flex",
        background : "#ffffff",
        flexDirection : "column"
    },
    line_D : {
        background : "#DBDBDB",
        height : "0.02rem",
        deleteNext: "true",
        position : "fixed",
        deleteNext: "true",
        top : "0.88rem",
        width : "7.5rem"
    },

    //弹框
    exchangeBombBoxBg_D : {
        display : "flex",
        width : "7.5rem",
        height : "14rem",
        opacity: "0.5",
        deleteNext : "true",
        position: "fixed",
        background : "#000000",
        zIndex : "10000"
    },
    exchangeBombBox_D : {
        display : "flex",
        flexDirection : "column",
        width : "4rem",
        height : "2.4rem",
        deleteNext : "true",
        position: "fixed",
        marginTop : "4rem",
        marginLeft : "2rem",
        background : "#ffffff",
        zIndex : "10000",
        borderColor : "#DBDBDB",
        borderStyle : "solid",
        borderWidth : "0.02rem",
        borderRadius : "0.08rem"
    },
    couponCodeInput_In : {
        height : "0.6rem",
        borderColor : "#595056",
        borderStyle : "solid",
        borderRadius : "0.04rem",
        borderWidth : "0.02rem",
        width : "3.4rem",
        alignSelf : "center"
    },
    bottomStyles_D : {
        display : "flex",
        flexDirection : "row",
        height : "0.7rem",
        borderTopColor : "#DBDBDB",
        borderTopStyle : "solid",
        borderTopWidth : "0.02rem",
        marginTop : "0.3rem"
    },
    buttonStyle_B : {
        color : "#2073FF",
        fontSize : "0.4rem",
        display : "flex",
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    columnLin_D : {
        width : "0.02rem",
        height : "0.7rem",
        background : "#DBDBDB"
    },
    exchangeCodeTitle : {
        display : "flex",
        fontSize : "0.4rem",
        color : "#333333",
        justifyContent : "center",
        height : "0.7rem",
        alignItems : "center",
        marginTop : "0.1rem"
    },
    imgStyle_I : {
        width : "0.4rem",
        height : "0.4rem",
        deleteNext : "true",
        position: "fixed",
        marginTop : "2rem",
        marginLeft : "1rem",
    },
    couponItemOrderImg_I : {
        height : "1.6rem",
        width : "6.94rem",
        deleteNext: "true",
        position : "absolute",
        deleteNext: "true",
        left : "0",
        deleteNext: "true",
        top : "0"
    },
    contentView : {
        marginTop : "4rem",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }



};
module.exports = styles;