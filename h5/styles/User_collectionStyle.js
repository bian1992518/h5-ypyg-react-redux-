var styles = {
  scrollView : {
		height : '11.44rem',
	},
	container : {
		display : 'flex',
		flexDirection : 'column',
		width : '7.5rem',
		marginTop : '0.88rem',
    backgroundColor : '#f3f3f3',
	},
  listView : {
		display : "flex",
    flexDirection : 'row',
    marginTop : '0.2rem',
    flexWrap : 'wrap',
  },
	goodsItem : {
		display : "flex",
    flexDirection : 'column',
		width : "3.6rem",
    position : 'relative',
    alignItems : 'center',
    backgroundColor : 'white',
    marginLeft : '0.1rem',
    marginBottom : '0.1rem',
	},
  goodsImg : {
    height : '2.12rem',
    width : '2.4rem',
    marginTop : '0.6rem',
    marginBottom : '0.88rem',
  },
  overflowView : {
    display : 'flex',
    position : 'absolute',
    top : '0.92rem',
    left : '0.9rem',
    height : '1.8rem',
    width : '1.8rem',
    borderRadius : '0.9rem',
    overflow : 'hidden',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'rgba(0,0,0,0.50)',
  },
  goodsState : {
    fontSize : '0.28rem',
    color : 'white',
  },
  goodsName : {
		fontSize : "0.2rem",
		color : "#333333",
    marginLeft : '0.2rem',
    marginRight : '0.2rem',
    alignSelf : 'flex-start',
	},
  priceView : {
    display : 'flex',
    flexDirection : 'row',
    marginTop : '0.12rem',
    marginBottom : '0.12rem',
    alignSelf : 'flex-start',
  },
	price : {
		fontSize : "0.24rem",
		color : "#ff6700",
		marginLeft : "0.2rem",
	},
	delPrice : {
		textDecoration : "line-through",
		fontSize : "0.2rem",
		transform : "scale(0.9)",
		marginLeft : "0.2rem",
		color : "#999999"
	},
}
module.exports = styles;
