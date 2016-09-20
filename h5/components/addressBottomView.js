/**
 * Created by zhangheng on 2016/8/1.
 *
 *  編輯地址界面  省市县  选中地址
 */

import React from "react";
import itemStyles from "../styles/addressItemStyles";


export default class AddressBottomView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listState: this.props.list,
            listItemState: this.props.listItem,

            selectColor: this.props.listItem[this.props.listItem.length-1].textColor,
            selectBg: this.props.listItem[this.props.listItem.length-1].bgColor,

            unSelectColor: null,
            unSelectBg: null
        }
    }




    //选项栏
    chooseItem(index) {
        var colorText = this.state.selectColor;
        var columnList = this.state.listItemState;
        if (columnList[index].textColor != colorText) {
            for (var k = 0; k < columnList.length; k++) {
                if (columnList[k].textColor == colorText) {
                    var obj = columnList[k];
                    columnList[k] = columnList[index];
                    columnList[index] = obj;
                    break;
                }
            }
            if (this.props.updateItemChoosen) {
                this.props.updateItemChoosen(index)
            }
            this.setState({
                listItemState: columnList,
            })
        }
    }


    render() {

        if (this.state.listItemState.length>1){
            itemStyles.unSelectAddressText_P.borderBottomColor = this.state.listItemState[this.state.listItemState.length-2].bgColor;
            itemStyles.unSelectAddressText_P.color = this.state.listItemState[this.state.listItemState.length-2].textColor;
        }


        var selectBg = this.state.selectBg;
        itemStyles.selectAddressText_P.borderBottomColor = selectBg;
        var selectBg_D = itemStyles.selectAddressText_P;
        var unSelectBg_D = itemStyles.unSelectAddressText_P;
        itemStyles.selectAddressText_P.color = this.state.selectColor;



        var _Fthis = this;
        return (
            <div>
                <div style={itemStyles.chooseItem_D}>
                    {
                        this.state.listItemState.map(function (item, index) {

                            var tabButton_D = item.bgColor == selectBg ? selectBg_D : unSelectBg_D;
                            var valueText = _Fthis.state.listState[index];
                            return <p style={tabButton_D}
                                      key={index}
                                      onClick={()=> _Fthis.chooseItem(index)}>{valueText.name}</p>
                        })
                    }
                </div>
                {/*<div style={itemStyles.topLine_D}/>*/}
            </div>
        )
    }
}
