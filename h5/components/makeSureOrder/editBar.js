import React from 'react';
import styles from '../../styles/makeSureOrder/editBar';
import Special from '../../special/stringImage';
import {Link} from 'react-router';

export function EditBar(titleName = '', placeholderText = '', onChangeHandle, value) {
  return (
    <div style = {styles.barView}>
      <p style = {styles.starText}>*</p>
      <p style = {styles.titleText}>{titleName}</p>
      <input
        style = {styles.inputView}
        placeholder = {placeholderText}
        onChange = {onChangeHandle}
        value = {value}
      />
    </div>
  );
}

export function ChooseAddBar(titleName = '') {
  return (
    <div style = {styles.barView}>
      <p style = {styles.starText}>*</p>
      <p style = {styles.titleText}>所在地区</p>
      <div style = {styles.clickView}>
        <p style = {styles.textStyle}>请选择</p>
        <img
          style = {styles.rightArrowIcon}
          src = {Special.imageUrls.ic_right_arrow}
        />
      </div>
    </div>
  );
}

export function CouponBar() {
  return (
    <Link
        to = '/ConfirmOrderCoupon'
        style = {styles.couponBarView}
    >
      <p style = {styles.couponText}>优惠券</p>
      <div style = {styles.clickView}>
        <p style = {styles.textStyle}>使用优惠券</p>
        <img
          style = {styles.rightArrowIcon}
          src = {Special.imageUrls.ic_right_arrow}
        />
      </div>
    </Link>
  );
}

export function PayWayBar(payWayIcon, payWayText, isChecked, clickHandle) {
  let checkBoxImg = isChecked
    ? Special.imageUrls.ic_checkbox_gr
    : Special.imageUrls.ic_checkbox_null;

  return (
    <div
      onClick = {clickHandle}
      style = {styles.payWayBarView}
    >
      <div style = {styles.payWayView}>
        <img
          style = {styles.payIcon}
          src = {payWayIcon}
        />
        <p style = {styles.titleText}>{payWayText}</p>
      </div>

      <img
        style = {styles.payCheckBox}
        src = {checkBoxImg}
      />
    </div>
  );
}
