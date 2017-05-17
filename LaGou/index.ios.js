/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Animated} from 'react-native';

import SplashPage from './Splash'
import MainPage from './MainPage'

export default class LaGou extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      complete: false
    };
    this.state.opacity.addListener(e => {
      if (e.value === 1) {
        this.state.opacity.removeAllListeners();
        this.setState({complete: true});
      }
    });
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {toValue: 1, duration: 500}).start();
  }

  render() {
    if (!this.state.complete) {
     return(
        <Animated.View style={{flex: 1, padding: 20, justifyContent: 'center', opacity: this.state.opacity}}>
          <SplashPage/>
        </Animated.View>
      );
    }else{
      return (
        <MainPage/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LaGou', () => LaGou);
