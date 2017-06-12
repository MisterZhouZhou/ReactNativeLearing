import React ,{ Component } from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import ImageViewer from './ZWImageSwiperView';

export default class ZWImageSwiper extends Component{

  render(){
    const images = [
        'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg',
        'http://img.sc115.com/uploads1/sc/jpgs/1508/apic22412_sc115.com.jpg',
         'http://h.hiphotos.baidu.com/zhidao/pic/item/0df431adcbef7609bca7d58a2adda3cc7cd99e73.jpg'
         ]
    return(
       <View style={{ width: 400, height: 300, display: 'flex' }}>
          <Text onPress={()=>this.props.navigation.navigate('ZWImageSwiperView',{imageUrls:images,index:1})}>查看图片</Text>
       </View>
    );
  }
}
