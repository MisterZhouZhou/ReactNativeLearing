import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class CategoryList extends Component{
   static navigationOptions = {
    title: '分类',
    tabBarLabel: '分类',
    tabBarIcon: ({focused, tintColor }) => {
      return (<Image source={focused?require('../assets/ic_list_ol_active.png'):require('../assets/ic_list_ol.png')} style={{width: 20, height: 20}}/>);
    }
  };
  render(){
    return(
       <Text>CategoryList</Text>
    );
  }
}
