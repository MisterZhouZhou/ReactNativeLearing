import React ,{Component} from 'react'
import {Text, View, ScrollView, StyleSheet} from 'react-native'

import ZWWebViewExamples from './WebViewExample'

export default class ZWButtonView extends Component{

  static navigationOptions = {
    title: 'Button'
  }

  render(){
    var eleArray = [];
    for(var i = 0; i < ZWWebViewExamples.examples.length; i++){
      var ele=(
        <View style={styles.contenter}
        key={i}>
            <Text style={styles.title}>{ZWWebViewExamples.examples[i].title}</Text>
            <Text>{ZWWebViewExamples.examples[i].description}</Text>
            <View style={styles.buttonContenter}>{ZWWebViewExamples.examples[i].render()}</View>
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
