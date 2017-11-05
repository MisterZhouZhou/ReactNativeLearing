import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class HomeTabbar extends Component{

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
      return (
        <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
          <View>
            <Text style={{color: isTabActive ? '#fff' : '#999', fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
          </View>
        </TouchableOpacity>
      );
  }

  render(){
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: deviceWidth / numberOfTabs,
      height: 10,
      top: 30,
      left: 0
    };
    return(
      <View style={styles.container}>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <Animated.View style={[tabUnderlineStyle, {left: this.props.activeTab*(deviceWidth / numberOfTabs)}]} >
          <Image source={require('../assets/ic_play.png')} style={styles.arrow}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  container: {
    height: 40,
  },
  tabs: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'#3a3941',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  arrow :{
    height:10,
    width:10,
    padding:0,
    marginTop:-1,
  }
});
