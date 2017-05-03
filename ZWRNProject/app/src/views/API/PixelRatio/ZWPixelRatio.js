/*
  获取一个像素点的宽度
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, PixelRatio, Image} from 'react-native';

let {width,height} = Dimensions.get('window');

export default class ZWPixelRatio extends Component {
  componentWillMount() {
     alert(PixelRatio.getFontScale());
  }

  render() {
    return(
      <View style = {styles.flex}>
          <Image source = {{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'}}
                 style = {[styles.image,styles.top_center]}></Image>

          <Image source = {{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'}}
                 style = {[styles.image,styles.borders,styles.top_center]}></Image>
      </View>
    );
  }
}

//获取一个像素的点
var minP = 1/PixelRatio.get();
var styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    top_center: {
        marginTop : 74,
        alignSelf:'center',
    },
    image : {
        width: PixelRatio.getPixelSizeForLayoutSize(80),
        height: PixelRatio.getPixelSizeForLayoutSize(80),
    },
    borders: {
        borderWidth: minP,
        borderColor: '#2f4d3c'
    }
})
