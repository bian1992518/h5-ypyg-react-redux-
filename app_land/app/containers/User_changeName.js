//修改头像界面  lxf

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import NavigatorBar from '../components/navigatorBar_noRightBtn';
// import styles from '../styles/User_personalInfoStyle';

export default class UserChangeName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '123'
    };
  }
  _nameChange(name) {
    console.log(name);
  }
  clearInput() {}
  render() {
    return <View style={styles.container}>
        <View style={styles.navigatorBar}>
            <Button style={styles.navLeftView} onPress={Actions.pop}>
              <Image source = {
             require("../../common/images/icon_left_arrow.png")
          } style={styles.navBack} />
            </Button>
            <Text style={styles.navTitle}>修改昵称</Text>
            <View style={styles.navRightView}>
              <Text style={styles.preserveFont}>保存</Text>
            </View>
        </View>
        <View style={styles.inputCell}>
          <TextInput style={styles.nameInput} value={this.state.name} autoFocus={true} ref="phone" onChange={event => this._nameChange({ event })} placeholder="请输入昵称" />
        <Image style={styles.clearImg} onClick={() => this.clearInput()} source = {
           require("../../common/images/ic_clear_input@3x.png")
        } />
        </View>
      </View>;
  }
}

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '7.5rem',
    marginTop: '0.88rem',
    marginBottom: '0.9rem'
  },
  navigatorBar: {
    display: "flex",
    height: "0.88rem",
    width: "7.5rem",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: '0rem',
    background: "white",
    flexDirection: "row",
    zIndex: 999,
    borderBottom: '1px solid #f3f3f3'
  },
  navLeftView: {
    display: 'flex',
    marginLeft: '0.2rem',
    height: '0.44rem',
    width: '1.3rem'
  },
  navBack: {
    width: "0.22rem",
    height: "0.44rem"
  },
  navTitle: {
    fontSize: "0.36rem",
    fontColor: "#333333"
  },
  navRightView: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '0.3rem',
    height: '0.36rem',
    width: '1.2rem',
    justifyContent: 'space-between'
  },
  preserveFont: {
    flex: 1,
    textAlign: 'right',
    fontSize: '0.28rem',
    color: '#333333'
  },
  inputCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem',
    backgroundColor: 'white',
    borderTop: '0.2rem solid #f3f3f3'
  },
  nameInput: {
    flex: 1,
    height: '0.88rem',
    fontSize: '0.28rem',
    color: '#333333'
  },
  clearImg: {
    width: "0.4rem",
    height: "0.4rem"
  }
};