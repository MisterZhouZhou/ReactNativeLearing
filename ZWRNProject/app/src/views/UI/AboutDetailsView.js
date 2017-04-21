/**
 * 关于详情
 */

import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class AboutDetailsView extends Component{

  static navigationOptions = {
     title: '关于详情',
  }

  _next(){
    alert('next');
  }

  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={this._next}>
          <Text style={{backgroundColor:'green'}}>关于详情页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
