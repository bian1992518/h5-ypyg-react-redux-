/**
 * 订单详情属性  罗晓锋
 */

 var styles = {
   scrollView : {
     height : '11.56rem',
   },
   viewDirection : {
     flexDirection : 'column',
   },
   container : {
     display : 'flex',
     flexDirection : 'column',
     width : '7.5rem',
     marginTop : '0.88rem',
     marginBottom : '0.9rem',
   },
   navRightView : {
     display : 'flex',
     flex : 1,
     alignItems : 'center',
     height : '0.88rem',
     justifyContent : 'flex-end',
   },
   sharedImg : {
     height : '0.36rem',
     width : '0.36rem',
   },
   collectView : {
     display : 'flex',
     flex : 1,
     justifyContent : 'flex-end',
   },
   collectionImg : {
     height : '0.36rem',
     width : '0.4rem',
     marginRight : '0.3rem',
   },
   goodsImgsView : {
     display : 'flex',
     flex : 1,
     flexDirection : 'column',
     alignItems : 'center',
     height : '5.2rem',
     backgroundColor : 'white',
     borderTop : '0.18rem solid #f3f3f3',
   },
   backImgView : {
     display:'flex',
     width:'3.5rem',
     height : '4.5rem',
     marginTop : '0.6rem',
     justifyContent : 'center',
   },
   goodsImg : {
     width : '3.5rem',
     height : '3.5rem',
     resizeMode : 'contain',
   },
   contentDetailView : {
     display : 'flex',
     alignSelf : 'flex-end',
     width : '0.88rem',
     height : '0.88rem',
     marginRight : '0.3rem',
     marginTop : '-1.8rem',
     border : '0.01rem solid #cccccc',
     borderRadius : '0.44rem',
     overflow:'hidden',
     overflow : 'hidden',
     alignItems : 'center',
     justifyContent : 'center',
     zIndex: 999,
     backgroundColor : 'white',
   },
   contentDetailFont : {
     width : '0.58rem',
     textAlign : 'center',
     fontSize : '0.24rem',
     color : '#333333',
   },
   goodsInfoView : {
     display : 'flex',
     flexDirection : 'column',
     backgroundColor : 'white',
   },
   priceView : {
     display : 'flex',
     flexDirection : 'row',
     height : '0.88rem',
     alignItems : 'center',
   },
   priceFont : {
     color : '#ff6700',
     fontSize : '0.44rem',
     marginLeft : '0.3rem',
   },
   originalPriceFont : {
     color : '#999999',
     fontSize : '0.24rem',
     marginLeft : '0.3rem',
     textDecoration : 'line-through',
   },
   speLine : {
     marginLeft : '0.3rem',
     marginRight : '0.3rem',
     height : '0.01rem',
     backgroundColor : '#f3f3f3',
   },
   goodsTitleFont : {
     marginLeft : '0.3rem',
     marginRight : '0.3rem',
     marginTop : '0.32rem',
     fontSize : '0.28rem',
     color : '#333333',
   },
   goodsBriefly : {
     marginLeft : '0.3rem',
     marginRight : '0.3rem',
     marginTop : '0.08rem',
     marginBottom : '0.08rem',
     fontSize : '0.24rem',
     color : '#666666',
     lineHeight : '0.34rem',
   },
   goodsBrandStorehouse : {
     display : 'flex',
     flexDirection : 'row',
     alignItems : 'center',
     height : '0.78rem',
   },
   brandImg : {
     height : '0.32rem',
     width : '0.32rem',
     marginLeft : '0.3rem',
   },
   brandFont : {
     color : '#999999',
     fontSize : '0.24rem',
     marginLeft : '0.3rem',
   },
   costView : {
     flexDirection : 'column',
     borderTop : '0.18rem solid #f3f3f3',
     borderBottom : '0.2rem solid #f3f3f3',
     backgroundColor : 'white',
   },
   costCell : {
     display : 'flex',
     flexDirection : 'row',
     height : '0.88rem',
     width : '7.5rem',
     alignItems : 'center',
     justifyContent : 'space-between',
     borderTop : '0.01rem solid #f3f3f3',
   },
   costFont : {
     color : '#333333',
     fontSize : '0.28rem',
     marginLeft : '0.3rem',
   },
   goRightImg : {
     height : '0.28rem',
     width : '0.14rem',
     marginRight : '0.3rem',
   },
   dragTopCell : {
     display : 'flex',
     flexDirection : 'row',
     height : '0.88rem',
     alignItems : 'center',
     justifyContent : 'center',
     backgroundColor : 'white',
   },
   dragImg : {
     height : '0.14rem',
     width : '0.28rem',
     marginRight : '0.08rem',
   },
   dragFont : {
     marginRight : '0.08rem',
     fontSize : '0.24rem',
     color : '#333333',
   },
   toolBar : {
     display : 'flex',
     height : '0.88rem',
     flexDirection : 'row',
     position : 'fixed',
     bottom : '0rem',
     borderTop : '0.01rem solid #f3f3f3',
     width : '7.5rem',
     backgroundColor : 'white'
   },
   funView : {
     display : 'flex',
     position : 'relative',
     height : '0.88rem',
     width : '1.36rem',
     flexDirection : 'column',
     borderRight : '0.01rem solid #f3f3f3',
     alignItems : 'center',
     justifyContent : 'center',
   },
   funImg : {
     height : '0.36rem',
     width : '0.36rem',
   },
   funFont : {
     marginTop : '0.01rem',
     fontSize : '0.2rem',
     color : '#999999',
   },
   cartNumView : {
     display : 'flex',
     position : 'absolute',
     height : '0.3rem',
     width : '0.3rem',
     borderRadius : '0.18rem',
     overflow : 'hidden',
     bottom : '0.5rem',
     marginLeft : '0.8rem',
     border : '0.01rem solid #ff6700',
     alignItems : 'center',
     justifyContent : 'center',
     backgroundColor : 'white'
   },
   cartNumFont : {
     fontSize : '0.2rem',
     color : '#ff6700',
   },
   addCartsView : {
     display : 'flex',
     flex : 1,
     backgroundColor : '#ffa700',
     height : '0.88rem',
     alignItems : 'center',
     justifyContent : 'center',
   },
   addCartsFont : {
     color : '#ffffff',
     fontSize : '0.32rem',
   },
   immPaidView : {
     display : 'flex',
     flex : 1,
     backgroundColor : '#ff6700',
     height : '0.88rem',
     alignItems : 'center',
     justifyContent : 'center',
   },
   noStock : {
     display : 'flex',
     flexDirection : 'row',
     flex : 1,
     backgroundColor : '#999999',
     height : '0.88rem',
     alignItems : 'center',
     justifyContent : 'center',
   },
   toastView : {
     display: 'flex',
     flexDirection: 'column',
     position: 'fixed',
     top: '0rem',
     height: '13.34rem',
     width: '7.5rem',
     zIndex: 10001
   },
   shadowView: {
     display: 'flex',
     flex : 1,
     backgroundColor: '#000000',
     opacity:0.3,
   },
   alertView : {
     display: 'flex',
     flexDirection: 'column',
     width: '7.5rem',
     height : '3.36rem',
     backgroundColor: '#ffffff',
   },
   alertName : {
     display : 'flex',
     flexDirection: 'row',
     height : '0.88rem',
     alignItems : 'center',
     justifyContent : 'space-between',
     borderBottom : '0.01rem solid #f3f3f3',
   },
   alertDelView : {
     height : '0.88rem',
     width : '0.9rem',
     alignItems : 'center',
     justifyContent : 'center',
   },
   alertDelImg : {
     height : '0.3rem',
     width : '0.3rem',
   },
   alertDetailView : {
     marginTop : '0.32rem',
     marginBottom : '0.54rem',
     marginRight : '0.3rem',
     marginLeft : '0.3rem',
     flexDirection : 'row',
   },
   alertBlackFont : {
     fontSize : '0.24rem',
     color : '#333333',
   },
   alertGrayFont : {
     fontSize : '0.24rem',
     color : 'gray',
     lineHeight : '0.35rem',
   },
   directPaidView : {
     display: 'flex',
     flexDirection: 'column',
     width: '7.5rem',
     height : '5.4rem',
     backgroundColor: '#ffffff',
   },
   directPaidAmount : {
     display: 'flex',
     flexDirection: 'row',
     justifyContent : 'space-between',
     height : '1.8rem',
   },
   directPaidPriceFont : {
     color : '#ff6700',
     fontSize : '0.44rem',
     marginTop : '0.6rem',
   },
   directPaidNumView : {
     display : 'flex',
     flexDirection: 'row',
     height : '1.04rem',
     alignItems : 'center',
     justifyContent : 'space-between',
     borderTop : '0.01rem solid #f3f3f3',
   },
   directPaidChangeNumView: {
 		display: 'flex',
 		flexDirection: 'row',
 		marginRight: '0.30rem',
		border: '0.01rem solid #cccccc',
 	},
  directPaidChangeNumBtn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '0.56rem',
		width: '0.56rem'
	},
  directPaidChangeNumBtnFont : {
		color: '#333333',
		fontSize: '0.24rem'
	},
  directPaidChangeNumBtnMin : {
    color: '#dddddd',
		fontSize: '0.24rem'
  },
  directPaidChangeNumBoxDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '0.56rem',
		width: '0.84rem',
		borderLeft: '0.01rem solid #cccccc',
		borderRight: '0.01rem solid #cccccc',
	},
  directPaidTaxMoneyFont : {
    color : '#999999',
    fontSize : '0.28rem',
    marginRight : '0.3rem',
  },
  directPaidBtnView : {
    display : 'flex',
    height : '1.68rem',
    justifyContent : 'center',
    alignItems : 'center',
		borderTop: '0.01rem solid #f3f3f3',
  },
  directPaidBtn : {
    height : '0.88rem',
    width : '6.9rem',
    borderRadius : '0.1rem',
    backgroundColor : '#ff6700',
  },
 }
module.exports = styles;
