var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "hearderView": {
        "flex": 1,
        "flexDirection": "row",
        "alignItems": "center",
        "width": 345,
        "height": 44,
        "paddingLeft": 15,
        "paddingRight": 15,
        "backgroundColor": "#ffffff",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#dddddd",
        "zIndex": 10000
    },
    "headerLeftView": {
        "flex": 1,
        "height": 44,
        "alignItems": "center"
    },
    "headerRightView": {
        "flex": 1,
        "height": 44,
        "alignItems": "center",
        "justifyContent": "flex-end"
    },
    "headerLeftArrowImg": {
        "height": 22,
        "width": 11
    },
    "headerTitleContentView": {
        "flex": 4,
        "justifyContent": "center"
    },
    "headerTitleText": {
        "fontSize": 18,
        "color": "#333333"
    },
    "contentView": {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "loadingImage": {
        "height": 64,
        "width": 64
    },
    "loadingText": {
        "fontSize": 14.000000000000002,
        "color": "#999999",
        "marginTop": 17
    }
});