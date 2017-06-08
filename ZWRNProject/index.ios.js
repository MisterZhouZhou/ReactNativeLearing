/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Start from './app/src/views/StartView'

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
// 程序入口
AppRegistry.registerComponent('ZWRNProject', () => Start);
