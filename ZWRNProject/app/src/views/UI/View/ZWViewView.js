import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'

import ZWViewExample from './ZWViewExamples'

export default class ZWViewView extends Component{
  static navigationOptions = {
      title: 'View'
  }
  render(){
    var eleArray = [];
    for(var i=0;i<ZWViewExample.examples.length;i++){
      var ele=(
        <View style={{marginBottom: 10, backgroundColor: 'white', padding: 10}} key={i}>
          <Text style={{marginBottom: 10}}>{ZWViewExample.examples[i].title}</Text>
          {ZWViewExample.examples[i].render()}
        </View>
      )
       eleArray.push(ele);
    }
    return(
      <ScrollView style={{flex:1}}>
        {eleArray}
      </ScrollView>
    );
  }
}
