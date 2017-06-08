import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Animated, Easing, Image, Dimensions} from 'react-native'
export default class ZWDrawAnleView extends Component{
  render(){
    return(
        <View style={{width:0, height:0, borderLeftWidth:12, borderTopWidth:12, borderRightWidth:12, borderBottomWidth:0, borderLeftColor:'transparent', borderTopColor:'#656565', borderRightColor:'transparent', borderBottomColor:'transparent', marginLeft:70}}></View>
    );
  }
}
