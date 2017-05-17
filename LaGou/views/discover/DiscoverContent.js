import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class DiscoverContent extends Component {
  render(){
    var discoverObj = this.props.navigation.state.params.discover;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={{fontSize:20,textAlign:'center',lineHeight:30}}>{discoverObj.infoTitle}</Text>
          <Text style={{color:'#999',textAlign:'center',marginTop:15}}>关键字：{discoverObj.info}</Text>
          <Text style={{color:'#999',textAlign:'center',marginTop:10}}>发布日期：{discoverObj.date}</Text>
          <View style={{height: 180}}>
            <Image style={styles.largeImage} source={{uri: discoverObj.logo}}/>
          </View>
          <Text style={{color:'#999',lineHeight:25}}>       {discoverObj.content}</Text>
        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 80,
  },
  largeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    marginTop: 25,
    marginBottom: 35,
  },
});
