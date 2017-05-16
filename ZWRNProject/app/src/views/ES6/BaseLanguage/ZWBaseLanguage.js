import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ZWBaseLanguage extends Component{

  constructor(props){
    super(props);
    console.log(Number.parseInt('12.34')) // 12
    console.log(Number.parseFloat('12.34')) // 12.34

    console.log('====================================');
    console.log(Number.isInteger(25)) // true
    console.log(Number.isInteger(25.0)) // true
    console.log(Number.isInteger(25.1)) // false



  }

  render(){
    return(
      <Text>ZWBaseLanguage</Text>
    );
  }
}
