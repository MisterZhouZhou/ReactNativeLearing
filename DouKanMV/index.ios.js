/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';

import {RootNavigator} from './RootNavigator';

export default class DouKanMV extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

AppRegistry.registerComponent('DouKanMV', () => DouKanMV);
