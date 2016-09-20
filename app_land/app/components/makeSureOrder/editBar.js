import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../../styles/makeSureOrder/editBar';
import Special from '../../special/stringImage';
import { Actions } from 'react-native-router-flux';

export function EditBar(titleName = '', placeholderText = '', onChangeHandle, value) {
  return <View style={styles.barView}>
      <Text style={styles.starText}>*</Text>
      <Text style={styles.titleText}>{titleName}</Text>
      <TextInput style={styles.inputView} placeholder={placeholderText} onChange={onChangeHandle} value={value} />
    </View>;
}

export function ChooseAddBar(titleName = '') {
  return <View style={styles.barView}>
      <Text style={styles.starText}>*</Text>
      <Text style={styles.titleText}>所在地区</Text>
      <View style={styles.clickView}>
        <Text style={styles.textStyle}>请选择</Text>
        <Image style={styles.rightArrowIcon} source={Special.imageUrls.ic_right_arrow} />
      </View>
    </View>;
}

export function CouponBar() {
  return <Button onPress = {
     Actions.ConfirmOrderCouponModel
  } style={styles.couponBarView}>
      <Text style={styles.couponText}>优惠券</Text>
      <View style={styles.clickView}>
        <Text style={styles.textStyle}>使用优惠券</Text>
        <Image style={styles.rightArrowIcon} source={Special.imageUrls.ic_right_arrow} />
      </View>
    </Button>;
}

export function PayWayBar(payWayIcon, payWayText, isChecked, clickHandle) {
  let checkBoxImg = isChecked ? Special.imageUrls.ic_checkbox_gr : Special.imageUrls.ic_checkbox_null;

  return <View onClick={clickHandle} style={styles.payWayBarView}>
      <View style={styles.payWayView}>
        <Image style={styles.payIcon} source = {
         {
          uri: payWayIcon
        }
      } />
        <Text style={styles.titleText}>{payWayText}</Text>
      </View>

      <Image style={styles.payCheckBox} source = {
       {
        uri: checkBoxImg
      }
    } />
    </View>;
}