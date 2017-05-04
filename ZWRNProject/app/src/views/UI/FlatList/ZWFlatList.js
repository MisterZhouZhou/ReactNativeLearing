import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class SeparatorComponent extends Component{
  render(){
    return(
      <View style={{height:10,backgroundColor:'lightgray'}}>
      </View>
    );
  }
}

class HeaderComponent extends Component{
  render(){
    return(
      <View style={{height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
        <Text>HeaderComponent</Text>
      </View>
    );
  }
}

class FooterComponent extends Component{
  render(){
    return(
      <View style={{height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
        <Text>FooterComponent</Text>
      </View>
    );
  }
}


export default class ZWPixelRatio extends Component {

  render(){
    return(
      <AnimatedFlatList
       ItemSeparatorComponent={SeparatorComponent}
       ListHeaderComponent={HeaderComponent}
       ListFooterComponent={FooterComponent}
       data={['key1','key2','key3']}
       renderItem={({item}) => this.renderCell(item)}
      />
    );
  }

  renderCell(item){
    return(
      <Text key={item.id} style={{padding:10}}>{item}</Text>
    );
  }
}
