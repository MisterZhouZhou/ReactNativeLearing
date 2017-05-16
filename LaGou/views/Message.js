import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image, ScrollView, AlertIOS} from 'react-native';

import Discover from './Discover'

export default class Message extends Component {
  static navigationOptions = {
    header: (navigation) => ({
        style: { backgroundColor: 'white' },
        title:'消息'
      }),
    tabBar: {
      label: '消息',
      icon: ({ focused, tintColor }) => {
        return (<Image style={{width:30,height:30}} source={focused?require('../images/icon_message_pre.png'):require('../images/icon_message_nor.png')}/>);
      }
    }
  }

  _itemPress(idx) {
    AlertIOS.alert(
      '等待添加',
      null,
      [{text: 'OK', onPress: () => alert(idx), type: 'default'}]
    )
  }

  render(){
    var arr = [ {icon:require('../images/icon_user_info_name.png'),title:'谁看过我'},
                {icon:require('../images/icon_user_info_mail.png'),title:'简历状态通知'},
                {icon:require('../images/icon_user_info_work.png'),title:'职位邀请通知'}]
    var itemArr = arr.map((itemData,idx)=>{
      return(
          <TouchableHighlight key={'idx_'+idx} underlayColor='#E8E8E8' onPress={this._itemPress.bind(this,idx)}>
            <View>
              <View style={styles.itemCell}>
                <Image style={styles.thumb} source={itemData.icon}/>
                <View style={{flex:2, paddingLeft: 10}}>
                  <Text style={{fontSize:16, marginBottom: 15}}>{itemData.title}</Text>
                  <Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          </TouchableHighlight>
        );
    });
    return(
      <ScrollView>
        {itemArr}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumb: {
    width: 50,
    height: 50,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  itemCell: {backgroundColor:'white', padding:10, flexDirection:'row'}
});
