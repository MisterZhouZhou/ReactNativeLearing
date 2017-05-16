import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Splash extends Component {
  componentWillMount() {
    var { navigator } = this.props;
    // setTimeout(() => {
    //   navigator.replace({
    //     title: 'MainPage',
    //     component: MainPage,
    //   });
    // }, 1000);
  }

  render() {
    return (
       <View style={styles.container}>
          <Image source={require('./images/hello_page_bg.png')} style={[styles.backgroundImage,{width: width,height: height}]}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor:'red'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor:'red',
    // backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
});
