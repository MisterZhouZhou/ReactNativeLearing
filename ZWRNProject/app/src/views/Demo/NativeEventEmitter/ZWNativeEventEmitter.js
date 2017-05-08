import React, {Component} from 'react';
import {StyleSheet, Switch, View, Text,NativeModules,NativeEventEmitter} from 'react-native';

var ChivoxISE = NativeModules.OCNativeEvent;
const myNativeEvt = new NativeEventEmitter(ChivoxISE);  //创建自定义事件接口


export default class ZWSwitch extends Component{
  //在组件中使用
  componentWillMount() {
    this.listener = myNativeEvt.addListener('showAlertCallback', this.iseCallback.bind(this));  //对应了原生端的名字
    ChivoxISE.emit(('result'));
  }
  componentWillUnmount() {
    this.listener && this.listener.remove();  //记得remove哦
    this.listener = null;
  }

  iseCallback(data) {//接受原生传过来的数据 data={code:,result:}
    if (data.code == '200') {
        //
        alert('code == 200');
    }
    else {//..真的是未知的错误
        logf('传回其他参数', data.result);
    }
}

  render(){
    return(
      <View>
        <Text>Text</Text>
      </View>
    );
  }
}
