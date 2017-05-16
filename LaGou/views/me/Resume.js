import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

class BackView extends Component{
  render(){
    return(
      <TouchableOpacity onPress={() => this.props.navigation.goBack(this.props.index)}>
        <Image source={require('../../images/icon_back.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
    );
  }
}

export default class Resume extends Component {
  static navigationOptions = {
    header: (navigation) => ({
        style: { backgroundColor: 'white' },
        title:navigation.state.params.title,
        left: (<BackView navigation={navigation}/>),
      }),
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{padding:15}}>
          <Text>等待添加</Text>
        </View>
      </View>
    );
  }
}
