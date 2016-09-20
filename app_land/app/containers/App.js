'use strict';

import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../styles/tabStyle';
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { homePressDown, shopPressDown, settingPressDown, classifyPressDown } from "../../common/actions/tabAction";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(place) {
    switch (place) {
      case "home":
        {
          this.props.homePressDown();
          break;
        }
      case "classify":
        {
          this.props.classifyPressDown();
          break;
        }
      case "shop":
        {
          this.props.shopPressDown();
          break;
        }
      case "setting":
        {
          this.props.settingPressDown();
          break;
        }
    }
  }

  render() {
    return <View>
        <View style={styles.tab}>
          <View style={styles.tabItems}>
            <Button onPress = {
             homeModel
          } onlyActiveOnIndex onPress={() => this.handleTabClick("home")}>
              <Image source = {
               {
                uri: this.props.homeTabimg
              }
            } style={styles.tabImg} />
            </Button>
          </View>
          <View style={styles.tabItems}>
            <Button onPress = {
             Actions.classifyModel
          } onPress={() => this.handleTabClick("classify")}>
              <Image source = {
               {
                uri: this.props.classifyTabimg
              }
            } style={styles.tabImg} />
            </Button>
          </View>
          <View style={styles.tabItems}>
            <Button onPress = {
             Actions.shopCartModel
          } onPress={() => this.handleTabClick("shop")}>
              <Image source = {
               {
                uri: this.props.shopTabimg
              }
            } style={styles.tabImgBigger} />
            </Button>
          </View>
          <View style={styles.tabItems}>
            <Button onPress = {
             Actions.settingModel
          } onPress={() => this.handleTabClick("setting")}>
              <Image source = {
               {
                uri: this.props.setTabimg
              }
            } style={styles.tabImg} />
            </Button>
          </View>
        </View>
        <View>{this.props.children}</View>
      </View>;
  }
}

function select(store, action) {
  return {
    homeTabimg: store.tabReducer.homeTabimg,
    classifyTabimg: store.tabReducer.classifyTabimg,
    shopTabimg: store.tabReducer.shopTabimg,
    setTabimg: store.tabReducer.setTabimg
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    homePressDown,
    classifyPressDown,
    shopPressDown,
    settingPressDown
  }, dispatch);
}

export default connect(select, mapDispatchToProps)(App);