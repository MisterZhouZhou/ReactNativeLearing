import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Search extends Component{
   static navigationOptions = {
    title: '搜索',
    tabBarLabel: '搜索',
    tabBarIcon: ({focused, tintColor }) => {
      return (<Image source={focused?require('../assets/ic_search_active.png'):require('../assets/ic_search.png')} style={{width: 20, height: 20}}/>);
    }
  };
  render(){
    return(
       <Text>CategoryList</Text>
    );
  }
}
