import React, {
  PropTypes,
} from 'react';
import {
  	View,
  	Image,
  	Text,
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconImage: PropTypes.string,
};

const selectedIcons = {
	"首页" : "../../common/images/ic_tb_Homed@2x.png",
	"分类": "../../common/images/ic_tb_Cated@2x.png",
	"购物车" : "../../common/images/ic_tb_Carted@2x.png",
	"我的" : "../../common/images/ic_tb_Usered@2x.png"
}

const normalIcons = {
	"首页" : "../../common/images/ic_tb_Home@2x.png",
	"分类": "../../common/images/ic_tb_Cate@2x.png",
	"购物车" : "../../common/images/ic_tb_Cart@2x.png",
	"我的" : "../../common/images/ic_tb_User@2x.png"
}

function renderImage(selected, title) {
	switch(title) {
		case "首页": {
			if (selected) {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_Homed@2x.png")}/>
			}else {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_Home@2x.png")} />
			}
		}
		case "分类": {
			if (selected) {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_Cated@2x.png")}/>
			}else {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_Cate@2x.png")} />
			}
		}
		case "购物车": {
			if (selected) {
				return <Image style={{height:37,width:30}} source={ require("../../common/images/ic_tb_Carted@2x.png")}/>
			}else {
				return <Image style={{height:37,width:30}} source={ require("../../common/images/ic_tb_Cart@2x.png")}/>
			}
		}
		case "我的": {
			if (selected) {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_Usered@2x.png")}/>
			}else {
				return <Image style={{height:37,width:22}} source={ require("../../common/images/ic_tb_User@2x.png")}/>
			}
		}
	}
}

const TabIcon = (props) => {
	// const iconURL = props.selected ? selectedIcons[props.title] : normalIcons[props.title];
	// alert(iconURL);
	return (
  		<View style={{flexDirection: "column",justifyContent:"center",alignItems:"center"}}>
  			{renderImage(props.selected, props.title)}
  	 		{/*<Text style={{ color: props.selected ? 'red' : 'black', fontSize:13,marginTop: 2}} >
  	 		    			{props.title}
  	 		  			</Text>*/}
  		</View>
 
	);
}

TabIcon.propTypes = propTypes;

export default TabIcon;