
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import NetInfoExamples from './NetInfoExample'

// NetInfo模块可以获知设备联网或离线的状态信息。

/* iOS 网络状态
    none - 设备处于离线状态。
    wifi - 设备处于联网状态且通过wifi链接，或者是一个iOS的模拟器。
    cell - 设备是通过Edge、3G、WiMax或是LTE网络联网的。
    unknown - 发生错误，网络状况不可知
 */


/*Android的联网类型：
    NONE - 设备处于离线状态
    BLUETOOTH - 蓝牙数据连接
    DUMMY - 模拟数据连接
    ETHERNET - 以太网数据连接
    MOBILE - 移动网络数据连接
    MOBILE_DUN - 拨号移动网络数据连接
    MOBILE_HIPRI - 高优先级移动网络数据连接
    MOBILE_MMS - 彩信移动网络数据连接
    MOBILE_SUPL - 安全用户面定位（SUPL）数据连接
    VPN - 虚拟网络连接。需要Android5.0以上
    WIFI - WIFI数据连接
    WIMAX - WiMAX数据连接
    UNKNOWN - 未知数据连接
*/

export default class ZWNetInfo extends Component{
  render(){
    var eleArray = [];
    for(var i = 0; i < NetInfoExamples.examples.length; i++){
      var ele=(
        <View style={styles.itemCell} key={i}>
           <Text>{NetInfoExamples.examples[i].title}</Text>
           {NetInfoExamples.examples[i].render()}
        </View>
      );
      eleArray.push(ele);
    }
    return(
      <ScrollView>{eleArray}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    itemCell: {
      margin: 5,
      padding:15,
      backgroundColor:'white'
    }
});
