/**关注的品牌**/

var styles = {
  scrollView: {
        height: "11.5rem",
    },
	container : {
		display : "flex",
		flexDirection : "column",
    width : '7.5rem',
    deleteNext: "true",
    marginTop : '1.68rem',
	},
  segmentBar : {
    display : 'flex',
    position : 'fixed',
    top : '0.88rem',
    flexDirection : "row",
    height : "0.84rem",
    width : '7.5rem',
    borderTop : '0.01rem solid #eee',
    borderBottom : '0.01rem solid #eee',
  },
  btnView : {
    display : 'flex',
    flexDirection : 'column',
    flex : 1,
    alignItems : 'center',
    backgroundColor : 'white',
  },
	collect : {
    color : "#494949",
		textAlign : "center",
    height : "0.84rem",
		fontSize : "0.34rem",
    lineHeight : "0.8rem",
	},
  uncollect : {
    color : "gray",
		textAlign : "center",
    height : "0.84rem",
		fontSize : "0.34rem",
    lineHeight : "0.8rem",
	},
  line : {
    backgroundColor : 'black',
    height : '0.05rem',
    width : '0.8rem',
    borderRadius : '0.015rem',
  },
  list : {
    display : 'flex',
    flexDirection : 'column',
  },
  goodsCell : {
    display : 'flex',
    height : '1.8rem',
    flexDirection : 'row',
    padding : '0.3rem',
    backgroundColor : 'white',
    borderBottom : '1px solid #eee'
  },
  goodsImg : {
    height : '1.8rem',
    width : '1.8rem',
  },
  goodsInfo : {
    display : 'flex',
    flexDirection : 'column',
		flex : 1,
    height : '1.8rem',
		marginLeft : '0.2rem',
    justifyContent : 'space-around',
  },
  goodsTitle : {
    fontSize : '0.28rem',
    color : 'black',
  },
  goodsCount : {
    fontSize : '0.3rem',
    color : 'red',
  },
}

module.exports = styles;
