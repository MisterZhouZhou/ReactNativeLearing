import React ,{ Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import PulseLoader from './LocationPulseLoader'


export default class ZWPulseLoader extends Component{
  render(){
    return(
      <PulseLoader  avatar={'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'}/>
    );
  }
}
