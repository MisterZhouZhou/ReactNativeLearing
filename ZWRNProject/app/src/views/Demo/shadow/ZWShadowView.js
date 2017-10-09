import React ,{Component} from 'react';
import {View, Text, StyleSheet, Dimensions, SectionList, TouchableHighlight} from 'react-native';

let {width,height} = Dimensions.get('window');
// import {BoxShadow} from 'react-native-shadow'

export default class ZWShadowView extends Component {
   render(){
    const shadowOpt = {
      width:160,
      height:170,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
    }
    return(
      <View></View>
      // <BoxShadow setting={shadowOpt}>
      //   <TouchableHighlight style={{
      //     position:"relative",
      //     width: 160,
      //     height: 170,
      //     backgroundColor: "#fff",
      //     borderRadius:3,
      //     marginVertical:5,
      //     overflow:"hidden"}}>
      //   </TouchableHighlight>
      // </BoxShadow>
    );
  }
}
