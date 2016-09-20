'use strict';

import React from 'react'
import styles from '../styles/tabStyle';
import { Link } from 'react-router'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { homePressDown, shopPressDown, settingPressDown, classifyPressDown } from "../../common/actions/tabAction";

class App extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
        return (
            <div>
                <div style={styles.tab} >
                    <div style={styles.tabItems}>
                        <Link to="/" onlyActiveOnIndex onClick={() => this.props.homePressDown()}>
                            <img src= {this.props.homeTabimg} style = {styles.tabImg} />
                        </Link>
                    </div>
                    <div style={styles.tabItems} >
                        <Link to="/classify" onClick={() => this.props.classifyPressDown()}>
                            <img src= {this.props.classifyTabimg} style = {styles.tabImg} />
                        </Link>
                    </div>
                    <div style={styles.tabItems} >
                        <Link to="/shopCart" onClick={() => this.props.shopPressDown()}>
                            <img src= {this.props.shopTabimg} style = {styles.tabImgBigger} />
                        </Link>
                    </div>
                    <div style={styles.tabItems} >
                        <Link to="/setting" onClick={() => this.props.settingPressDown()}>
                            <img src= {this.props.setTabimg} style = {styles.tabImg} />
                        </Link>
                    </div>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

function select(store, action) {
  return {
    homeTabimg: store.tabReducer.homeTabimg,
    classifyTabimg: store.tabReducer.classifyTabimg,
    shopTabimg: store.tabReducer.shopTabimg,
    setTabimg: store.tabReducer.setTabimg
  }
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
