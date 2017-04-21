/**
 * 详情
 */

import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class DetailsView extends Component{

  static navigationOptions = {
     title: '详情',
  }

  _next(){
     //this.props.navigation.navigate('AboutDetail');

     // ES6 语法数组中存放function
     /*
     var a = [];
     for (var i = 0; i < 10; i++) {
       a[i] = function(){
          console.log('this is '+i);
       }
     }
     for (var i = 0; i < 10; i++) {
        a[i]();
     }
     */



  }

  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{this._next()}}>
          <Text style={{backgroundColor:'green'}}>详情页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
