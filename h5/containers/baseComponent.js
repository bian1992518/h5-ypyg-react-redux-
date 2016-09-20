/*
 * Name: baseComponent
 * Creator: ZhangZhao
 * Create Time: 2016-08-18
 * Instruction: 处理需要加载网络请求的公共页面
 */

 import React, {Component} from 'react';
 import {browserHistory, Link} from 'react-router';
 import styles from '../styles/baseComponent';
 import StringImgSrc from '../special/stringImage';
 import STRING_RESOURCE from '../../common/StringResource';

 const TAG = 'baseComponent.js';

 export default class BaseComponent extends Component {
    constructor(props) {
        super(props);

        this.headerRender = this.headerRender.bind(this);
        this.headerLeftRender = this.headerLeftRender.bind(this);
        this.headerRightRender = this.headerRightRender.bind(this);
        this.headerMiddleRender = this.headerMiddleRender.bind(this);

        this.baseSceneRender = this.baseSceneRender.bind(this);
        this.isLoadingRender = this.isLoadingRender.bind(this);
        this.noDataRender = this.noDataRender.bind(this);
        this.hasDataRender = this.hasDataRender.bind(this);

        this.scrollHandle = this.scrollHandle.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);

        this.loadingDialogRender = this.loadingDialogRender.bind(this);
        this.loadMoreFooterRender = this.loadMoreFooterRender.bind(this);
        this.noMoreDataFooterRender = this.noMoreDataFooterRender.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scrollHandle);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandle);
    }

    scrollHandle() {
        if (window.innerHeight === (document.body.scrollHeight - document.body.scrollTop)) {
            this.loadMoreData();
        }
    }

    loadMoreData() {
        console.log('loadMore');
    }

    /*
     * @Name: baseSceneRender
     * @Param isLoading(boolean): Judge net request is loading
     * @Param isDataRequestSucc(boolean): Net request is success or not
     * @Param hasData: If not null there are datas we want
     * @Introduction: The function should be called in render which in clild class
     */
    baseSceneRender(isLoading, isDataRequestSucc, hasData, isDialogLoading = false) {
        if (isLoading) {
            return this.isLoadingRender();
        } else {
            if (isDataRequestSucc) {
                if (hasData) {
                    return this.baseHasDataRender(isDialogLoading);
                } else {
                    return this.noDataRender();
                }
            } else {

            }
        }
    }

    /*
     * @Name: isLoadingRender
     * @Introduction: Loading scene, will be showed when data requesting
     */
    isLoadingRender() {
        return (
            <div style = {styles.contentView}>
                <img
                    style = {styles.loadingImage}
                    src = {StringImgSrc.imageUrls.loading}
                />
                <p style = {styles.loadingText}>
                    {STRING_RESOURCE.isLoadingWaitMinute}
                </p>
            </div>
        );
    }

    /*
     * @Name: noDataRender
     * @Introduction: No data scene, will be showed when data is null,
     *  can be rewrite if need
     */
    noDataRender() {
        return (
            <div style = {styles.contentView}>
                <p style = {styles.loadingView}>没有数据~</p>
            </div>
        );
    }

    /*
     * @Name: hasDataRender
     * @Introduction: Has data scene, will be showed when data is not null,
     *  must be rewrite in clild class as what scene you want
     */
    hasDataRender() {
        return (
            <div style = {styles.contentView}>
                <p style = {styles.loadingView}>有数据~</p>
            </div>
        );
    }

    baseHasDataRender(isDialogLoading) {
        return (
            <div>
                {this.hasDataRender()}
                {this.loadingDialogRender(isDialogLoading)}
            </div>
        );
    }

    headerLeftRender(isBackShow) {
        if (isBackShow) {
            return (
                <div
                    onClick = {() => browserHistory.goBack()}
                    style = {styles.headerLeftView}
                >
                    <img
                        style = {styles.headerLeftArrowImg}
                        src = {StringImgSrc.imageUrls.ic_left_arrow}
                    />
                </div>
            );
        } else {
            return (
                <div style = {styles.headerLeftView}/>
            );
        }
    }

    headerRightRender() {
        return (
            <div style = {styles.headerRightView} />
        )
    }

    headerMiddleRender(headerName) {
        return (
            <div style = {styles.headerTitleContentView}>
                <p style = {styles.headerTitleText}>
                    {headerName}
                </p>
            </div>
        );
    }

    headerRender(isHeaderShow = true, headerName = 'HEADER NAME', isBackShow = true) {
        if (isHeaderShow) {
            return (
                <div style = {styles.hearderView}>
                    {this.headerLeftRender(isBackShow)}
                    {this.headerMiddleRender(headerName)}
                    {this.headerRightRender()}
                </div>
            );
        }
    }

    allSceneRender(headerParam, netRequestParam) {
        return (
            <div>
                {this.headerRender(
                    headerParam.isHeaderShow,
                    headerParam.headerName,
                    headerParam.isBackShow
                )}

                {this.baseSceneRender(
                    netRequestParam.isRequesting,
                    netRequestParam.isDataRequestSucc,
                    netRequestParam.hasData,
                    netRequestParam.isDialogLoading
                )}
            </div>
        );
    }

    loadMoreFooterRender(isLoadMoreFooterShow) {
        if (isLoadMoreFooterShow) {
            return (
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 10,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 0.4
                }}>
                    <p style = {{fontSize: 4.8, color: '#333333'}}>正在加载...</p>
                </div>
            );
        }
    }

    noMoreDataFooterRender(isNoMoreDataFooterShow) {
        if (isNoMoreDataFooterShow) {
            return (
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 10,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 0.4
                }}>
                    <p style = {{fontSize: 4.8, color: '#333333'}}>没有更多数据</p>
                </div>
            );
        }
    }

    loadingDialogRender(isLoading) {
        if (isLoading) {
            return (
                <div>
                    <div style = {{
                        position: 'fixed',
                        height: window.innerHeight,
                        width: window.innerWidth,
                        backgroundColor: '#ffffff',
                        opacity: 0,
                        top: 0,
                        zIndex: 10001
                    }}>

                    </div>
                    <div style = {{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'fixed',
                        height: window.innerHeight/4,
                        width: window.innerWidth/2,
                        backgroundColor: '#000000',
                        opacity: 0.7,
                        top: window.innerHeight/2 - window.innerHeight/8,
                        left: window.innerWidth/2 - window.innerWidth/4,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10002
                    }}>
                    </div>
                    <img
                        style = {{
                            position: 'fixed',
                            zIndex: 10002,
                            height: 100,
                            width: 100,
                            top: window.innerHeight/2 - 50,
                            left: window.innerWidth/2 - 50
                        }}
                        src = {StringImgSrc.imageUrls.loading}
                    />
                </div>
            );
        }
    }
 }
