import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Drawer} from '../../src';
const {width, height} = Dimensions.get('window');

export default class ZWDrawView extends Component {
  static navigationOptions = {
    title:'ZWDrawView',
    header: null
  }

  constructor(props){
    super(props);
    this.state={
      show:false
    }
  }
  showDraw(){
     this.setState({show:true});
     this.drawer._root.open();
  }

  closeDraw(){
    this.setState({show:false});
    this.drawer._root.close();
  }

  back(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Drawer ref={(e)=>this.drawer=e} content={
        <View style={{flex: 1, backgroundColor:'green'}} opacity={this.state.show}>
          <TouchableOpacity onPress={this.closeDraw.bind(this)} style={{marginTop:20}}>
            <Text>DrawerDrawerDrawerDrawerDrawerDrawerDrawerDrawer</Text>
         </TouchableOpacity>
        </View>}
        >
         <View style={{width:width,height:64,backgroundColor:'lightgray',flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity onPress={this.back.bind(this)} style={{marginTop:10}}>
             <Image style={{width:20,height:20,backgroundColor:'red'}}/>
           </TouchableOpacity>
           <View style={{marginTop:10,flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             <Text>ZWDrawView</Text>
           </View>
         </View>
         <TouchableOpacity onPress={this.showDraw.bind(this)} style={{marginTop:20}}>
            <Text>点击显示侧边栏</Text>
         </TouchableOpacity>
      </Drawer>
    );
  }
}
