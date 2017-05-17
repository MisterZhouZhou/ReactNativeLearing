
import React, { Component } from 'react';
import {TabBarIOS, StyleSheet, Text, View, NavigatorIOS, Animated, StatusBar} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Home from './views/Home';
import Message from './views/Message';
import Discover from './views/Discover';
import Me from './views/Me';
import JobDetailView from './views/home/JobDetail';
import DiscoverContentV from './views/discover/DiscoverContent';
import ResumeView from './views/me/Resume';


const lightContentScenes = ['Home'];
export default class MainPage extends Component {

  // 获取当前路由
  getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  render(){
    return(<Navigator
      onNavigationStateChange={(prevState, currentState) => {
                const currentScene = this.getCurrentRouteName(currentState);
                const previousScene = this.getCurrentRouteName(prevState);
                if (previousScene !== currentScene) {
                    if (lightContentScenes.indexOf(currentScene) >= 0) {
                        StatusBar.setBarStyle('light-content')
                    } else {
                        StatusBar.setBarStyle('dark-content')
                    }
                }
            }
          }/>);
  }
}

 const Tab = TabNavigator({
  Home: {screen: Home},
  Nearby: {screen: Message},
  Order: {screen: Discover},
  Mine: {screen: Me},
},
{
  tabBarOptions: {
  inactiveTintColor: '#666',   // 未激活时tabbar上字体颜色
  activeTintColor: '#11a984',  // 激活时tabbar上字体颜色
  style: {backgroundColor: '#fff'}, // tabbar背景颜色
  indicatorStyle: {height: 0},
  labelStyle: {margin: 0, fontSize: 11, marginTop: 3},
  tabStyle: {paddingBottom: 0, borderTopWidth: 0.5, borderTopColor: '#efefef'},
  showIcon: true,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true
}
);

const Navigator = StackNavigator({
    Tab: { screen: Tab },
    JobDetail: {screen: JobDetailView},
    DiscoverContent: {screen: DiscoverContentV},
    Resume: {screen: ResumeView},
  },
  {
    headerMode: 'screen'
  }
);
