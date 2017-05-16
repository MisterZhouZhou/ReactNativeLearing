import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    header: {visible: false},
    tabBar: {
      label: '我',
      icon: ({ focused, tintColor }) => {
        return (<Image style={{width:30,height:30}} source={focused?require('../images/icon_user_pre.png'):require('../images/icon_user_nor.png')}/>);
      }
    }
  }

  _pressButton(title){
    this.props.navigation.navigate('Resume',{title:title});
  }
  render(){
    return(
       <ScrollView style={styles.container}>
        <View style={{height:150}}>
          <Image source={require('../images/user_photo_bg.png')} style={styles.backgroundImage}>
            <Image source={{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'}} style={styles.user}/>
            <Text style={{fontSize:18, marginTop: 6, color: '#FFF'}}>This is your name</Text>
          </Image>
        </View>
        <TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '我的简历')}>
          <View>
            <View style={{padding:10, flexDirection:'row'}}>
              <Image style={styles.thumb} source={require('../images/icon_user_resume.png')}/>
              <View style={{flex:2, paddingLeft: 10}}>
                <Text style={{fontSize:16, marginTop: 6}}>简历</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#E8E8E8'>
          <View>
            <View style={{padding:10, flexDirection:'row'}}>
              <Image style={styles.thumb} source={require('../images/icon_forget_password.png')}/>
              <View style={{flex:2, paddingLeft: 10, flexDirection:'row'}}>
                <Text style={{fontSize:16, marginTop: 6, flex: 1}}>PLUS</Text>
                <Text style={{fontSize:16, marginTop: 6, textAlign: 'right', color: '#999'}}>已开启</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '我的收藏')}>
          <View>
            <View style={{padding:10, flexDirection:'row'}}>
              <Image style={styles.thumb} source={require('../images/icon_user_collect.png')}/>
              <View style={{flex:2, paddingLeft: 10}}>
                <Text style={{fontSize:16, marginTop: 6}}>收藏</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '意见反馈')}>
          <View>
            <View style={{padding:10, flexDirection:'row'}}>
              <Image style={styles.thumb} source={require('../images/icon_user_feedback.png')}/>
              <View style={{flex:2, paddingLeft: 10}}>
                <Text style={{fontSize:16, marginTop: 6}}>意见反馈</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '设置')}>
          <View>
            <View style={{padding:10, flexDirection:'row'}}>
              <Image style={styles.thumb} source={require('../images/icon_user_setting.png')}/>
              <View style={{flex:2, paddingLeft: 10}}>
                <Text style={{fontSize:16, marginTop: 6}}>更多设置</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'stretch',
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  thumb: {
    width: 30,
    height: 30,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
});

