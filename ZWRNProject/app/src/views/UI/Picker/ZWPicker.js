import React ,{Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default class ZWPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      language:'java'
    }
  }
  render(){
    return(
      <Picker
        selectedValue={this.state.language}
        onValueChange={(lang) => this.setState({language:lang})}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    );
  }
}
