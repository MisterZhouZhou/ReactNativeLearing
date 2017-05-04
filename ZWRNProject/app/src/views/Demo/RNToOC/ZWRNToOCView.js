import React, { Component } from 'react';
import {Text, PixelRatio} from 'react-native';

export default class ZWRNToOCView extends Component{
  clickAction(){
    // 创建原生模块
    var NativeTest = require('react-native').NativeModules.NativeTest;
    // 方法调用
    NativeTest.doSomething('zw name');
  }

  render(){
    return(
      <Text style={{padding:10,borderWidth:1/PixelRatio.get(),borderColor:'red'}}
        onPress={this.clickAction.bind(this)}
      >点我调用OC方法</Text>
    );
  }
}
