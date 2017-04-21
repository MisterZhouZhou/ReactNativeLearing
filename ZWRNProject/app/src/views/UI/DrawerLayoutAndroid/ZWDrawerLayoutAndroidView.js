/**
 * desription 封装了平台DrawerLayout（仅限安卓平台）的React组件。抽屉（通常用于导航切换）
   是通过renderNavigationView方法渲染的，并且DrawerLayoutAndroid的直接子视图会成为主视图（用于放置你的内容）。
   导航视图一开始在屏幕上并不可见，不过可以从drawerPosition指定的窗口侧面拖拽出来，并且抽屉的宽度可以使用drawerWidth
   属性来指定。
 */

import React, { Component } from 'react';
import {DrawerLayoutAndroid, View, Text} from 'react-native';

export default class ZWDrawerLayoutAndroidView extends Component{

  static navigationOptions = {
    title: 'DrawerLayoutAndroid',
  }

  render(){
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        style={{backgroundColor: 'green'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
