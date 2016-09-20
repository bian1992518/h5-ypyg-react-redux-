var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "container": {
        "flexDirection": "column",
        "width": 375,
        "marginTop": 44,
        "borderTopWidth": 10,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3",
        "backgroundColor": "white"
    },
    "cell": {
        "height": 44,
        "flexDirection": "row",
        "justifyContent": "space-between",
        "alignItems": "center",
        "borderBottomWidth": 0.5,
        "borderStyle": "solid",
        "borderBottomColor": "#f3f3f3"
    },
    "funFont": {
        "fontSize": 14.000000000000002,
        "color": "#333333",
        "marginLeft": 15
    },
    "contentFont": {
        "flex": 1,
        "fontSize": 14.000000000000002,
        "color": "#999999",
        "marginRight": 8,
        "textAlign": "right"
    },
    "goRightImg": {
        "width": 7.000000000000001,
        "height": 14.000000000000002,
        "marginRight": 15
    },
    "exitCell": {
        "fontSize": 14.000000000000002,
        "color": "#333333",
        "lineHeight": 44,
        "height": 44,
        "textAlign": "center",
        "borderTopWidth": 20,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    }
});