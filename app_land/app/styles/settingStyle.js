var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "container": {
        "marginBottom": 50
    },
    "userHeader": {
        "width": 375,
        "height": 149,
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#dddddd"
    },
    "userBgImg": {
        "width": 375,
        "height": 149,
        "left": 0,
        "zIndex": -1
    },
    "userSettingImg": {
        "right": 15,
        "width": 20,
        "height": 20
    },
    "userInfo": {
        "marginLeft": 147.5,
        "paddingTop": 50,
        "flexDirection": "column"
    },
    "userLogo": {
        "width": 70,
        "height": 70,
        "borderRadius": 38
    },
    "concernBar": {
        "height": 65,
        "backgroundColor": "#fff",
        "alignItems": "center",
        "marginBottom": 10,
        "flexDirection": "row"
    },
    "concernItem": {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "itemLine": {
        "width": 1,
        "height": 44,
        "backgroundColor": "#eee"
    },
    "concernItemNum": {
        "fontSize": 18,
        "color": "#5c4b51",
        "textAlign": "center"
    },
    "concernItemInfo": {
        "fontSize": 12,
        "color": "#9a8994"
    },
    "userOrder": {
        "height": 44,
        "alignItems": "center",
        "paddingLeft": 15,
        "paddingRight": 15,
        "justifyContent": "space-between",
        "backgroundColor": "#ffffff",
        "marginTop": 11,
        "marginBottom": 1,
        "flexDirection": "row"
    },
    "myOrder": {
        "fontSize": 14.000000000000002,
        "color": "#333333"
    },
    "orderAll": {
        "alignItems": "center",
        "flexDirection": "row"
    },
    "checkOrder": {
        "fontSize": 12,
        "color": "#999999",
        "marginRight": 10
    },
    "arrowRight": {
        "width": 7.000000000000001,
        "height": 14.000000000000002
    },
    "orderItem": {
        "height": 60,
        "backgroundColor": "#ffffff",
        "alignItems": "center",
        "justifyContent": "space-around",
        "marginBottom": 10,
        "flexDirection": "row",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#dddddd"
    },
    "orderItems": {
        "flex": 1,
        "alignItems": "center",
        "flexDirection": "column"
    },
    "orderItemImg": {
        "width": 20,
        "height": 20
    },
    "orderInfo": {
        "fontSize": 12,
        "color": "#333333",
        "marginTop": 7.000000000000001
    },
    "userListItems": {
        "backgroundColor": "#ffffff"
    },
    "userListItem": {
        "height": 44,
        "paddingLeft": 15,
        "paddingRight": 15,
        "borderBottomWidth": 1,
        "borderBottomColor": "#f0f0f0",
        "borderStyle": "solid",
        "alignItems": "center",
        "justifyContent": "space-between",
        "flexDirection": "row"
    },
    "service": {
        "height": 44,
        "backgroundColor": "#ffffff",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#dddddd",
        "paddingLeft": 15,
        "paddingRight": 15,
        "marginTop": 11,
        "alignItems": "center",
        "justifyContent": "space-between",
        "flexDirection": "row"
    }
});