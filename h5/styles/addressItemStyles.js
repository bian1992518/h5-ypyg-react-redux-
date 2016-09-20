/**
 * Created by zhangheng on 2016/8/2.
 */

var styles = {
    
    addressDetail_D : {
        display:"flex",
        flexDirection:"column",
        background : "#fff"
    },
    addressDetailOrder_D : {
        display:"flex",
        flexDirection:"column",
        background : "#fff",
        marginTop : "0.9rem"
    },
    addressDetailColumn_D : {
        display : "flex",
        background : "#fff",
        height : "0.9rem",
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row",
        paddingLeft : "0.3rem",
        position : "fixed",
        width : "7.5rem"
    },
    addressDetailSave_S : {
        display : "flex",
        marginRight : "0.2rem",
        fontSize : "0.4rem",
        alignItems : 'flex-end'
    },
    addressDetailLine_D : {
        background : "#DBDBDB",
        height : "0.02rem"
    },
    addressDetailDefault_D : {
        display : "flex",
        textAlign : "left",
        height : "0.6rem",
        paddingLeft : "0.3rem",
        paddingTop : "0.32rem",
        alignItems : "flex-start"
    },
    addressDetailDefault_P : {
        display : "flex",
        fontSize : "0.28rem",
        alignItems : "center",
        color : "#333333"
    },
    addressDetailDeta_I : {
        width : "0.38rem",
        height : "0.38rem",
        float : "right",
        marginRight : "0.2rem",
        marginLeft : "4.5rem"
    },
    addressDetailItem_D : {
        display : "flex",
        paddingLeft : "0.3rem",
        height : "0.8rem",
        flexDirection : "row",
        alignItems : "center"
    },
    addressDetailInfo_D : {
        display : "flex",
        paddingLeft : "0.3rem",
        height : "1.28rem",
        flexDirection : "row",
        alignItems : "flex-start",
        paddingTop : "0.24rem"
    },
    addressDetailCheck_I : {
        width : "0.16rem",
        height : "0.16rem",
        marginRight : "0.1rem",
        color : "#FF6700",
        marginBottom : "0.14rem"
    },
    addressDetailCheckNew_I : {
        width : "0.16rem",
        height : "0.16rem",
        marginRight : "0.1rem",
        marginTop : "0.14rem"
    },
    addressDetailInput_In : {
        border : "none",
        fontSize : "0.32rem",
        marginLeft : "0.16rem",
        deleteNext: "true",
        outline : "none",
        textAlign : "left",
        height : "0.8rem",
        width : "5rem"
    },
    addressDetailInputName_In : {
        border : "none",
        fontSize : "0.32rem",
        deleteNext: "true",
        outline : "none",
        textAlign : "left",
        height : "0.8rem",
        width : "5rem",
        marginLeft : "0.45rem"
    },
    addressDetailLongInput_In : {
        border : "none",
        fontSize : "0.32rem",
        marginLeft : "0.16rem",
        deleteNext: "true",
        outline : "none",
        textAlign : "left",
        height : "1.2rem",
        width : "5rem"
    },
    addressDetailIdCardInput_In : {
        border : "none",
        fontSize : "0.32rem",
        deleteNext: "true",
        outline : "none",
        textAlign : "left",
        height : "0.8rem",
        width : "5.5rem",
        marginLeft : "0.72rem"
    },
    areaProCityCounty_P : {
        display : "flex",
        color : "#999999",
        fontSize : "0.28rem",
        height : "0.8rem",
        width : "5rem",
        alignItems : "center",
        justifyContent : "flex-end"
    },
    areaProCityCountyImg_I : {
        width : "0.2rem",
        height : "0.3rem",
        marginLeft : "0.12rem"
    },
    back_I : {
        width : "0.24rem",
        height : "0.44rem"
    },
    textFont_P : {
        display : "flex",
        fontSize : "0.4rem",
        color : "#333333"
    },
    addressDetail_S : {
        fontSize : "0.22rem",
        color : "#595056",
        width : "6.9rem"
    },
    saveAddress_B : {
        fontSize : "0.32rem",
        color : "#666666",
        background : "#DDDDDD",
        height : "0.88rem",
        justifyContent : "center",
        alignItems : "center",
        marginTop : "4.74rem"
    },
    saveAddressOrder_B : {
        fontSize : "0.32rem",
        color : "#666666",
        background : "#DDDDDD",
        height : "0.88rem",
        justifyContent : "center",
        alignItems : "center",
        marginTop : "5.9rem"
    },
    addressDetailTitle_D : {
        display : "flex",
        flexDirection : "column"
    },

    //省市县弹框
    areaDetailContentView: {
        display : 'flex',
        flexDirection : 'column',
        position : 'fixed',
        width : '7.5rem',
        background : '#ffffff',
        zIndex : 10001,
        marginTop : "8rem"
    },
    areaDetailShadow: {
        display : "flex",
        width : "7.5rem",
        height : "14rem",
        opacity: "0.5",
        deleteNext : "true",
        position: "fixed",
        background : "#000000",
        zIndex : "10000"
    },
    cancelImg_Im : {
        width : "0.4rem",
        height : "0.4rem",
        display : "flex",
        alignItems : "center",
        marginRight : "0.2rem"
    },
    cancelTitle_P : {
        fontSize : "0.34rem",
        color : "#333333"
    },
    cancelStyle_D : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height : "0.8rem"
    },
    selectAddress_D : {
        display : "flex",
        alignItems : "center",
        height : "0.6rem"
    },
    selectAddressText_P : {
        display : "flex",
        alignItems : "center",
        fontSize : "0.3rem",
        color : "#000",
        marginLeft : "0.1rem",
        marginRight : "0.1rem",
        borderBottomWidth : "0.04rem",
        borderBottomColor : "#FF0000",
        borderBottomStyle : "solid",
        height : "0.56rem"
    },
    unSelectAddressText_P : {
        display : "flex",
        alignItems : "center",
        fontSize : "0.3rem",
        color : "#000",
        marginLeft : "0.1rem",
        marginRight : "0.1rem",
        height : "0.56rem"
    },
    areaList_D : {
        display : "flex",
        alignItems : "center",
        height : "0.5rem",
        width : "7.5rem"
    },
    areaItemText_P : {
        fontSize : "0.28rem",
        color : "#000",
        marginLeft : "0.1rem"
    },
    scrollViewTwo: {
        height: "3.3rem",
        background : "#EEEEEE"
    },

    maskFloor_D : {
        display : "flex",
        flexDirection : "column",
        // width : "7.5rem",
        // height : "14rem",
        // zIndex : "10001"
    },

    chooseItem_D : {
        display : "flex",
        flexDirection : "row",
    },


    //省市县 选中
    topTabButton : {
        display : "flex",
        flexDirection : "column",
        width : "2.5rem",
        alignItems : "center",
        justifyContent : "center",
        height : "0.9rem",
        borderBottomWidth : "0.04rem",
        borderBottomColor : "#FF0000",
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
    topLine_D : {
        deleteNext: "true",
        position : "fixed",
        deleteNext: "true",
        top : "2.19rem",
        background : "#DBDBDB",
        height : "0.02rem",
        width : "7.5rem"
    },

};

module.exports = styles;