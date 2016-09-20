/**
 * Created by zhangheng on 2016/8/19.
 * 商品列表
 */

import React from "react";
import { browserHistory,Link } from 'react-router';
import * as productListActions from '../../common/actions/productListActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BaseComponent from './baseComponent';
import itemStyles from "../styles/addressItemStyles";
import productStyles from "../styles/productListStyles";
import String from '../special/stringImage';


//商品列表
class ProductList extends BaseComponent {

    constructor(props){
        super(props);
        this.state={
            isClick:false,  //品牌列表
            productList:null,
            brandList:null,
            categoryName:null
        };

        this.tabButton= this.tabButton.bind(this);
        this.tabColumn = this.tabColumn.bind(this);
        this.brandList = this.brandList.bind(this);
        this.productList = this.productList.bind(this);
    }


    //render之前 获取props
    componentWillReceiveProps(nextProps) {
        console.log("nextProps is:", nextProps);
        if (nextProps.productListState.isDataRequestSucc){
            if (nextProps.productListState.productListData.data.goods){
                this.setState({
                    productList:nextProps.productListState.productListData.data.goods,
                    brandList:nextProps.productListState.productListData.data.brands.brands
                });
            }else {
                this.setState({
                    productList: nextProps.productListState.productListData.data.goodsRecommend,
                    brandList:nextProps.productListState.productListData.data.brands.brands
                });
            }

        }else {
            //数据请求失败
        }
    };


    componentWillMount() {
        this.setState({
            categoryName:this.props.location.query.categoryName
        });
        var obj ={
            categoryId:this.props.location.query.categoryId
        };
        this.props.productListActions.queryProductListData(obj);
    }


    //tab点击事件
    tabButton(type){

        switch (type){
            case 1:

                break;
            case 2:
                break;
            case 3:

                break;
            case 4:
                var isTrue=this.state.isClick;
                if (isTrue){
                    isTrue = false;
                }else {
                    isTrue = true;
                }
                this.setState({
                    isClick:isTrue
                });
                break;
        }
    }


    //品牌页
    brandList(){
        return(
            <div style={productStyles.brandListStyle_D}>
                <p style={productStyles.brandListTitle_P}>全部品牌</p>
                <div style={itemStyles.addressDetailLine_D}></div>
                <div>
                    {
                        this.state.brandList.map(function (brandItem, index) {
                            return <div style={productStyles.brandListItemStyle_D} key={index}>
                                <p style={productStyles.brandListItem_P}>{brandItem.brandName}</p>
                                <div style={itemStyles.addressDetailLine_D}></div>
                            </div>
                        })
                     }
                </div>
                <div style={productStyles.brandListFoodImg_D}>
                    <img src="common/images/i-up@3x.png" style={productStyles.brandListFoodImg_I}/>
                </div>
            </div>
        )
    }


    //商品列表页
    productList(){
        const {productListState, productListActions} = this.props;
        return(
            <div style={productStyles.productListStyle_D}>
                {
                    this.state.productList.map(function (productItem, index) {
                        return <div style={productStyles.productItem_D} key={index}>
                            <img src={productItem.imgMain.url} style={productStyles.productItemImg_I}/>
                            <p style={productStyles.productItemText_P}>{productItem.goodsName}</p>
                            <div style={productStyles.productItemPrice_D}>
                                <p style={productStyles.productItemNewPrice_P}>{productItem.goodsMsrp}</p>
                                <p style={productStyles.productItemOldPrice_P}>{productItem.goodsSalePrice}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }


    //导航栏
    tabColumn(){
        return(
            <div>
                <div style={itemStyles.addressDetailColumn_D}>
                    <button onClick={() => browserHistory.goBack()}>
                        <img src="common/images/icon_left_arrow.png" style={itemStyles.back_I}  />
                    </button>
                    <p style={itemStyles.textFont_P}>{this.state.categoryName}</p>
                    <img src="common/images/icon_searchcolor.png" style={productStyles.searchIcon_I}
                         onClick={() => this.tabButton(5)}/>
                </div>
                <div style={itemStyles.addressDetailLine_D}></div>

                <div style={productStyles.tabColumn_D}>
                    <button style={productStyles.tabButton_B}
                            onClick={() => this.tabButton(1)}>銷量</button>
                    <button style={productStyles.tabButton_B}
                            onClick={() => this.tabButton(2)}>最新</button>
                    <div style={productStyles.tabThirdButton_D}>
                        <button style={productStyles.tabButtonChange_B}
                                onClick={() => this.tabButton(3)}>价格</button>
                        <img src="common/images/productlist_sort.png" style={productStyles.tabThirdImg_I}/>
                    </div>
                    <div style={productStyles.tabVerticalLine_D}></div>
                    <div style={productStyles.tabThirdButton_D}>
                        <button style={productStyles.tabButtonChange_B}
                                onClick={() => this.tabButton(4)}>品牌</button>
                        <img src={this.state.isClick ? String.imageUrls.arrow_up_productlist: String.imageUrls.arrow_down_productlist} style={productStyles.tabThirdImg_I}/>
                    </div>
                </div>
                <div style={itemStyles.addressDetailLine_D}></div>
            </div>
        )
    }


    //展示数据
    hasDataRender(){

        if (this.state.isClick){
            if (this.state.brandList){
                return(
                    <div style={itemStyles.addressDetail_D}>
                        {this.tabColumn()}
                        {this.brandList()}
                    </div>
                );
            }else {
                return(
                    <div style={itemStyles.addressDetail_D}>
                        {this.tabColumn()}
                    </div>
                );
            }
        }else if (this.state.productList){
            return(
                <div style={itemStyles.addressDetail_D}>
                    {this.tabColumn()}
                    {this.productList()}
                </div>
            );
        }else {
            return(
                <div style={itemStyles.addressDetail_D}>
                    {this.tabColumn()}
                </div>
            );
        }

    }



    render() {

        const {productListState, productListActions} = this.props;

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
    const {productListState} = state;
    return {
        productListState
    }
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
