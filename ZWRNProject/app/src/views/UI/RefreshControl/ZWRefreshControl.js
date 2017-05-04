import React ,{Component} from 'react';
import {View, Text, StyleSheet, RefreshControl, TouchableWithoutFeedback, ScrollView} from 'react-native';

const Row = React.createClass({
  _onClick(){
    this.props.onClick();
  },
  render(){
    return(
      <TouchableWithoutFeedback onPress={this._onClick}>
         <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

export default class ZWRefreshControl extends Component{
  constructor(props){
    super(props);
    this.state={
      isRefreshing:false,
      loaded:0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
    }
  }

  _onClick(row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }

   _onRefresh() {
    this.setState({isRefreshing:true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 2000);
  }

  render(){
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={()=>this._onClick(row)}/>;
    });
    return(
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={()=>this._onRefresh()}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }>
        {rows}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});
