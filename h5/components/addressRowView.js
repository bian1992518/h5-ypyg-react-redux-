/**
 * Created by zhangheng on 2016/8/2.
 */

import React, {Component} from 'react';
import styles from "../styles/addressItemStyles";

export default class AddressRow extends Component{

    render (){
        return (
            <div>
                <div style={styles.addressDetailItem_D}>
                    <p style={styles.addressDetailCheck_I}>*</p>
                    <p style={styles.addressDetailDefault_P}>{this.props.title}</p>
                    <input type="text" placeholder={this.props.hintValue}
                           style={styles.addressDetailInput_In}
                           value={this.props.value}
                           onChange={this.props.onChange}
                    />
                </div>
                <div style={styles.addressDetailLine_D}></div>
            </div>
        )
    }
}

{/*<img src="common/images/star_mark.png" style={styles.addressDetailCheck_I}/>*/}