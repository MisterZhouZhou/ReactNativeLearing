/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator  = React.createClass({
  mixins:[TimerMixin],
  getInitialState(){
    return {
      animating:true,
    }
  },
  setToggleTimeout(){
    this.setTimeout(()=>{
      this.setState({animating:!this.state.animating});
      this.setToggleTimeout();
    },2000);
  },
  componentDidMount(){
    this.setToggleTimeout();
  },

   render(){
    return(
      <ActivityIndicator
         animating={this.state.animating}
         style={[styles.centering,{height:80}]}
         size="large"
       />
    );
  }
})

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },

});

module.exports = ToggleAnimatingActivityIndicator;
