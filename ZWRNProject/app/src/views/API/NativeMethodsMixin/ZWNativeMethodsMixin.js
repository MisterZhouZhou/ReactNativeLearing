/*
 * NativeMethodsMixin提供了一些用于直接访问底层原生组件的方法。这在你需要聚焦(focus)一个视图或者计算它在屏幕上显示的尺寸之类的情况下可能会需要。
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ZWNativeMethodsMixin extends Component{
  viewLayout(e){
    //通过onLayout获取到的位置信息只是相对于父组件的位置坐标，而不是相对于屏幕位置的绝对坐标。
    console.log(e.nativeEvent.layout.height);
    alert('d');
  }

  _press(){
    this.refs.view.measure((x,y,width,height,pageX,pageY)=>{
        console.log(x,y,width,pageX,pageY,height);
    })
  }

  render(){
    return(
       <Text style={{width:100,height:100,backgroundColor:'red'}} ref='view' onPress={this._press.bind(this)} onLayout={(e)=>this.viewLayout(e)}>
       </Text>
    );
  }
}
