var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "scrollView": {
        "height": 575
    },
    "container": {
        "flexDirection": "column",
        "backgroundColor": "white"
    },
    "brands": {
        "flexDirection": "row",
        "height": 65,
        "alignItems": "center",
        "paddingLeft": 15,
        "paddingRight": 15,
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    },
    "goodsImg": {
        "width": 50,
        "height": 50
    },
    "goodsInfo": {
        "flexDirection": "column",
        "marginLeft": 15,
        "flex": 1
    },
    "name": {
        "marginBottom": 5,
        "fontSize": 15
    },
    "detail": {
        "fontSize": 15
    },
    "concern": {
        "backgroundColor": "#d4d4d4",
        "color": "white",
        "textAlign": "center",
        "width": 50,
        "height": 25,
        "fontSize": 13,
        "lineHeight": 25,
        "borderRadius": 5
    },
    "unconcern": {
        "backgroundColor": "#d4d4d4",
        "color": "#494949",
        "textAlign": "center",
        "width": 50,
        "height": 25,
        "fontSize": 13,
        "lineHeight": 25,
        "borderRadius": 5
    }
});