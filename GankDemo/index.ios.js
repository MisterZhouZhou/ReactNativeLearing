/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import StartView from './jscore/StartView'

export default class GankDemo extends Component {
  render() {
    return (
      <StartView />
    );
  }
}

AppRegistry.registerComponent('GankDemo', () => GankDemo);
