import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from './baseComponent';

export default class ZtestPage extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var headerParam = {
      isHeaderShow: true,
      headerName: '测试页面',
      isBackShow: true
    };

    var netRequestParam = {
      isRequesting: false,
      isDataRequestSucc: true,
      hasData: true
    };

    return super.allSceneRender(headerParam, netRequestParam);
  }
}