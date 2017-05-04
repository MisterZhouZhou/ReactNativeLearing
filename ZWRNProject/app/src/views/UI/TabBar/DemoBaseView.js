import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';


export default class APIBaseView extends Component {
  static navigationOptions = {
    title: 'React Native Demo',
    // tabBarLabel: 'API',
    // tabBarIcon: ({focused, tintColor}) =>
    //   {
    //     if (focused) return (<Image style={{width:20,height:20,backgroundColor:'red'}} />);
    //     else return (<Image style={{width:20,height:20,backgroundColor:'green'}} />);
    //   }

    tabBar: {
      label: 'Demo',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20,backgroundColor:'red'}} />);
        else return (<Image style={{width:20,height:20,backgroundColor:'green'}} />);
      }
    }
  }

  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.cellData = ['RNToOC',
                     'SectionList',
                     ]
    this.state = {
      dataSource:this.ds.cloneWithRows(this.cellData)
    }
  }

  back(rowId){
    this.props.navigation.navigate(this.cellData[rowId])
  }

  render() {
    return (
      <ListView
      style={{flex:1}}
      dataSource={this.state.dataSource}
      renderRow={(rowdata,sessionid,rowId) => this.renderRows(rowdata,rowId)}></ListView>
    );
  }

  renderRows(rowdata,rowId){
    return(
      <TouchableOpacity style={styles.itemcontenter} onPress={() => this.back(rowId)}>
          <Text style={styles.itemText}>{rowdata}</Text>
      </TouchableOpacity>

    )
  }
}


const styles = StyleSheet.create({
  itemcontenter:{flexDirection: 'row', alignItems: 'center',backgroundColor: 'lightgray',height:40,marginBottom:10},
  itemText: {fontSize:16,paddingLeft:10,paddingRight:10}
});

