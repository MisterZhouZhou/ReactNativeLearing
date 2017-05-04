import React, {Component} from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';

exports.framework = 'React';
exports.title = '<ZWView>';
exports.description = 'View example';

exports.examples = [
  {
    title: 'background Color',
    render(){
      return(
        <View style={{backgroundColor: 'red', height:30}}></View>
      );
    }
  },
  {
    title: 'Border',
    render(){
      return(
        <View style={{backgroundColor: 'green', height:40, borderWidth: 5, borderColor: 'red'}}>
          <Text>5px red border</Text>
        </View>
      );
    }
  },
  {
    title: 'Padding/Margin',
    render(){
      return(
        <View style={{height:80, borderTopWidth: 2, borderLeftWidth: 2, borderColor: 'red'}}>
           <Text style={{backgroundColor: 'blue', padding: 5}}>5px padding</Text>
           <Text style={{backgroundColor: 'blue', margin: 5}}>5px margin</Text>
           <Text style={{backgroundColor: 'blue', padding: 5, margin: 5}}>5px margin</Text>
        </View>
      );
    }
  },
  {
    title: 'demo',
    render(){
      return(
        <View style={styles.container}>
           <View style={[styles.item,styles.center]}>
               <Text style={styles.textColor}>酒店</Text>
           </View>
           <View style={[styles.item, styles.lineLeftRight]}>
               <View style={[styles.flex, styles.center, styles.lineCenter]}>
                 <Text style={styles.textColor}>海外酒店</Text>
               </View>
               <View style={[styles.flex,styles.center]}>
                 <Text style={styles.textColor}>特惠酒店</Text>
               </View>
           </View>
           <View style={[styles.item, styles.lineLeftRight]}>
               <View style={[styles.flex, styles.center, ,styles.lineCenter]}>
                 <Text style={styles.textColor}>团购</Text>
               </View>
               <View style={[styles.flex,styles.center]}>
                 <Text style={styles.textColor}>客栈、公寓</Text>
               </View>
           </View>
        </View>
      );
    }
  },
  {
    title: 'position demo',
    render(){
      return(
        <View>
           <View style={{zIndex:10,width:100,height:30,backgroundColor:'red'}}></View>
           <View style={{width:100,height:30,backgroundColor:'yellow',maxWidth:50}}></View>
           <View style={{position:'absolute',left:20,top:0,width:100,height:30,backgroundColor:'green'}}></View>
        </View>
      );
    }
  },
]

const styles = StyleSheet.create({
    flex: {flex: 1},
    container: {flex: 1, flexDirection: 'row', backgroundColor: 'pink', borderRadius: 5, padding: 2},
    item: {flex: 1, height: 80},
    center: {justifyContent: 'center', alignItems: 'center'},
    lineLeftRight: {borderLeftWidth: 1/PixelRatio.get(), borderColor: '#fff'},
    lineCenter: {borderBottomWidth: 1/PixelRatio.get(), borderColor: '#fff'},
    textColor: {color: '#fff',fontWeight: 'bold' }
});
