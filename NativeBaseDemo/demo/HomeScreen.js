/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 != r2});
    this.state = {
      dataSource:this.ds.cloneWithRows([])
    }
  }

  componentDidMount(){
    let cell = [ 'Drawer',
                  'Drawer1'
                ];
    this.setState({dataSource:this.ds.cloneWithRows(cell)});
  }

  onCellPress(rowData){
    this.props.navigation.navigate(rowData);
  }

  render() {
    return (
       <ListView style={{flex: 1}}
         dataSource={this.state.dataSource}
         renderRow={this._renderRow.bind(this)}
         enableEmptySections={true}
       />
    );
  }

  _renderRow(rowData){
    return(
      <TouchableOpacity style={{backgroundColor: 'lightgray', padding: 10, marginTop: 10}} onPress={this.onCellPress.bind(this,rowData)}>
        <Text>{rowData}</Text>
      </TouchableOpacity>
    );
  }
}


