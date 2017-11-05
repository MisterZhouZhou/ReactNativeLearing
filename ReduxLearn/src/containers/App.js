import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage'
import MainPageView from '../pages/MainPage'

export default RootNavigation = StackNavigator({
  Login: {screen: LoginPage},
  MainPage: {screen: MainPageView}
})
