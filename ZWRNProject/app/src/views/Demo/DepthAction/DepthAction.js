import React ,{ Component } from 'react'
import {StyleSheet, View, Text, ListView, TouchableOpacity} from 'react-native'

import ItemCell from './ItemCell'

export default class DepthAction extends Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(['row1','row2','row3']),
    }
  }

  selectedAction(){
    alert('selectedAction');
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
          <Text>action多重传递测试</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          />
        </View>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
       <ItemCell data={rowData} onSelected={()=>this.selectedAction()}/>
    );
  }
}


