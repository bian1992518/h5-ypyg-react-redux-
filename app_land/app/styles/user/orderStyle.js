var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "scrollView": {
        "height": 579
    },
    "container": {
        "flexDirection": "column",
        "width": 375,
        "backgroundColor": "white"
    },
    "viewDirection": {
        "flexDirection": "column"
    },
    "segmentBar": {
        "height": 42,
        "width": 375,
        "flexDirection": "row",
        "justifyContent": "space-around",
        "borderBottomWidth": 0.5,
        "borderStyle": "solid",
        "borderBottomColor": "#dddddd"
    },
    "btnView": {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "space-between",
        "alignItems": "center",
        "backgroundColor": "white",
        "width": 50
    },
    "btnDiv": {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "space-between",
        "alignItems": "center",
        "backgroundColor": "white"
    },
    "collect": {
        "marginTop": 12.5,
        "color": "#ff6700",
        "textAlign": "center",
        "fontSize": 14.000000000000002
    },
    "uncollect": {
        "marginTop": 12.5,
        "color": "#333333",
        "textAlign": "center",
        "fontSize": 14.000000000000002
    },
    "line": {
        "backgroundColor": "#ff6700",
        "height": 2.5,
        "width": 50,
        "borderRadius": 1
    },
    "list": {
        "flexDirection": "column"
    },
    "orderHeader": {
        "flexDirection": "row",
        "height": 32,
        "paddingLeft": 16,
        "paddingRight": 14.000000000000002,
        "justifyContent": "space-between",
        "alignItems": "center",
        "borderBottomWidth": 0.5,
        "borderStyle": "solid",
        "borderBottomColor": "#eee",
        "borderTopWidth": 11,
        "borderTopColor": "#eee"
    },
    "orderHeaderSN": {
        "fontSize": 12,
        "color": "#333333"
    },
    "orderHeaderState": {
        "fontSize": 12,
        "color": "#ffa700"
    },
    "orderFooter": {
        "flexDirection": "column"
    },
    "orderFooterGoods": {
        "flexDirection": "row",
        "height": 30,
        "paddingLeft": 15,
        "paddingRight": 15,
        "alignItems": "center",
        "justifyContent": "flex-end"
    },
    "orderFooterAcount": {
        "fontSize": 12,
        "color": "#ff6700"
    },
    "orderFooterFont": {
        "fontSize": 12,
        "color": "#333333"
    },
    "orderFooterBtnView": {
        "flexDirection": "row",
        "height": 44,
        "alignItems": "center",
        "justifyContent": "flex-end",
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3",
        "borderBottomWidth": 0.5,
        "borderBottomColor": "#dddddd"
    },
    "orderFooterBtnRed": {
        "height": 28.000000000000004,
        "width": 78,
        "color": "white",
        "fontSize": 12,
        "backgroundColor": "#ff6700",
        "borderRadius": 5,
        "marginRight": 15
    },
    "orderFooterBtnBlack": {
        "height": 28.000000000000004,
        "width": 78,
        "color": "#333333",
        "fontSize": 12,
        "borderRadius": 5,
        "borderWidth": 0.5,
        "borderStyle": "solid",
        "borderColor": "#f3f3f3",
        "marginRight": 15
    },
    "goodsCell": {
        "width": 375,
        "height": 90,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "borderBottomWidth": 0.5,
        "borderStyle": "solid",
        "borderBottomColor": "#eee"
    },
    "goodsImg": {
        "marginLeft": 15,
        "marginTop": 15,
        "height": 60,
        "width": 60
    },
    "goodsTitle": {
        "flex": 1,
        "fontSize": 12,
        "color": "#333333",
        "textAlign": "left",
        "marginLeft": 15,
        "marginTop": 18
    },
    "goodsTotal": {
        "flexDirection": "column",
        "marginTop": 19,
        "marginLeft": 11,
        "marginRight": 14.000000000000002
    },
    "goodsCount": {
        "fontSize": 12,
        "color": "#333333"
    },
    "goodsNum": {
        "fontSize": 12,
        "color": "#333333",
        "marginTop": 3,
        "alignSelf": "flex-end"
    },
    "orderCommentList": {
        "flexDirection": "column",
        "borderTopWidth": 11,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    },
    "orderCommentCell": {
        "height": 76,
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "orderCommentImg": {
        "marginLeft": 15,
        "marginTop": 15,
        "height": 60,
        "width": 60
    },
    "orderCommentBtn": {
        "height": 28.000000000000004,
        "width": 78,
        "color": "white",
        "fontSize": 12,
        "backgroundColor": "#ff6700",
        "borderRadius": 5,
        "marginRight": 15,
        "marginBottom": 15,
        "alignSelf": "flex-end"
    },
    "noDataContainer": {
        "flexDirection": "column",
        "width": 375,
        "alignItems": "center",
        "backgroundColor": "#f3f3f3"
    },
    "noDataImgView": {
        "marginTop": 105,
        "height": 120,
        "width": 120,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "noDataTipFont": {
        "fontSize": 14.000000000000002,
        "color": "#999999",
        "marginTop": 16
    },
    "noDataBtn": {
        "height": 28.000000000000004,
        "width": 78,
        "color": "#333333",
        "fontSize": 12,
        "backgroundColor": "white",
        "borderRadius": 5,
        "marginTop": 16,
        "borderWidth": 0.5,
        "borderStyle": "solid",
        "borderColor": "#dddddd"
    }
});