import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Search extends Component{
   static navigationOptions = {
    title: '用户中心',
    tabBarLabel: '用户中心',
    tabBarIcon: ({focused, tintColor }) => {
      return (<Image source={focused?require('../assets/ic_user_active.png'):require('../assets/ic_user.png')} style={{width: 20, height: 20}}/>);
    }
  };
  render(){
    return(
       <Text>CategoryList</Text>
    );
  }
}
