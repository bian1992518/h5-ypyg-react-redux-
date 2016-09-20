/*
 * Name: editBar.js
 * Creator: ZhangZhao
 * Create Time: 2016-08-20
 * Instruction: 确认订单editBar样式
 */

const styles = {
  barView: {
    display: 'flex',
    flexDirection: 'row',
    height: '0.88rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginBottom: '0.02rem'
  },
  couponBarView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '0.2rem',
    height: '0.88rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottom: '1px solid #dddddd'
  },
  payWayBarView: {
    display: 'flex',
    flexDirection: 'row',
    height: '0.88rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginBottom: '0.02rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  starText: {
    fontSize: '0.28rem',
    color: '#ff6700'
  },
  titleText: {
    fontSize: '0.28rem',
    color: '#333333',
    marginLeft: '0.1rem'
  },
  couponText: {
    fontSize: '0.28rem',
    color: '#333333',
  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    fontSize: '0.28rem',
    paddingLeft : "0.3rem",
    color: '#333333',
  },
  clickView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  payWayView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  payIcon: {
    height: '0.48rem',
    width: '0.48rem'
  },
  payCheckBox: {
    height: '0.32rem',
    width: '0.32rem'
  },
  rightArrowIcon: {
    height: '0.28rem',
    width: '0.14rem',
    marginLeft: '0.18rem'
  },
  textStyle: {
    fontSize: '0.28rem',
    color: '#cccccc'
  }
};

module.exports = styles;
