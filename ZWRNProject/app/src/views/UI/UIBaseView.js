import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class UIBaseView extends Component {

  static navigationOptions = {
    title:'UI',
    tabBar: {
      label: 'UI',
      icon: ({ focused, tintColor }) => {
        if (focused) return (<Image style={{width:20,height:20,backgroundColor:'red'}} />);
        else return (<Image style={{width:20,height:20,backgroundColor:'green'}} />);
      }
    }
  };

  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged:(row1, row2) => row1 !== row2
    });

    this.state = {
       dataSource: this.ds.cloneWithRows(['TabNavigator','DrawerNavigator'])
    }
  }

  enterCollection(rowId){
    //const { navigate } = this.props.navigation;
    // 跳转
    //navigate('Collection');
    this.props.navigation.navigate('Details')
  }

  render() {
    return (
       <ListView style = {{flex:1}}
         dataSource = {this.state.dataSource}
         renderRow = {(rowdata,sessionid,rowid)=>this._renderRow(rowdata,rowid)}
       >
       </ListView>
    );
  }

  _renderRow(rowdata,rowid){
    return(
      <TouchableOpacity style={styles.item} onPress = {() => this.enterCollection(rowid)}>
        <Text style={styles.itemText}>{rowdata}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {marginBottom: 10, height: 40, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center'},
  itemText: {fontSize: 16,}
});
