import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../common/stores/configureStore';
import Root from './root';
import {
  Text
}from 'react-native';

let store = configureStore();

export default class app_land extends Component {
  constructor() {
    super();
    this.state = {
      store: configureStore()
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}