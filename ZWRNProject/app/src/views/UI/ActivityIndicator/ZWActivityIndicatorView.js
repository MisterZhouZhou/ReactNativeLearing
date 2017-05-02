import React ,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';

import ZWActivityIndicatorExample from './ZWActivityIndicatorExample'

export default class ZWActivityIndicatorView extends Component{

  static navigationOptions ={
    title: 'ActivityIndicator',
  };

  render(){
    var eleArray = [];
    for(var i = 0; i < ZWActivityIndicatorExample.examples.length; i++){
      var ele=(
         <View style={styles.itemCell} key={i}>
          <Text>{ZWActivityIndicatorExample.examples[i].title}</Text>
          {ZWActivityIndicatorExample.examples[i].render()}
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
