import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, Text} from 'react-native';

export default class ZWTouchable extends Component{

  onPress_Hight(){
    alert('TouchableHighlight');
  }

  onPress_Opacity(){
    alert('TouchableOpacity');
  }

  onPress_Feedback(){
    alert('TouchableWithoutFeedback');
  }

  render(){
    return(
       <View style={{flex: 1, marginTop: 10, }}>
          <TouchableHighlight onPress={this.onPress_Hight.bind(this)} style={styels.item}
            underlayColor={'green'}
          >
            <Text>TouchableHighlight</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={this.onPress_Opacity.bind(this)} style={styels.item}
            activeOpacity={0.8}
          >
            <Text>TouchableOpacity</Text>
          </TouchableOpacity>
          {/*TouchableWithoutFeedback 除非你有一个很好的理由，否则不要用这个组件。*/}
          <TouchableWithoutFeedback onPress={this.onPress_Feedback.bind(this)} style={styels.item}>
            <Text>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
       </View>
    );
  }
}

const styels = StyleSheet.create({
  item: {height: 30, backgroundColor: 'white', marginBottom: 10, padding: 5}
});
