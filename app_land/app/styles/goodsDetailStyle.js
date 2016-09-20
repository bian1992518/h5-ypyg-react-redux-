var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "scrollView": {
        "height": 578
    },
    "viewDirection": {
        "flexDirection": "column"
    },
    "container": {
        "flexDirection": "column",
        "width": 375,
        "marginTop": 44,
        "marginBottom": 45
    },
    "navigatorBar": {
        "height": 44,
        "width": 375,
        "alignItems": "center",
        "justifyContent": "space-between",
        "backgroundColor": "white",
        "flexDirection": "row",
        "zIndex": 999,
        "borderBottomWidth": 0.5,
        "borderStyle": "solid",
        "borderBottomColor": "#f3f3f3"
    },
    "navLeftView": {
        "marginLeft": 10,
        "height": 22,
        "width": 65
    },
    "navBack": {
        "width": 11,
        "height": 22
    },
    "navTitle": {
        "fontSize": 18,
        "color": "#333333"
    },
    "navRightView": {
        "flexDirection": "row",
        "marginRight": 15,
        "height": 18,
        "width": 60,
        "justifyContent": "space-between"
    },
    "collectionImg": {
        "height": 18,
        "width": 20
    },
    "sharedImg": {
        "height": 18,
        "width": 18
    },
    "goodsImgsView": {
        "flex": 1,
        "flexDirection": "column",
        "alignItems": "center",
        "height": 260,
        "backgroundColor": "white",
        "borderTopWidth": 9,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    },
    "backImgView": {
        "width": 175,
        "height": 225,
        "marginTop": 30,
        "justifyContent": "center"
    },
    "goodsImg": {
        "width": 175,
        "height": 175,
        "resizeMode": "contain"
    },
    "contentDetailView": {
        "alignSelf": "flex-end",
        "width": 44,
        "height": 44,
        "marginRight": 15,
        "marginTop": -90,
        "borderWidth": 0.5,
        "borderStyle": "solid",
        "borderColor": "#cccccc",
        "borderRadius": 22,
        "alignItems": "center",
        "justifyContent": "center",
        "zIndex": 999,
        "backgroundColor": "white"
    },
    "contentDetailFont": {
        "width": 28.999999999999996,
        "textAlign": "center",
        "fontSize": 12,
        "color": "#333333"
    },
    "goodsInfoView": {
        "flexDirection": "column",
        "backgroundColor": "white"
    },
    "priceView": {
        "flexDirection": "row",
        "height": 44,
        "alignItems": "center"
    },
    "priceFont": {
        "color": "#ff6700",
        "fontSize": 22,
        "marginLeft": 15
    },
    "originalPriceFont": {
        "color": "#999999",
        "fontSize": 12,
        "marginLeft": 15,
        "textDecorationLine": "line-through"
    },
    "speLine": {
        "marginLeft": 15,
        "marginRight": 15,
        "height": 0.5,
        "backgroundColor": "#f3f3f3"
    },
    "goodsTitleFont": {
        "marginLeft": 15,
        "marginRight": 15,
        "marginTop": 16,
        "fontSize": 14.000000000000002,
        "color": "#333333"
    },
    "goodsBriefly": {
        "marginLeft": 15,
        "marginRight": 15,
        "marginTop": 4,
        "marginBottom": 4,
        "fontSize": 12,
        "color": "#666666",
        "lineHeight": 17
    },
    "goodsBrandStorehouse": {
        "flexDirection": "row",
        "alignItems": "center",
        "height": 39
    },
    "brandImg": {
        "height": 16,
        "width": 16,
        "marginLeft": 15
    },
    "brandFont": {
        "color": "#999999",
        "fontSize": 12,
        "marginLeft": 15
    },
    "costView": {
        "flexDirection": "column",
        "borderTopWidth": 9,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3",
        "borderBottomWidth": 10,
        "borderBottomColor": "#f3f3f3",
        "backgroundColor": "white"
    },
    "costCell": {
        "flexDirection": "row",
        "height": 44,
        "width": 375,
        "alignItems": "center",
        "justifyContent": "space-between",
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    },
    "costFont": {
        "color": "#333333",
        "fontSize": 14.000000000000002,
        "marginLeft": 15
    },
    "goRightImg": {
        "height": 14.000000000000002,
        "width": 7.000000000000001,
        "marginRight": 15
    },
    "dragTopCell": {
        "flexDirection": "row",
        "height": 44,
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "white"
    },
    "dragImg": {
        "height": 7.000000000000001,
        "width": 14.000000000000002,
        "marginRight": 4
    },
    "dragFont": {
        "marginRight": 4,
        "fontSize": 12,
        "color": "#333333"
    },
    "toolBar": {
        "height": 44,
        "flexDirection": "row",
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3",
        "width": 375,
        "backgroundColor": "white"
    },
    "funView": {
        "height": 44,
        "width": 68,
        "flexDirection": "column",
        "borderRightWidth": 0.5,
        "borderStyle": "solid",
        "borderRightColor": "#f3f3f3",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "funImg": {
        "height": 18,
        "width": 18
    },
    "funFont": {
        "marginTop": 0.5,
        "fontSize": 10,
        "color": "#999999"
    },
    "cartNumView": {
        "height": 15,
        "width": 15,
        "borderRadius": 9,
        "marginLeft": 40,
        "borderWidth": 0.5,
        "borderStyle": "solid",
        "borderColor": "#ff6700",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "white"
    },
    "cartNumFont": {
        "fontSize": 10,
        "color": "#ff6700"
    },
    "addCartsView": {
        "flex": 1,
        "backgroundColor": "#ffa700",
        "height": 44,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "addCartsFont": {
        "color": "#ffffff",
        "fontSize": 16
    },
    "immPaidView": {
        "flex": 1,
        "backgroundColor": "#ff6700",
        "height": 44,
        "alignItems": "center",
        "justifyContent": "center"
    }
});