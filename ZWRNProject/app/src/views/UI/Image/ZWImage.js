import React ,{Component} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

import ZWImageExamples from './ZWImageExample'

export default class ZWImage extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < ZWImageExamples.examples.length; i++){
      var ele=(
        <View style={styles.contenter}
        key={i}>
            <Text style={styles.title}>{ZWImageExamples.examples[i].title}</Text>
            <Text>{ZWImageExamples.examples[i].description}</Text>
            <View style={styles.buttonContenter}>{ZWImageExamples.examples[i].render()}</View>
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
  contenter: {marginBottom: 10, padding: 10, backgroundColor: 'lightgray'},
  title: {fontSize: 16, fontWeight: '500'},
  buttonContenter: {backgroundColor: 'white', marginTop: 10}
});
