
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import NavBar from 'react-native-navbar';
// import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
// import HomeList from './homeList';

export default class middleContainer extends Component {
  static navigationOptions = {
    title:'',
    tabBarLabel: '',
    tabBarIcon: ({ focused, tintColor }) => {
      return (<Icon name="md-add-circle" size={48} color={focused?'#d81e06':'#d81e06'} style={{marginTop:20}}/>)
    },
  };
  render(){
    return(<Text>middleContainer</Text>);
  }
}
