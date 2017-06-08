import React ,{ Component } from 'react'
import {StyleSheet, View, Text, requireNativeComponent, PropTypes} from 'react-native'

var RNTMap = requireNativeComponent('RNTMap');


export default class ZWMKMapView extends Component{
  render(){
    return(
       <View>
         <RNTMap {...this.props}/>
       </View>
    );
  }
}
