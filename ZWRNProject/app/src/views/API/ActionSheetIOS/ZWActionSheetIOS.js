import React,{Component} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';

import ActionSheetIOSExamples from './ActionSheetIOSExample'

export default class ZWActionSheetIOS extends Component{

  static nativigationOptions = {
     title:'ActionSheetIOS'
  }
  render(){
    var eleArray = [];
    for(var i = 0; i < ActionSheetIOSExamples.examples.length; i++){
      var ele=(
         <View style={styles.itemCell} key={i}>
          <Text>{ActionSheetIOSExamples.examples[i].title}</Text>
          {ActionSheetIOSExamples.examples[i].render()}
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
      backgroundColor:'white'
    }
  });
