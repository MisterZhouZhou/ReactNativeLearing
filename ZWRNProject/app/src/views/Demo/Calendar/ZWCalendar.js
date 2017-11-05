import React ,{ Component } from 'react'
import {StyleSheet, View, Text,} from 'react-native'
import Calendar from './Calendar'

export default class ZWCalendar extends Component{


  render(){
    return(
      <Calendar style={{width:300,height:300,backgroundColor:'red'}} num={3}  startTime={new Date("2017-05-01")}/>
    );
  }
}
