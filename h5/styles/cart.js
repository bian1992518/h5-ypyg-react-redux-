/****购物车****/

const styles = {
	scrollView: {
        height: "10.64rem",
    },
	moneyExceedDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		height: '1.34rem',
		backgroundColor: '#ffffff'
	},
	cart : {
		fontSize : "0.36rem",
		color : "#333333"
	},
	edit : {
		fontSize : "0.28rem",
		color : "#333333",
	},
	cartItems : {
		deleteNext: "true",
		marginTop : "1.1rem",
		marginBottom : "2rem",
	},
	cartItem : {
		marginBottom : "0.2rem",
		borderBottom: '1px solid #dddddd'
	},
	shopping : {
		paddingLeft : "0.3rem",
		paddingRight : "0.3rem",
		display : "flex",
		flexDirection: 'row',
		height : "0.6rem",
		alignItems : "center",
		backgroundColor : "#ffffff",
		borderBottomWidth : '1px',
		borderBottomStyle : "solid",
		borderBottomColor : "#f0f0f0",
	},
	checked : {
		width : "0.32rem",
		height : "0.32rem",
		marginRight : "0.24rem"
	},
	warehouse : {
		fontSize : "0.24rem",
		color: '#333333',
	},
	warehouseMsg : {
	    display: 'flex',
	    backgroundColor: '#ffffff',
	    flexDirection: 'row',
			height: '1.8rem',
	    paddingRight: '0.3rem'
	},
	warehouseMsgItem : {
	    fontSize: '0.24rem',
	    marginTop: '0.24rem',
			color: '#333333'
	},
	shopContent : {
		display: 'flex',
		flexDirection: 'row',
		height: '1.8rem',
		backgroundColor: '#ffffff',
		paddingLeft: '0.3rem',
		paddingRight: '0.3rem',
		borderBottomWidth: '1px',
	  	borderBottomColor: '#eeeeee',
	  	borderBottomStyle : "solid",
	},
	goodCheckDiv : {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	goodCheckImg : {
		height: '0.32rem',
		width: '0.32rem'
	},
	goodImgDiv : {
		display: 'flex',
		flex: 2.5,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	goodBorderDiv: {
		height: '1.2rem',
		width: '1.2rem',
		border: '0.02rem solid #dddddd'
	},
	goodImg : {
		height: '1.2rem',
		width: '1.2rem',
	},
	goodMsgDiv : {
		display: 'flex',
		flex: 6.2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	goodIntro : {
		marginTop: '0.26rem',
		marginRight: '0.5rem',
		fontSize: '0.24rem',
		color: '#333333'
	},
	goodPriceIntroDiv : {
		display: 'flex',
		marginBottom: '0.25rem',
		flexDirection: 'column'
	},
	goodPriceAmountDiv : {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		paddingTop: '0.28rem'
	},
	goodPrice : {
		color: '#ff6700',
		fontSize: '0.24rem'
	},
	goodAmount : {
		color: '#666666',
		fontSize: '0.24rem',
		marginTop: '0.04rem'
	},
	cartAccount : {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'fixed',
		width: '7.2rem',
		bottom: '1rem',
		height: '0.88rem',
		borderTopWidth: '0.02rem',
		borderTopColor: '#eeeeee',
		borderTopStyle: 'solid',
		backgroundColor: '#ffffff',
		paddingLeft: '0.3rem'
	},
	accountLeft : {
		display: 'flex',
		flex: 2.75,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	checkAll : {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	cartTotal : {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: '0.2rem'
	},
	cartTotalBox : {
		display: 'flex',
		flexDirection: 'row'
	},
	cartTotalLeft : {
		color: '#333333',
		fontSize: '0.24rem'
	},
	cartTotalRight : {
		color: '#ff6700',
		fontSize: '0.24rem'
	},
	cartTotalRate : {
		marginTop: '0.1rem',
		color: '#999999',
		fontSize: '0.2rem'
	},
	settleWrap : {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		height: '0.88rem',
		backgroundColor: '#ff6700',
		justifyContent: 'center',
		alignItems: 'center'
	},
	settleInfo : {
		color: '#ffffff',
		fontSize: '0.32rem'
	},
	activityBarDiv: {
		display: 'flex',
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		paddingTop: '0.15rem',
		height: '0.7rem',
		alignItems: 'center',
		paddingLeft: '1rem'
	},
	activityCategoryDiv: {
		display: 'flex',
		flexDirection: 'row',
		height: '0.44rem',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: '0.15rem',
		paddingRight: '0.15rem',
		border: '0.02rem solid #ffa700'
	},
	activityCategoryP: {
		fontSize: '0.24rem',
		color: '#ffa700'
	},
	activityIntroP: {
		marginLeft: '0.2rem',
		fontSize: '0.24rem',
		color: '#ffa700'
	},
	uselessGoodsBarDiv : {
		display: 'flex',
		flexDirection: 'row',
		height: '1.8rem',
		backgroundColor: '#dddddd',
		paddingLeft: '0.2rem',
		paddingRight: '0.3rem',
		borderBottomWidth: '1px',
	  	borderBottomColor: '#eeeeee',
	  	borderBottomStyle : "solid",
	},
	uselessGoodPrice : {
		color: '#333333',
		fontSize: '0.24rem',
		marginTop: '0.4rem',
	},
	uselessBoxDiv: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		height: '0.36rem',
		width: '0.6rem',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '0.04rem',
	},
	uselessContentDiv: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: '0.4rem'
	},
	clearUselessColumn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	uselessClearButtonDiv: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: '0.24rem',
		backgroundColor: '#ffffff',
		height: '0.6rem',
		width: '2.12rem',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '0.08rem',
		border: '0.02rem solid #cccccc'
	},
	editBarDiv: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: '0.30rem'
	},
	editBoxDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		border: '0.02rem solid #cccccc',
		height: '0.56rem',
		width: '0.56rem'
	},
	editNumBoxDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderTop: '0.02rem solid #cccccc',
		borderBottom: '1px solid #cccccc',
		height: '0.56rem',
		width: '0.84rem'
	},
	activityContentView: {
		display: 'flex',
		flexDirection: 'column'
	},
	headerRightView: {
		display: 'flex',
		flex: 1,
		height: '0.88rem',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	wareHouseFooterLeftView: {
		display: 'flex',
		flex: 4.5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	warningImage: {
		height: '0.96rem',
		width: '6.9rem'
	},
	wareHouseFooterRightView: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	noDataContentView: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		deleteNext: "true",
		height: window.innerHeight,
		justifyContent: 'center',
		alignItems: 'center'
	},
	noDataImg: {
		height: '2.4rem',
		width: '2.4rem'
	},
	noDataText: {
		marginTop: '0.32rem',
		fontSize: '0.28rem',
		color: '#999999'
	},
	goShoppingButtonView: {
		display: 'flex',
		marginTop: '0.32rem',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '0.56rem',
		width: '1.56rem',
		backgroundColor: '#ffffff',
		border: '0.02rem solid #cccccc',
		borderRadius: '0.08rem'
	},
	deleteIconImg: {
		height: '0.34rem',
		width: '0.34rem',
		marginTop: '0.24rem'
	},
	cartPageFooter: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'fixed',
		width: '7.2rem',
		bottom: 0,
		height: '0.88rem',
		borderTopWidth: '0.02rem',
		borderTopColor: '#eeeeee',
		borderTopStyle: 'solid',
		backgroundColor: '#ffffff',
		paddingLeft: '0.3rem'
	},
	textStyle1: {
		fontSize: '0.24rem',
		color: '#999999'
	},
	textStyle2: {
		fontSize: '0.24rem',
		color: '#999999',
		marginTop: '0.24rem'
	}
};

module.exports = styles;
