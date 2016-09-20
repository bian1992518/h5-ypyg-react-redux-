import React from 'react';
import BaseComponent from './baseComponent';

export default class ZtestPage extends BaseComponent {
    constructor(props) {
        super(props);
    }

    hasDataRender() {
        return (
            <div style = {{
                display: 'flex',
                marginTop: '1.1rem',
            }}>
                <p>属性测试1</p>
                <p>属性测试2</p>
                <p>属性测试3</p>
                <p>属性测试4</p>
                <p>属性测试5</p>
            </div>
        );
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
