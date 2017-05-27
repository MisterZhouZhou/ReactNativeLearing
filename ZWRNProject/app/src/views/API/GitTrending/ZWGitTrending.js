/**
 * 从https://github.com/trending获取数据
 * 项目地址:https://github.com/crazycodeboy/GitHubTrending
 * 博客地址:http://www.devio.org
 * @flow
 */
import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

import GitHubTrending from './GitHubTrending'

export default class ZWGitTrending extends Component{
  // constructor(props){
  //   super(props);
  //   {
  //    let a = 1;
  //    var b = 2;
  //   }
  //   alert(a);  // Can not find Variable:a
  //   alert(b);     // 2

  // }
  request(){
    new GitHubTrending().fetchTrending('https://github.com/trending');
  }
  render(){
    return(
      <TouchableHighlight style={{height:40,}} onPress={()=>this.request()}>
        <Text>从trending获取数据</Text>
      </TouchableHighlight>
    );
  }
}
