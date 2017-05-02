import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import ADSupportIOSExamples from './AdSupportIOSExample'

/*
 * 此API不能用Alert
 */
export default class ZWAdSupportIOS extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < ADSupportIOSExamples.examples.length; i++){
      var ele=(
         <View style={styles.itemCell} key={i}>
          <Text>{ADSupportIOSExamples.examples[i].title}</Text>
          {ADSupportIOSExamples.examples[i].render()}
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
