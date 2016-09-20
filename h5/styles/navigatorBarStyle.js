/**
 * Created by zhangheng on 2016/8/2.
 */

var styles = {
  navigatorBar : {
    display : "flex",
    height : "0.88rem",
    width : "7.5rem",
    alignItems : "center",
    justifyContent : "space-between",
    position : "fixed",
    top : '0rem',
    background : "white",
    flexDirection : "row",
    zIndex: 999,
    borderBottom : '0.01rem solid #dddddd',
  },
  navLeftView : {
    display : 'flex',
    marginLeft : '0.2rem',
    height : '0.44rem',
    width : '1.3rem',
  },
  navBack : {
      width : "0.22rem",
      height : "0.44rem",
  },
  navTitle : {
      fontSize : "0.36rem",
      fontColor : "#333333",
  },
  navRightView : {
    display : 'flex',
    flexDirection : 'row',
    marginRight : '0.3rem',
    height : '0.36rem',
    width : '1.2rem',
    justifyContent : 'space-between',
  },
};

module.exports = styles;
