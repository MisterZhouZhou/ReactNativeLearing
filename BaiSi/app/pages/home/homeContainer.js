
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    InteractionManager,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from 'react-native-navbar';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import HomeList from './homeList';

export default class homeContainer extends Component {
  static navigationOptions = {
    title:'精华',
    header:null,
    tabBarLabel: '精华',
    tabBarIcon: ({ focused, tintColor }) => {
      return (<Icon name="ios-home" size={30} color={focused?'#d81e06':'#333'} style={{marginTop:10}}/>)
    },
  };

  constructor(props){
    super(props);
    this.state = {
        typeArr : [
            {'title':'全部', 'type':'1',},
            {'title':'视频', 'type':'41',},
            {'title':'图片', 'type':'10',},
            {'title':'段子', 'type':'29',},
            {'title':'声音 ', 'type':'31',},
        ],
        typeArr1 : [
            {'title':'IT', 'type':'1',},
            {'title':'财务', 'type':'41',},
            {'title':'营业', 'type':'10',},
            {'title':'受理', 'type':'29',},
            {'title':'管理 ', 'type':'31',},
        ],
    }
  }

  render(){
     let titleConfig = {
            title: '百思不得姐',
            // title:'云知识库',
            style: {color:'red',fontSize:20,fontWeight:'600'}
        };
    return(
      <View style={{flex: 1}}>
        <NavBar
            title={titleConfig}
            style={{height:44,borderBottomWidth:1,borderBottomColor:'#dddddd'}}
        />
        <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar/>}
            tabBarActiveTextColor='red'
            tabBarInactiveTextColor='#rgb(67,67,67)'
            tabBarBackgroundColor='#f7f7f7'
            style={{height:10}}>
            {
                this.state.typeArr.map((item, i) => {
                    return (
                        <HomeList key={i} tabLabel={item.title} type={item.type}
                                   {...this.props}/>
                    )
                })
            }
        </ScrollableTabView>
      </View>
    );
  }
}
