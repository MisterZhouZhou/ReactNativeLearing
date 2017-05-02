import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native'

import AnimatedExamples from './AnimatedExample'
export default class ZWAnimated extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < AnimatedExamples.examples.length; i++){
      var ele=(
        <View style={styles.itemCell} key={i}>
           <Text>{AnimatedExamples.examples[i].title}</Text>
           {AnimatedExamples.examples[i].render()}
        </View>
      );
      eleArray.push(ele);
    }
    return(
      <View>{eleArray}</View>
    );
  }
}

const styles = StyleSheet.create({
    itemCell: {
      marginBottom: 10,
    }
});
