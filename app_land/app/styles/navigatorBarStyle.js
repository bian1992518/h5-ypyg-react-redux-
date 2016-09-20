var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
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
        "borderBottomColor": "#dddddd"
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
    }
});