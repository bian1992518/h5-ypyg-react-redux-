//个人设置界面  lxf

import React, { Component } from 'react';
import NavigatorBar from '../components/navigatorBar_noRightBtn';
import styles from '../styles/User_settingStyle';

export default class UserSetting extends Component{

  render () {
    return (
      <div style = { styles.container }>
        <NavigatorBar title = '设置'/>
        <div style = { styles.cell }>
          <p style = { styles.funFont }>清除缓存</p>
          <p style = { styles.contentFont }>11.9MB</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </div>
        <div style = { styles.cell }>
          <p style = { styles.funFont }>关于源品</p>
          <p style = { styles.contentFont }>V3.0.0</p>
          <img style = { styles.goRightImg } src = 'common/images/icon_right_arrow.png'/>
        </div>
        <p style = { styles.exitCell }>退出当前账号</p>
      </div>
    )
  }
}
