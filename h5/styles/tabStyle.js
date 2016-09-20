/****** tab ******/
var styles = {
	tab : {
		display : "flex",
		position : "fixed",
		flexDirection: 'row',
		zIndex: 999,
		bottom : "0",
		width : "7.5rem",
		height : "0.98rem",
		alignItems : "center",
		backgroundColor : "#ffffff",
		borderTop: "1px solid #eee"
	},
	tabItems : {
		display : "-webkit-flex",
		display : "-moz-flex",
		display : "flex",
		flexDirection: 'row',
		flex : 1,
		justifyContent : "center",
	},
	tabImg : {
		marginTop : '0.14rem',
		width : "0.44rem",
		height : "0.74rem"
	},
	tabImgBigger : {
		marginTop : '0.14rem',
		width : "0.6rem",
		height : "0.74rem"
	}
}


module.exports = styles;
