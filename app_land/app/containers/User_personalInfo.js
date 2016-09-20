//个人信息界面  lxf

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import NavigatorBar from '../components/navigatorBar_noRightBtn';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/User_personalInfoStyle';

export default class UserPersonalInfo extends Component {
  constructor(props) {
    super(props);

    this._renderHeaderImg = this._renderHeaderImg.bind(this);
  }
  _renderHeaderImg(isLogined) {
    if (isLogined) {
      return <Image style={styles.headImg} scr="" />;
    } else {
      return <View style={styles.headImg}>
          <Text style={styles.headFont}>头像</Text>
        </View>;
    }
  }

  render() {
    let name = '梧桐';
    return <View style={styles.container}>
        <NavigatorBar title="个人信息" />
        <View style={styles.headerView}>
          {this._renderHeaderImg(false)}
          <Text style={styles.contentFont}>修改头像</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>
        <Button onPress = {
         Actions.User_changeNameModel
      } style={styles.cellView}>
          <Text style={styles.funFont}>昵称</Text>
          <Text style={styles.contentFont}>{name}</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </Button>
        <View style={styles.cellView}>
          <Text style={styles.funFont}>生日</Text>
          <Text style={styles.contentFont}>2016-03</Text>
          <Image style={styles.goRightImg} source = {
           require("../../common/images/icon_right_arrow.png")
        } />
        </View>
        <View style={styles.cellView}>
          <Text style={styles.funFont}>手机号</Text>
          <Text style={styles.contentFont}>13608670751</Text>
        </View>
      </View>;
  }
}