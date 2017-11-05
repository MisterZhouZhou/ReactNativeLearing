import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import OpenUDIDIOSExamples from './OpenUDIDIOSExample'

export default class ZWOpenUUID extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < OpenUDIDIOSExamples.examples.length; i++){
      var ele=(
         <View style={styles.itemCell} key={OpenUDIDIOSExamples.examples.length+i}>
          <Text>{OpenUDIDIOSExamples.examples[i].title}</Text>
          {OpenUDIDIOSExamples.examples[i].render()}
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
