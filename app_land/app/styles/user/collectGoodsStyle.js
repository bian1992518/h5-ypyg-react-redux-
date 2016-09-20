var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "scrollView": {
        "height": 575
    },
    "container": {
        "flexDirection": "column",
        "width": 375
    },
    "segmentBar": {
        "flexDirection": "row",
        "height": 42,
        "width": 375,
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#eee",
        "borderBottomWidth": 0.5,
        "borderBottomColor": "#eee"
    },
    "btnView": {
        "flexDirection": "column",
        "flex": 1,
        "alignItems": "center",
        "backgroundColor": "white"
    },
    "collect": {
        "color": "#494949",
        "textAlign": "center",
        "height": 42,
        "fontSize": 17,
        "lineHeight": 40
    },
    "uncollect": {
        "color": "gray",
        "textAlign": "center",
        "height": 42,
        "fontSize": 17,
        "lineHeight": 40
    },
    "line": {
        "backgroundColor": "black",
        "height": 2.5,
        "width": 40,
        "borderRadius": 0.75
    },
    "list": {
        "flexDirection": "column"
    },
    "goodsCell": {
        "height": 90,
        "flexDirection": "row",
        "paddingTop": 15,
        "paddingBottom": 15,
        "paddingRight": 15,
        "paddingLeft": 15,
        "backgroundColor": "white",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#eee"
    },
    "goodsImg": {
        "height": 90,
        "width": 90
    },
    "goodsInfo": {
        "flexDirection": "column",
        "flex": 1,
        "height": 90,
        "marginLeft": 10,
        "justifyContent": "space-around"
    },
    "goodsTitle": {
        "fontSize": 14.000000000000002,
        "color": "black"
    },
    "goodsCount": {
        "fontSize": 15,
        "color": "red"
    }
});