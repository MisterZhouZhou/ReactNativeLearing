import React, {Component} from 'react';
import {AsyncStorage, Text} from 'react-native';

export default class ZWAsyncStorage extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:'',
    }
    // 移除key为zw的的向
    // AsyncStorage.removeItem('zw');
    // 获取并赋值
    AsyncStorage.getItem('zw').then((value) => {
         let newValue = JSON.parse(value);
         if(!newValue){
           AsyncStorage.setItem('zw',JSON.stringify(123));
         }else{
            this.setState({number:newValue});
         }
    });
  }

  render(){
    return(
      <Text>{this.state.number}</Text>
    );
  }
}
