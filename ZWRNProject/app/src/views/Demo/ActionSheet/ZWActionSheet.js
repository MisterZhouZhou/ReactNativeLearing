import React ,{ Component } from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import ActionSheet from './ActionSheet';
export default class ZWActionSheet extends Component{
  showAction(){
    this.actionSheet.show('title','chose1','chose2',(msg)=>{alert(msg)});
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.showAction.bind(this)}>
          <Text>ZWActionSheet</Text>
        </TouchableOpacity>
        <ActionSheet ref ={e => this.actionSheet = e}/>
      </View>
    );
  }
}
