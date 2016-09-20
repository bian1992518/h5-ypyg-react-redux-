var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "header": {
        "backgroundColor": "#fff",
        "flexDirection": "row",
        "alignItems": "center",
        "height": 44,
        "paddingLeft": 15,
        "paddingRight": 15,
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#f5f5f5"
    },
    "lArrow": {
        "height": 22,
        "width": 11
    },
    "dArrow": {
        "width": 15,
        "height": 7.5,
        "marginLeft": 5,
        },
    "headerInfo": {
        "flex": 1,
        "textAlign": "center",
        "fontSize": 18
    },
    "searchBox": {
        "flex": 1,
        "justifyContent": "flex-end"
    },
    "search": {
        "height": 18,
        "width": 18
    },
    "orderName": {
        "fontSize": 13,
        "height": 15
    },
    "orderActive": {
        "fontSize": 13,
        "height": 15,
        "color": "#ff6700"
    },
    "allBrand": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center",
        "height": 30,
        "borderLeftWidth": 1.5,
        "borderStyle": "solid",
        "borderLeftColor": "#f5f5f5"
    },
    "tansform": {
        "transform": [
            {
                "rotate": "180deg"
            }
        ]
    },
    "shopName": {
        "lineHeight": 25,
        "fontSize": 13
    },
    "shopPrice": {
        "flexDirection": "row",
        "lineHeight": 30
    },
    "price": {
        "fontSize": 12,
        "color": "#ff6700"
    },
    "delPrice": {
        "textDecorationLine": "line-through",
        "transform": [
            {
                "scale": 0.9
            }
        ],
        "marginLeft": 10,
        "color": "#999999"
    },
    "goodsBox": {
        "marginTop": 74
    },
    "allGoods": {
        "backgroundColor": "#ffffff",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#f5f5f5",
        "width": 375,
        "zIndex": 999
    },
    "order": {
        "flexDirection": "row",
        "height": 30,
        "alignItems": "center"
    },
    "orderItems": {
        "flex": 1,
        "fontSize": 13,
        "alignItems": "center",
        "justifyContent": "center",
        "height": 30
    },
    "orderImg": {
        "width": 10,
        "height": 10,
        "marginLeft": 5
    },
    "shopItems": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginLeft": 5,
        "paddingBottom": 5
    },
    "shopBox": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "shopItem": {
        "width": 180,
        "backgroundColor": "#ffffff",
        "marginRight": 5,
        "marginTop": 5,
        },
    "activity": {
        "zIndex": 998,
        "right": 0,
        "lineHeight": 15,
        "color": "#ffffff",
        "flexDirection": "row"
    },
    "activities": {
        "width": 30,
        "height": 30,
        "backgroundColor": "#ffa700",
        "fontSize": 12,
        "marginRight": 2.5,
        "paddingTop": 2.5,
        "paddingBottom": 2.5,
        "paddingRight": 2.5,
        "paddingLeft": 2.5,
        "right": 0,
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "#ffffff"
    },
    "gived": {
        "width": 45,
        "height": 45,
        "left": 0,
        "zIndex": 998
    },
    "shopImg": {
        "width": 180,
        "height": 180
    },
    "cart": {
        "right": 15,
        "zIndex": 999
    },
    "cartBox": {
        },
    "cartImg": {
        "width": 44,
        "height": 44
    },
    "cartNum": {
        "width": 16,
        "height": 16,
        "borderRadius": 16,
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "#ff6700",
        "right": 5,
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#ffffff",
        "color": "#ff6700"
    },
    "brandsName": {
        "backgroundColor": "#ffffff",
        "height": 500,
        },
    "allName": {
        "height": 40,
        "alignItems": "center",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#f5f5f5",
        "paddingLeft": 15,
        "fontSize": 12,
        "color": "#999999"
    },
    "name": {
        "height": 40,
        "alignItems": "center",
        "borderBottomWidth": 1,
        "borderStyle": "solid",
        "borderBottomColor": "#f5f5f5",
        "paddingLeft": 15,
        "fontSize": 12
    },
    "nameToggle": {
        "justifyContent": "center",
        "height": 28.000000000000004,
        "alignItems": "center"
    },
    "toggleImg": {
        "width": 28.000000000000004,
        "height": 10
    },
    "hide": {
        },
    "show": {
        }
});