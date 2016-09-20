/**
 * Created by zhangheng on 2016/8/6.
 */

import React from "react";
import comStyles from "../styles/commentListStyles";
import styles from "../styles/addressListStyles";
import TopTabView from "../components/topTabView";
import footStyles from "../styles/couponListStyles";
import { browserHistory,Link } from 'react-router';
import {imageUrls} from '../special/stringImage';

var listText = ["全部评价", "收到评价"];
var listItemState = [
    {textColor: "#595056", src: "common/images/collect_state_change.png"},
    {textColor: "#9A8994", src: "common/images/collect_state_unchange.png"},
];

var commentList = [
    {
        id: 0,
        productImg: "http://desc.bestinfoods.com/items/2016-07-22/5791f2a8be54f.jpg",
        productDes: "挪威进口挪特24三文鱼油软胶囊180粒",
        content: "非常好的一个鱼油",
        commentTime: "2016-05-30",
        praiseNumb: 10,
        isPraise:true
    },
    {
        id: 1,
        productImg: "http://desc.bestinfoods.com/items/2016-06-28/57721e76309ad.jpg",
        productDes: "青木瓜复合维生素150粒/瓶",
        content: "非常好的一个东西，吃完之后，感觉自己萌萌哒！",
        commentTime: "2016-05-25",
        praiseNumb: 1,
        isPraise:false
    },
    {
        id: 2,
        productImg: "http://desc.bestinfoods.com/items/349/56da50605a9db.jpg",
        productDes: "荷兰进口Nutrilon牛栏婴儿奶粉3段800克/罐",
        content: "小孩吃的，一直都是吃的这个",
        commentTime: "2016-05-23",
        praiseNumb: 6,
        isPraise:false
    },
    {
        id: 3,
        productImg: "http://desc.bestinfoods.com/items/2016-06-28/57721e76309ad.jpg",
        productDes: "元气青木瓜口服液 10瓶/盒",
        content: "下次再买一瓶",
        commentTime: "2016-05-20",
        praiseNumb: 1,
        isPraise:false
    },
    {
        id: 4,
        productImg: "http://desc.bestinfoods.com/items/2016-07-22/5791f2a8be54f.jpg",
        productDes: "挪威进口挪特24三文鱼油软胶囊180粒",
        content: "效果很棒",
        commentTime: "2016-05-15",
        praiseNumb: 9,
        isPraise:false
    },
    {
        id: 5,
        productImg: "http://desc.bestinfoods.com/items/2016-07-22/5791f2a8be54f.jpg",
        productDes: "挪威进口挪特24三文鱼油软胶囊180粒",
        content: "家里人都很喜欢",
        commentTime: "2016-05-10",
        praiseNumb: 18,
        isPraise:false
    }
];


export default class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentList: commentList
        }
    }


    //是否点赞
    _isDefaultAddress(index) {

        let isFalse;
        var list = this.state.commentList;

        if(!list[index].isPraise){
            list[index].isPraise = true;
            list[index].praiseNumb++;

            this.setState({
                commentList: list
            });
        }
    }

    //选中tab
    chooseItem(index){

    }


    render() {
        var _newThis = this;
        return (
            <div style={comStyles.topView_D}>
                <div style={styles.navColumn_D}>
                    <button onClick={() => browserHistory.goBack()}>
                        <img src="common/images/icon_left_arrow.png" style={styles.back_I}/>
                    </button>
                    <p style={comStyles.tabText_P}>我的评论</p>
                    <p style={styles.addressDetailSave_S}> </p>
                </div>
                <div style={styles.line_D}></div>

                <div style={footStyles.topTab_D}>
                    <TopTabView
                        listItem={listItemState}
                        list={listText}
                        updateItemChoosen={(index) => this.chooseItem(index)}
                    />
                </div>
                <div style={footStyles.topLine_D}/>

                <scrollView style={styles.scrollView} >
                <div style={footStyles.couponList_D}>
                    {
                        commentList.map(function (commentItem, index) {

                            return <div style={comStyles.topView_D} key={index}>
                                <div style={comStyles.firstColumn_D}>
                                    <img src={commentItem.productImg} style={comStyles.firstImg_I}/>
                                    <p style={comStyles.firstText_P}>{commentItem.productDes}</p>
                                </div>
                                <p style={comStyles.secondText_P}>{commentItem.content}</p>
                                <p style={comStyles.thirdText_P}>{commentItem.commentTime}</p>
                                <div style={comStyles.fourPraise_D}
                                     onClick={() => _newThis._isDefaultAddress(index)}>
                                    <img src={ commentItem.isPraise ? imageUrls.commentIconDown : imageUrls.commonIcon} 
                                        style={comStyles.fourPraiseImg_I}/>
                                    <p style={comStyles.fourPraiseText_P}>{commentItem.praiseNumb}</p>
                                </div>
                                <div style={comStyles.DivisionLine_D}></div>
                            </div>
                        })
                    }
                </div>
                </scrollView>
            </div>
        )
    }
}