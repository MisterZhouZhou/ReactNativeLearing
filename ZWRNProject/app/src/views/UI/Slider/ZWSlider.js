import React ,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SliderExamples from './SliderExample'

export default class ZWSlider extends Component{

  render(){
    var eleArray = [];
    for(var i = 0; i < SliderExamples.examples.length; i++){
      var ele=(
        <View style={styles.contenter}
        key={i}>
            <Text style={styles.title}>{SliderExamples.examples[i].title}</Text>
            <Text>{SliderExamples.examples[i].description}</Text>
            <View style={styles.buttonContenter}>{SliderExamples.examples[i].render()}</View>
          </View>
      )
      eleArray.push(ele);
    }
    return(
      <ScrollView>{eleArray}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contenter: {marginBottom: 10, padding: 10, backgroundColor: 'lightgray'},
  title: {fontSize: 16, fontWeight: '500'},
  buttonContenter: {backgroundColor: 'white', marginTop: 10}
});
