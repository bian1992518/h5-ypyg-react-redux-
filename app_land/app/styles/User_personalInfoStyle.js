var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "container": {
        "width": 375,
        "flexDirection": "column",
        "marginTop": 44,
        "backgroundColor": "white"
    },
    "headerView": {
        "flexDirection": "row",
        "height": 100,
        "borderTopWidth": 10,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3",
        "alignItems": "center",
        "justifyContent": "space-between"
    },
    "headImg": {
        "width": 70,
        "height": 70,
        "borderRadius": 35,
        "marginLeft": 15,
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#f3f3f3"
    },
    "headFont": {
        "fontSize": 14.000000000000002,
        "color": "#666666"
    },
    "contentFont": {
        "color": "#999999",
        "fontSize": 14.000000000000002,
        "flex": 1,
        "textAlign": "right",
        "marginRight": 15
    },
    "goRightImg": {
        "width": 7.000000000000001,
        "height": 14.000000000000002,
        "marginRight": 15
    },
    "cellView": {
        "flexDirection": "row",
        "height": 44,
        "justifyContent": "space-between",
        "alignItems": "center",
        "borderTopWidth": 0.5,
        "borderStyle": "solid",
        "borderTopColor": "#f3f3f3"
    },
    "funFont": {
        "color": "#333333",
        "fontSize": 14.000000000000002,
        "marginLeft": 15
    }
});