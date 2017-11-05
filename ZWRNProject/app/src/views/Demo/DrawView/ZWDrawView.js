import React ,{ Component } from 'react'
import {StyleSheet, View, Text, requireNativeComponent} from 'react-native'

var DrView = requireNativeComponent('RCTDrawView');
var MyScrollView = requireNativeComponent('MyCustomView');

export default class ZWDrawView extends Component{
  render(){
    return(
       <View>
         <DrView backgroundColor={'red'} style={{width:100,height:100,backgroundColor:'red'}}/>
         <MyScrollView style={{width:200,height:200,backgroundColor:'green'}} scrollEnabled={false} backgroundColor={'red'}/>
       </View>
    );
  }
}
