import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

class BackView extends Component{
  render(){
    return(
      <TouchableOpacity onPress={() => this.props.navigation.goBack(this.props.index)}>
        <Image source={require('../../images/icon_back.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
    );
  }
}

export default class JobCell extends Component {

  static navigationOptions = {
    header: (navigation) => ({
        style: { backgroundColor: 'white' },
        title:'职位详情',
        left: (<BackView navigation={navigation}/>),
      }),
  }

  render() {
    const { job } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <View style={{padding:15, flexDirection:'row'}}>
          <Text style={{flex:1}}>{job.title}</Text>
          <Text style={{color:'red'}}>{job.salary}</Text>
        </View>
        <View style={{padding: 15}}>
          <Text style={{marginTop:8,marginBottom:8}}>{job.company}</Text>
          <Text style={{color: '#999'}}>{job.info}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
