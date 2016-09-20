/*********搜索样式*********/



var styles = {
	header : {
		backgroundColor : "#fff",
		display : "flex",
		flexDirection : "row",
		alignItems : "center",
		height : "0.88rem",
		paddingLeft : "0.3rem",
		paddingRight : "0.3rem",
		borderBottom : "0.02rem solid #f5f5f5"
	},
	lArrow : {
		height : "0.44rem",
		width : "0.22rem"
	},
	dArrow : {
		width : "0.3rem",
		height : "0.15rem",
		marginLeft : "0.1rem",
		transition : "all 0.3s"
	},
	headerInfo : {
		flex :1,
		textAlign : "center",
		fontSize : "0.36rem"
	},
	searchBox : {
		display : "flex",
		flex : 1,
		justifyContent : "flex-end"
	},
	search : {
		height : "0.36rem",
		width : "0.36rem"
	},
	orderName : {
		fontSize : "0.26rem",
		height : "0.3rem"
	},
	orderActive : {
		fontSize : "0.26rem",
		height : "0.3rem",
		color : "#ff6700"
	},
	allBrand : {
		flex : "1",
		display : "flex",
		alignItems : "center",
		justifyContent : "center",
		height : "0.6rem",
		borderLeft : "0.03rem solid #f5f5f5",
	},
	tansform : {
		transform : "rotate(180deg)"
	},
	shopName : {
		lineHeight : "0.5rem",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		fontSize : "0.26rem"
	},
	shopPrice : {
		display : "flex",
		flexDirection : "row",
		lineHeight : "0.6rem"
	},
	price : {
		fontSize : "0.24rem",
		color : "#ff6700"
	},
	delPrice : {
		textDecoration : "line-through",
		transform : "scale(0.9)",
		marginLeft : "0.2rem",
		color : "#999999"
	},
	goodsBox : {
		marginTop : "1.48rem"
	},
	allGoods : {
		backgroundColor : "#ffffff",
		borderBottom : "0.02rem solid #f5f5f5",
		position : "fixed",
		top : "0.88rem",
		width : "7.5rem",
		zIndex : "999"
	},
	order : {
		display : "flex",
		flexDirection : "row",
		height : "0.6rem",
		alignItems : "center",
	},
	orderItems : {
		flex : "1",
		fontSize : "0.26rem",
		display : "flex",
		alignItems : "center",
		justifyContent : "center",
		height : "0.6rem"
	},
	orderImg : {
		width : "0.2rem",
		height : "0.2rem",
		marginLeft : "0.1rem"
	},
	shopItems : {
		display : "flex",
		flexDirection : "row",
		flexWrap : "wrap",
		marginLeft : "0.1rem",
		paddingBottom : "0.1rem"
	},
	shopBox : {
		paddingLeft : "0.1rem",
		paddingRight : "0.1rem"
	},
	shopItem : {
		width : "3.6rem",
		backgroundColor : "#ffffff",
		marginRight : "0.1rem",
		marginTop : "0.1rem",
		position : "relative"
	},
	activity : {
		position : "absolute",
		zIndex : "998",
		top : "0.1rem",
		right : "0",
		lineHeight : "0.3rem",
		color : "#ffffff",
		display : "flex",
		flexDirection : "row"
	},
	activities : {
		width : "0.6rem",
		height : "0.6rem",
		backgroundColor : "#ffa700",
		fontSize : "0.24rem",
		marginRight : "0.05rem",
		padding : "0.05rem",
		position : "absolute",
		top : "0",
		right : "0",
		display : "flex",
		flexDirection : "row",
		justifyContent : "center",
		alignItems : "center",
		color : "#ffffff"
	},
	gived : {
		width : "0.9rem",
		height : "0.9rem",
		position : "absolute",
		left : "0",
		top : "0",
		zIndex : "998"
	},
	shopImg : {
		width : "3.6rem",
		height : "3.6rem"
	},
	cart : {
		position : "fixed",
		right : "0.3rem",
		bottom : "0.6rem",
		zIndex : "999"
	},
	cartBox : {
		position : "relative"
	},
	cartImg : {
		width : "0.88rem",
		height : "0.88rem"
	},
	cartNum : {
		width : "0.32rem",
		height : "0.32rem",
		borderRadius : "0.32rem",
		border : "0.02rem solid #ff6700",
		position : "absolute",
		top : "0.1rem",
		right : "0.1rem",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		backgroundColor : "#ffffff",
		color : "#ff6700"
	},
	brandsName : {
		backgroundColor : "#ffffff",
		maxHeight : "10rem",
		overflow : "scroll"
	},
	allName : {
		display : "flex",
		height : "0.8rem",
		alignItems : "center",
		borderBottom : "0.02rem solid #f5f5f5",
		paddingLeft : "0.3rem",
		fontSize : "0.24rem",
		color : "#999999"
	},
	name : {
		display : "flex",
		height : "0.8rem",
		alignItems : "center",
		borderBottom : "0.02rem solid #f5f5f5",
		paddingLeft : "0.3rem",
		fontSize : "0.24rem"
	},
	nameToggle : {
		display : "flex",
		justifyContent : "center",
		height : "0.56rem",
		alignItems : "center",
		backgroundColor : "#ffffff"
	},
	toggleImg : {
		width : "0.56rem",
		height : "0.2rem",
	},
	hide : {
		display : "none "
	},
	show : {
		display : "block"
	}

};


module.exports = styles;