import React, { Component } from 'react';
import {StyleSheet, Text, View, ListView, Image, Dimensions} from 'react-native';

let {height ,width} = Dimensions.get('window');

import JobList from './home/JobList';
import JobCell from './home/JobCell';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <Text style={{color:'#FFFFFF', fontSize:20}}>
          拉勾
        </Text>
        <View style={styles.searchInput}>
          <Image source={require('../images/icon_search.png')} style={{width:15,height:15,marginRight:8}}/>
          <Text style={{color:'#14ba91',fontSize:13}}>
            输入职位名或公司名
          </Text>
        </View>
      </View>
    );
  }
}

export default class Home extends Component {

  static navigationOptions = {
    header: (navigation) => ({
      style: { backgroundColor: '#11a984' },
      title:(
           <SearchBar />
        )
    }),
    tabBar: {
      label: '首页',
      icon: ({ focused, tintColor }) => {
        return (<Image style={{width:30,height:30}} source={focused?require('../images/icon_home_pre.png'):require('../images/icon_home_nor.png')}/>);
      },
    }
  }

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
    this.state={
      dataSource:this.ds.cloneWithRows(JobList)
    }
  }

  selectJob(job){
      this.props.navigation.navigate('JobDetail',{job:job});
  }
  render(){
    return(
       <View style={styles.container}>
         <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
      />
      </View>
    );
  }

  _renderHeader() {
  return (
    <View style={styles.headerBody}>
      <Image source={require('../images/icon_find_ok.png')} style={{width:52,height:50}}/>
      <View style={{paddingLeft:20}}>
        <Text style={{fontSize:18}}>可<Text style={{color:'#11a984'}}>直接沟通</Text>的职位推荐</Text>
        <Text style={{marginTop:15,fontSize:13,color:'#999'}}>来和老板直接聊offer吧</Text>
      </View>
    </View>
  )
}

  _renderRow(jobData: Object, sectionID: number, rowID: number) {
    return (
      <JobCell onSelect={() => this.selectJob(jobData)} jobData={jobData}/>
    );
  }

}


var styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#11a984',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:width,
  },
  headerBody: {
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 15,
    flexDirection: 'row',
  },
  searchInput: {
    borderRadius: 15,
    backgroundColor: '#0f9574',
    paddingTop: 7,
    paddingBottom: 7,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});
