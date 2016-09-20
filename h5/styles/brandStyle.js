/********品牌页/活动列表页样式********/

var styles = {
	header : {
		backgroundColor : "#fff",
		display : "flex",
		flexDirection : "row",
		alignItems : "center",
		height : "0.88rem",
		paddingLeft : "0.3rem",
		paddingRight : "0.3rem"
	},
	lArrow : {
		height : "0.44rem",
		width : "0.22rem"
	},
	headerInfo : {
		flex :1,
		textAlign : "center",
		fontSize : "0.36rem"
	},
	shareBox : {
		flex : 1,
		display : "flex",
		justifyContent : "flex-end"
	},
	share : {
		height : "0.36rem",
		width : "0.36rem"
	},
	banner : {
		width : "7.5rem",
		height : "3.75rem"
	},
	barImg : {
		marginTop : "0.88rem"
	},
	brandDetail : {
		backgroundColor : "#fff",
		marginBottom : "0.2rem"
	},
	brandInfo : {
		position : "relative",
	},
	brandWrap : {
		paddingLeft : "2.5rem"
	},
	brandLogo : {
		position : "absolute",
		width : "1.8rem",
		height : "1.8rem",
		left : '0.3rem',
		top : '-0.9rem'
	},
	brandName : {
		fontSize : "0.28rem",
		lineHeight : "0.6rem"
	},
	brandMsg : {
		display : "flex",
		flexDirection : "row",
		alignItems : "center"
	},
	brandFlag : {
		width : "0.32rem",
		height : "0.32rem"
	},
	country : {
		color : "#999999",
		fontSize : "0.24rem",
		marginLeft : "0.1rem"
	},
	brandIntro : {
		paddingBottom: "0.1rem",
		paddingTop: "0.2rem",
		paddingLeft: "0.3rem",
		paddingRight: "0.3rem",
		lineHeight : "0.3rem",
	},
	ellipsis : {
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
	expand : {
		display : "flex",
		flexDirection : "row",
		justifyContent : "center",
		paddingBottom : "0.1rem",
		height : "0.28rem",
		alignItems : "center",
	},
	expandArow : {
		width : "0.28rem",
		height : "0.14rem",
		transition : "all 0.5s"
	},
	tansform : {
		transform : "rotate(180deg)"
	},
	hotTitle : {
		fontSize : "0.26rem",
		paddingLeft : "0.3rem",
		height : "0.6rem",
		display : "flex",
		alignItems : "center",
		borderBottom : "0.03rem solid #f5f5f5",
		marginBottom : "0.2rem"
	},
	hotShopInfo : {
		width : "2.5rem",
	},
	activeName : {
		width : "1rem"
	},
	hotShopImg : {
		width : "2.5rem",
		height : "2.5rem"
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
	gived : {
		width : "0.9rem",
		height : "0.9rem",
		position : "absolute",
		left : "0",
		top : "0",
		zIndex : "998"
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
	allGoods : {
		backgroundColor : "#ffffff"
	},
	order : {
		display : "flex",
		flexDirection : "row",
		height : "0.6rem",
		alignItems : "center",
		marginTop : "-0.3rem",
	},
	orderItems : {
		flex : "1",
		textAlign : "center",
		fontSize : "0.26rem",
		display : "flex",
		alignItems : "center",
		justifyContent : "center"
	},
	orderImg : {
		width : "0.08rem",
		height : "0.16rem",
		marginLeft : "0.1rem"
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
		textAlign : "center",
		color : "#ffffff"
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
	shopImg : {
		width : "3.6rem",
		height : "3.6rem"
	}

};

module.exports = styles;