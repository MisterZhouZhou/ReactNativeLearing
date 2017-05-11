import React, {Component} from 'react';
import {StyleSheet, Switch, View, Text} from 'react-native';

export default class ZWSwitch extends Component{
  constructor(props){
    super(props)
    this.state = {
      trueSwitchIsOn:true,
      falseSwitchIsOn:false,
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Switch实例</Text>
        <Switch style={{marginTop:10, marginBottom:10, backgroundColor:'transparent'}}
                          value={this.state.trueSwitchIsOn}
                          onValueChange={ (value) => this.setState({trueSwitchIsOn:value}) }
                          onTintColor='red'
                          thumbTintColor='green'
                          tintColor='blue'
        />
        <Switch value={this.state.falseSwitchIsOn}
                          onValueChange={ (value) => this.setState({falseSwitchIsOn:value})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
