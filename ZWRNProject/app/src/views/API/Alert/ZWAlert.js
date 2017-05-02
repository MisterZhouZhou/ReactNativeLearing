import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import AlertIOSExamples from './AlertIOSExample'

export default class ZWAlert extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < AlertIOSExamples.examples.length; i++){
      var ele=(
         <View style={styles.itemCell} key={AlertIOSExamples.examples.length+i}>
          <Text>{AlertIOSExamples.examples[i].title}</Text>
          {AlertIOSExamples.examples[i].render()}
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

const styles = StyleSheet.create({
    itemCell: {
      marginBottom: 10,
    }
});
