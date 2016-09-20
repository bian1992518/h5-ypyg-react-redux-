/**
 * Created by zhangheng on 2016/8/1.
 */

import React from 'react';
import footStyles from "../styles/couponListStyles";

export default class TopTabView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listState: this.props.list,
            listItemState: this.props.listItem,

            selectColor: this.props.listItem[0].textColor,
            unSelectColor: this.props.listItem[1].textColor,
            selectBg: this.props.listItem[0].bgColor,
            unSelectBg: this.props.listItem[1].bgColor
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

        var selectBg = this.state.selectBg;
        footStyles.topTabButton.width = (7.5 / this.state.listState.length) + "rem";
        footStyles.topTabButton.borderBottomColor = selectBg;
        var selectBg_D = footStyles.topTabButton;
        footStyles.selectTopTabButton.width = (7.5 / this.state.listState.length) + "rem";
        footStyles.selectTopTabButton.borderBottomColor = this.state.unSelectBg;
        var unSelectBg_D = footStyles.selectTopTabButton;

        var selectColor = this.state.selectColor;
        footStyles.tabTopButton.color = selectColor;
        var selectText  = footStyles.tabTopButton;
        footStyles.unSelectTabTopButton.color = this.state.unSelectColor;
        var unSelectText  = footStyles.unSelectTabTopButton;


        var _Fthis = this;
        return (
            <div>
                <div style={footStyles.topTabView_D}>
                    {
                        this.state.listItemState.map(function (columnItem, index) {

                            var tabButton_D = columnItem.bgColor == selectBg ? selectBg_D : unSelectBg_D;
                            var textColor = columnItem.textColor == selectColor ? selectText : unSelectText;
                            var columnText = _Fthis.state.listState[index];
                            return <div style={tabButton_D} key={index}
                                        onClick={()=> _Fthis.chooseItem(index)}
                            >
                                <button style={textColor}>{columnText}</button>
                            </div>
                        })
                    }
                </div>
                <div style={footStyles.topLine_D}/>
            </div>
        )
    }
}
