import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ListView} from 'react-native';
import Swiper from 'react-native-swiper';

import DiscoverList  from './discover/DiscoverList'
import DiscoverCell from './discover/DiscoverCell'

export default class Discover extends Component {
  static navigationOptions = {
  	header: (navigation) => ({
        style: { backgroundColor: 'white' },
        title:'发现'
      }),
  	tabBar: {
  	  label: '发现',
  	  icon: ({ focused, tintColor }) => {
  	  	return (<Image style={{width:30,height:30}} source={focused?require('../images/icon_find_pre.png'):require('../images/icon_find_nor.png')}/>);
  	  }
  	}
  }

  renderPagination(index, total, context) {
    return (
      <View style={{position: 'absolute', bottom: 20,right: 10}}>
        <Text style={styles.count}>
          <Text>{Math.floor(index + 1)}</Text>/{total}
        </Text>
      </View>
    )
  }

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      dataSource: this.ds.cloneWithRows(DiscoverList),
    }
  }

  selDiscover(discover){
    this.props.navigation.navigate('DiscoverContent',{discover:discover});
  }

  render(){
    return(
      <ScrollView style={{backgroundColor:'#EEE'}}>
        <Swiper
          showsButtons={false}
          height={180}
          autoplayTimeout={3}
          autoplay={true}
          scrollsToTop={true}
          index={0}
          renderPagination={this.renderPagination.bind(this)}>
          <View style={styles.slide}>
            <Image source={require('../images/job1.jpg')} style={styles.backgroundImage}>
              <Text style={styles.swipeText}>2016，只愿带你发现更多</Text>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image source={require('../images/job2.jpg')} style={styles.backgroundImage}>
              <Text style={styles.swipeText}>12张图掌握2016互联网职场薪资</Text>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image source={require('../images/job3.jpg')} style={styles.backgroundImage}>
              <Text style={styles.swipeText}>年轻人不能错过这5家“小而美”的公司</Text>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image source={require('../images/job4.jpeg')} style={styles.backgroundImage}>
              <Text style={styles.swipeText}>智能硬件行业的5个雇主 最值得你抱大腿</Text>
            </Image>
          </View>
        </Swiper>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={{marginTop:20, backgroundColor:'#FFF'}}
        />
      </ScrollView>
    );
  }

   _renderRow(discoverData: Object, sectionID: number, rowID: number) {
    return (
      <DiscoverCell
        onSelect={()=>this.selDiscover(discoverData)}
        discoverData={discoverData}/>
    );
  }
}

var styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  swipeText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 120,
    marginLeft: 10,
    width: 250,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  count: {
    width: 30,
    height: 25,
    borderRadius: 15,
    textAlign:'center',
    lineHeight: 23,
    backgroundColor: '#FFF',
    opacity: 0.9,
  },
});
