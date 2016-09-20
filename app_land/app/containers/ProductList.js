/**
 * Created by zhangheng on 2016/8/19.
 * 商品列表
 */

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import { Actions } from 'react-native-router-flux';
import * as productListActions from '../../common/actions/productListActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BaseComponent from './baseComponent';
import itemStyles from "../styles/addressItemStyles";
import productStyles from "../styles/productListStyles";
import String from '../special/stringImage';

//商品列表
class ProductList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            isClick: false, //品牌列表
            productList: null,
            brandList: null,
            categoryName: null
        };

        this.tabButton = this.tabButton.bind(this);
        this.tabColumn = this.tabColumn.bind(this);
        this.brandList = this.brandList.bind(this);
        this.productList = this.productList.bind(this);
    }

    //render之前 获取props
    componentWillReceiveProps(nextProps) {
        console.log("nextProps is:", nextProps);
        if (nextProps.productListState.isDataRequestSucc) {
            if (nextProps.productListState.productListData.data.goods) {
                this.setState({
                    productList: nextProps.productListState.productListData.data.goods,
                    brandList: nextProps.productListState.productListData.data.brands.brands
                });
            } else {
                this.setState({
                    productList: nextProps.productListState.productListData.data.goodsRecommend,
                    brandList: nextProps.productListState.productListData.data.brands.brands
                });
            }
        } else {
            //数据请求失败
        }
    }

    componentWillMount() {
        this.setState({
            categoryName: this.props.categoryName
        });
        var obj = {
            categoryId: this.props.categoryId
        };
        this.props.productListActions.queryProductListData(obj);
    }

    //tab点击事件
    tabButton(type) {

        switch (type) {
            case 1:

                break;
            case 2:
                break;
            case 3:

                break;
            case 4:
                var isTrue = this.state.isClick;
                if (isTrue) {
                    isTrue = false;
                } else {
                    isTrue = true;
                }
                this.setState({
                    isClick: isTrue
                });
                break;
        }
    }

    //品牌页
    brandList() {
        return <View style={productStyles.brandListStyle_D}>
                <Text style={productStyles.brandListTitle_P}>全部品牌</Text>
                <View style={itemStyles.addressDetailLine_D}></View>
                <View>
                    {this.state.brandList.map(function (brandItem, index) {
                    return <View style={productStyles.brandListItemStyle_D} key={index}>
                                <Text style={productStyles.brandListItem_P}>{brandItem.brandName}</Text>
                                <View style={itemStyles.addressDetailLine_D}></View>
                            </View>;
                })}
                </View>
                <View style={productStyles.brandListFoodImg_D}>
                    <Image source = {
                     require("../../common/images/i-up@3x.png")
                } style={productStyles.brandListFoodImg_I} />
                </View>
            </View>;
    }

    //商品列表页
    productList() {
        const { productListState, productListActions } = this.props;
        return <View style={productStyles.productListStyle_D}>
                {this.state.productList.map(function (productItem, index) {
                return <View style={productStyles.productItem_D} key={index}>
                            <Image source = {
                         {
                            uri: productItem.imgMain.url
                        }
                    } style={productStyles.productItemImg_I} />
                            <Text style={productStyles.productItemText_P}>{productItem.goodsName}</Text>
                            <View style={productStyles.productItemPrice_D}>
                                <Text style={productStyles.productItemNewPrice_P}>{productItem.goodsMsrp}</Text>
                                <Text style={productStyles.productItemOldPrice_P}>{productItem.goodsSalePrice}</Text>
                            </View>
                        </View>;
            })}
            </View>;
    }

    //导航栏
    tabColumn() {
        return <View>
                <View style={itemStyles.addressDetailColumn_D}>
                    <Button onPress={Actions.pop}>
                        <Image source = {
                         require("../../common/images/icon_left_arrow.png")
                    } style={itemStyles.back_I} />
                    </Button>
                    <Text style={itemStyles.textFont_P}>{this.state.categoryName}</Text>
                    <Image source = {
                     require("../../common/images/icon_searchcolor.png")
                } style={productStyles.searchIcon_I} onClick={() => this.tabButton(5)} />
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>

                <View style={productStyles.tabColumn_D}>
                    <Button style={productStyles.tabButton_B} onPress={() => this.tabButton(1)}>銷量</Button>
                    <Button style={productStyles.tabButton_B} onPress={() => this.tabButton(2)}>最新</Button>
                    <View style={productStyles.tabThirdButton_D}>
                        <Button style={productStyles.tabButtonChange_B} onPress={() => this.tabButton(3)}>价格</Button>
                        <Image source = {
                         require("../../common/images/productlist_sort.png")
                    } style={productStyles.tabThirdImg_I} />
                    </View>
                    <View style={productStyles.tabVerticalLine_D}></View>
                    <View style={productStyles.tabThirdButton_D}>
                        <Button style={productStyles.tabButtonChange_B} onPress={() => this.tabButton(4)}>品牌</Button>
                        <Image source={this.state.isClick ? String.imageUrls.arrow_up_productlist : String.imageUrls.arrow_down_productlist} style={productStyles.tabThirdImg_I} />
                    </View>
                </View>
                <View style={itemStyles.addressDetailLine_D}></View>
            </View>;
    }

    //展示数据
    hasDataRender() {

        if (this.state.isClick) {
            if (this.state.brandList) {
                return <View style={itemStyles.addressDetail_D}>
                        {this.tabColumn()}
                        {this.brandList()}
                    </View>;
            } else {
                return <View style={itemStyles.addressDetail_D}>
                        {this.tabColumn()}
                    </View>;
            }
        } else if (this.state.productList) {
            return <View style={itemStyles.addressDetail_D}>
                    {this.tabColumn()}
                    {this.productList()}
                </View>;
        } else {
            return <View style={itemStyles.addressDetail_D}>
                    {this.tabColumn()}
                </View>;
        }
    }

    render() {

        const { productListState, productListActions } = this.props;

        var headerParam = {
            isHeaderShow: false,
            headerName: null,
            isBackShow: false
        };

        var netRequestParam = {
            isRequesting: productListState.dataRequesting,
            isDataRequestSucc: productListState.isDataRequestSucc,
            hasData: productListState.productListData
        };

        return super.allSceneRender(headerParam, netRequestParam);
    }
}

function mapStateToProps(state) {
    const { productListState } = state;
    return {
        productListState
    };
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);