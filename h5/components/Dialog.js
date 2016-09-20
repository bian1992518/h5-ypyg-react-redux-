/*
 * Name: ChoosePayWay
 * Creator: ZhangZhao
 * Create Time: 2016-09-12
 * Instruction: 对话框组件
 */
import React from 'react';
import {Link} from 'react-router';
import styles from '../styles/Dialog';

export function standardDialog (isShow, title, leftEventHandle,
    rightEventHandle, leftText = '确定', rightText = '取消') {
    if (isShow) {
        return (
            <div>
                <div style = {styles.backgroundView} />
                <div style = {styles.standardDialogView}>
                    <p style = {styles.standardDialogTitleText}>
                        {title}
                    </p>

                    <div style = {styles.standardDialogButtonView}>
                        <Link
                            to = {leftEventHandle}
                            style = {styles.standardDialogLeftLink}
                        >
                            <p style = {styles.buttonText}>
                                {leftText}
                            </p>
                        </Link>

                        <button
                            onClick = {rightEventHandle}
                            style = {styles.standardDialogRightButton}
                        >
                            {rightText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
