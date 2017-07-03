import React, { Component } from 'react'
import {ListView, Text, View, Dimensions} from 'react-native';
import RefreshListView,{RefreshState} from './RefreshListView'
let {width} = Dimensions.get('window');
export default class ZWCustomListView extends Component {
  constructor(props: Object) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataArray = ['row1','row2','row3','row4','row5','row6','row7','row8','row9','row10','row11','row12'];
    this.state = {
        dataSource: this.ds.cloneWithRows([]),
    }
  }

  componentDidMount() {
      // this.listView.startHeaderRefreshing();
      this.requestData(true);
  }

  requestData(more){
      if(more){
        this.dataArray.push('row'+(this.dataArray.length+1));
        this.setState({
         dataSource: this.ds.cloneWithRows(this.dataArray)});
      }

      // setTimeout(() => {
      //             this.listView.endRefreshing(RefreshState.NoMoreData)
      //         }, 500);
      setTimeout(() => {
                  this.listView.endRefreshing(RefreshState.Idle)
              }, 500);
      // this.refs.listView.endRefreshing(RefreshState.Failure)
  }



  render(){
    return(
      <RefreshListView
      ref={e=>this.listView = e}
      dataSource={this.state.dataSource}
      renderHeader={() =><View style={{width: width, height: 40, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}><Text>renderHeader</Text></View>}
      renderRow={(rowData) => <Text style={{height: 40}}>{rowData}</Text>}
      onHeaderRefresh={() => this.requestData(true)}
      footerView = {()=> <View style={{width: width, height: 40, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}><Text>自定义footerView,由自己定义</Text></View>}
      showFootMinNumber={14}
      onFooterRefresh={()=> {alert('onFooterRefresh');this.requestData(false)}}
      />
    );
  }
}
