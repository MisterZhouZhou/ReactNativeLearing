import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import MapView from './ZWMKMapView'
let {width ,height} = Dimensions.get('window');

export default class ZWMapView extends Component{
   _onChange(event){
      alert(JSON.stringify(event.nativeEvent));
      // if (!this.props.onRegionChange) {
      //   return;
      // }
      // this.props.onRegionChange(event.nativeEvent);
    }

  render(){
     var region = {
      latitude: 40.22,
      longitude: 116.20,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return(
       <View style={{flex: 1,backgroundColor:'green'}}>
         <MapView pitchEnabled={true} region={region} style={{width:width,height:height,backgroundColor:'red'}} onChange={this._onChange.bind(this)}/>
       </View>
    );
  }
}
