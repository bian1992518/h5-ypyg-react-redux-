//个人设置界面  lxf

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import NavigatorBar from '../components/navigatorBar_noRightBtn';
import styles from '../styles/User_settingStyle';

export default class UserSetting extends Component {

  render() {
    return <View style={styles.container}>
        <NavigatorBar title="设置" />
        <View style={styles.cell}>
          <Text style={styles.funFont}>清除缓存</Text>
          <Text style={styles.contentFont}>11.9MB</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>
        <View style={styles.cell}>
          <Text style={styles.funFont}>关于源品</Text>
          <Text style={styles.contentFont}>V3.0.0</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>
        <Text style={styles.exitCell}>退出当前账号</Text>
      </View>;
  }
}