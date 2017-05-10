import React ,{ Component } from 'react'
import {StyleSheet, View, Text, ListView, TouchableOpacity} from 'react-native'

export default class ItemCell extends Component{
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(['row4','row5','row6']),
    }
  }
  render(){
     return(
        <ListView
        style={{flex:1,marginBottom:20}}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        />
     );
   }

   _renderRow(rowData, sectionID, rowID) {
    return (
       <SecondItemCell data={rowData} onSelect={this.props.onSelected} />
    );
  }
}


/* ItemCell */
class SecondItemCell extends Component{
   render(){
     return(
        <TouchableOpacity onPress={this.props.onSelect}>
           <View style={{height:40,backgroundColor:'red',marginTop:5,padding:10}}>
             <Text>{this.props.data}</Text>
           </View>
        </TouchableOpacity>
     );
   }
}
