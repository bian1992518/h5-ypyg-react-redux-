/**关注的品牌**/

var styles = {
  scrollView: {
        height: "11.5rem",
    },
	container : {
		display : "flex",
		flexDirection : "column",
    backgroundColor : 'white',
    deleteNext: "true",
		marginTop : '0.88rem',
	},
  brands : {
		display : "flex",
		flexDirection : "row",
    height : "1.3rem",
    alignItems : 'center',
    paddingLeft : '0.3rem',
    paddingRight : '0.3rem',
    borderTop : '0.01rem solid #f3f3f3',
  },
	goodsImg : {
  width : "1rem",
  height : "1rem",
	},
  goodsInfo : {
    flexDirection : "column",
    marginLeft : "0.3rem",
    flex : 1,
  },
	name : {
    marginBottom : "0.1rem",
    fontSize : "0.3rem",
	},
	detail : {
    fontSize : "0.3rem",
    // whiteSpace:'nowrap';
	},
	concern : {
    backgroundColor : "#d4d4d4",
    color : "white",
		textAlign : "center",
    width : "1rem",
    height : "0.5rem",
		fontSize : "0.26rem",
		lineHeight : "0.5rem",
    borderRadius : '0.1rem',
	},
  unconcern : {
    backgroundColor : "#d4d4d4",
    color : "#494949",
		textAlign : "center",
    width : "1rem",
    height : "0.5rem",
		fontSize : "0.26rem",
		lineHeight : "0.5rem",
    borderRadius : '0.1rem',
	},
}

module.exports = styles;
