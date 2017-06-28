/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import {RootNavigator} from './jscore/RootNavigation';

export default class GankDemo extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

AppRegistry.registerComponent('GankDemo', () => GankDemo);
