import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import ScrollableTabView, {DefaultTabBar} from './ScrollalbeTabComponent';

export default class SimpleExample extends Component {
  render() {
    return (
      <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
    </ScrollableTabView>
    );
  }
}
