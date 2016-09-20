//个人信息界面  lxf

import React, { Component } from 'react';
import NavigatorBar from '../components/navigatorBar_noRightBtn';
import { Link } from 'react-router';
import styles from '../styles/User_personalInfoStyle';

export default class UserPersonalInfo extends Component{
  constructor(props) {
    super (props);

    this._renderHeaderImg = this._renderHeaderImg.bind(this);
  }
  _renderHeaderImg(isLogined) {
    if (isLogined) {
      return (
        <img style = { styles.headImg } scr = ''/>
      )
    }else {
      return(
        <div style = { styles.headImg }>
          <p style = { styles.headFont }>头像</p>
        </div>
      )
    }
  }

  render () {
    let name = '梧桐';
    return (
      <div style = { styles.container }>
        <NavigatorBar title = '个人信息'/>
        <div style = { styles.headerView }>
          {this._renderHeaderImg(false)}
          <p style = { styles.contentFont }>修改头像</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </div>
        <Link to = '/User_changeName' style = { styles.cellView }>
          <p style = { styles.funFont }>昵称</p>
          <p style = { styles.contentFont }>{name}</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </Link>
        <div style = { styles.cellView }>
          <p style = { styles.funFont }>生日</p>
          <p style = { styles.contentFont }>2016-03</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </div>
        <div style = { styles.cellView }>
          <p style = { styles.funFont }>手机号</p>
          <p style = { styles.contentFont }>13608670751</p>
        </div>
      </div>
    )
  }
}
