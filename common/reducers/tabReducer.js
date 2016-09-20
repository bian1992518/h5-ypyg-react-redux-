'use strict';

import { TAB_SETTING_CLICK, TAB_HOME_CLICK, TAB_SHOP_CLICK, TAB_CLASSIFY_CLICK } from "../contants/constants";
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  homeTabimg: "common/images/ic_tb_Homed@3x.png",
  classifyTabimg: "common/images/ic_tb_Cate@3x.png",
  shopTabimg: "common/images/ic_tb_Cart@3x.png",
  setTabimg: "common/images/ic_tb_User@3x.png"
}

export default function update(state = initialState, action) {
	switch(action.type) {
		case TAB_HOME_CLICK :
			return merge({}, state, {
        homeTabimg: "common/images/ic_tb_Homed@3x.png",
        classifyTabimg: "common/images/ic_tb_Cate@3x.png",
        shopTabimg: "common/images/ic_tb_Cart@3x.png",
        setTabimg: "common/images/ic_tb_User@3x.png"
			})
		case TAB_CLASSIFY_CLICK :
			return merge({}, state, {
        homeTabimg: "common/images/ic_tb_Home@3x.png",
        classifyTabimg: "common/images/ic_tb_Cated@3x.png",
        shopTabimg: "common/images/ic_tb_Cart@3x.png",
        setTabimg: "common/images/ic_tb_User@3x.png"
			})
		case TAB_SHOP_CLICK :
			return merge({}, state, {
        homeTabimg: "common/images/ic_tb_Home@3x.png",
        classifyTabimg: "common/images/ic_tb_Cate@3x.png",
        shopTabimg: "common/images/ic_tb_Carted@3x.png",
        setTabimg: "common/images/ic_tb_User@3x.png"
			})
		case TAB_SETTING_CLICK :
			return merge({}, state, {
        homeTabimg: "common/images/ic_tb_Home@3x.png",
        classifyTabimg: "common/images/ic_tb_Cate@3x.png",
        shopTabimg: "common/images/ic_tb_Cart@3x.png",
        setTabimg: "common/images/ic_tb_Usered@3x.png"
			})
		default :
			return state;
	}
}
