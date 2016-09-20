var styles = {
  boss_div: {
    background: "#fff"
  },
  navigationBar:{
    position : "fixed",
    top : 0,
    height : "0.88rem",
    background: "#fff",
    borderBottom : '0.01rem solid #eee',
    width: "7.5rem",
    zIndex: 9999,
    display: 'flex',
    alignItems : "center",
    flexDirection: "row",  
    paddingLeft: '0.3rem',
    paddingRight: "0.3rem"
  },
  category_img: {
    height: "0.4rem",
    width: "0.4rem",
    marginLeft: "0.3rem"
  },
  category_font: {
    marginTop: '0.1rem',
  },
  search_nav: {
    display: "flex",
    flexDirection: 'row',
    opacity: 0.7,
    width: '6.2rem',
    background: "#f0f0f0",
    height: "0.56rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "0.08rem"
  },
  search_Image:{
    marginLeft: '0.18rem',
    height: "0.32rem",
    width: "0.32rem"
  },
	container : {
		width : "7.5rem",
    deleteNext: "true",
		marginBottom : "1rem",
    deleteNext: "true",
    marginTop: "1rem"
	},
	activity_image : {
		  "height" : "3.76rem",
		  "width" : "7.5rem",
	},
  graydiv: {
    background: "#f0f0f0",
    height: "0.2rem",
  },
	categorys_div : {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    overflowX: "auto",
    overflowY: "hidden",
    height: "1.2rem",
    justifyContent: "space-around",
    borderBottom: "10px solid #f0f0f0"
	},
	category_item : {
		width: "1.8rem",
		height: "0.34rem"
	},
  category_text: {
    fontSize: 12,
    width: "1.4rem",
    color: "#333",
    textAlign: "center"
  },
  scrollView: {
    height: "11.34rem",
  },
	listview: {
    	backgroundColor: '#fff',
  	},
  	header: {
    	height: 40,
    	width: '7.5rem',
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: '#3B5998',
    	flexDirection: 'row',
  	},
  	text: {
    	color: 'white',
    	paddingHorizontal: 8,
  	},
  	rowText: {
    	color: '#888888',
  	},
  	thumbText: {
    	fontSize: 20,
    	color: '#888888',
  	},
    segemnt_bar: {
      height: "4.8rem",
      width: "3.6rem",
      display: "flex",
      flexDirection: "column",
      marginTop: "0.1rem",
      background: "#fff"
    },
    segemnt_bar_right : {
      height: "4.8rem",
      width: "3.6rem",
      marginTop: "0.1rem",
      background: "#fff",
      marginRight: "0.1rem"
    },
    goodImage: {
      height: "3.6rem",
      width: "3.6rem",
    },
    bottom_segment : {
      height: "1rem",
      width: "3.6rem",
      background: "#fff"
    },
    goodListContainer: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      flexWrap: "wrap",
      background: "#f0f0f0",
      padding: "0 3px 0 3px",
      borderBottom: "10px solid #f0f0f0"
    },
    good_title: {
      fontSize: 10,
      color: "#333",
      marginTop: "0.06rem",
      marginRight: "0.2rem",
      marginLeft: "0.2rem"
    },
    price_bar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: "0.06rem",
      marginLeft: "0.24rem"
    },
    good_price: {
      fontSize: 12,
      color: "#ff6700",
    },
    good_oldprice: {
      fontSize: 10,
      color: "#999",
      marginLeft: "0.16rem",
      textDecoration: "line-through"
    }
}

module.exports =  styles;