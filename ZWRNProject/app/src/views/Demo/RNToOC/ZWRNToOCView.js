import React, { Component } from 'react';
import {Text, PixelRatio,View} from 'react-native';

export default class ZWRNToOCView extends Component{

  callBack(data){
    console.warn(data);
  }

  clickAction(){
    // Response 调用方式
    // 创建原生模块
    var NativeTest = require('react-native').NativeModules.NativeTest;
    // 方法调用
    NativeTest.doSomething(('RN->原生的数据'),(error,events) => {
        if (error) {
            console.warn(error);
        } else {
            alert(events)//返回的数据
        }
    });
  }



  clickAction3(){
    // Promise 调用方式
    // 创建原生模块
    var NativeTest = require('react-native').NativeModules.NativeTest;
    // 方法调用
    NativeTest.thePromisesEvent(('zw')).then((events)=>{
        alert(events+1111)
    });
  }


  render(){
    return(
      <View>
        <Text style={{padding:10,borderWidth:1/PixelRatio.get(),borderColor:'red'}}
          onPress={this.clickAction.bind(this)}
        >RCTResponseSenderBlock传参数</Text>

        <Text style={{padding:10,borderWidth:1/PixelRatio.get(),borderColor:'red'}}
          onPress={this.clickAction3.bind(this)}
        >RCTPromiseResolveBlock传参数</Text>

      </View>
    );
  }
}
