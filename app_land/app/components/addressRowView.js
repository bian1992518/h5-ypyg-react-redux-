/**
 * Created by zhangheng on 2016/8/2.
 */

import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from "../styles/addressItemStyles";

export default class AddressRow extends Component {

    render() {
        return <View>
                <View style={styles.addressDetailItem_D}>
                    <Image source = {
                     require("../../common/images/star_mark.png")
                } style={styles.addressDetailCheck_I} />
                    <Text style={styles.addressDetailDefault_P}>{this.props.title}</Text>
                    <TextInput placeholder={this.props.hintValue} style={styles.addressDetailInput_In} value={this.props.value} onChange={this.props.onChange} />
                </View>
                <View style={styles.addressDetailLine_D}></View>
            </View>;
    }
}