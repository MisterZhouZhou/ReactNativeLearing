import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Settings extends Component{
   static navigationOptions = {
    title: '设置',
    tabBarLabel: '设置',
    tabBarIcon: ({focused, tintColor }) => {
      return (<Image source={focused?require('../assets/ic_cog_active.png'):require('../assets/ic_cog.png')} style={{width: 20, height: 20}}/>);
    }
  };
  render(){
    return(
       <Text>CategoryList</Text>
    );
  }
}
