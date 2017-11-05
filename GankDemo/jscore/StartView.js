import React, { Component } from 'react'
import {Text, StyleSheet, Animated, View, Image, TouchableHighlight} from 'react-native'
import {RootNavigator} from './RootNavigation';
export default class StartView extends Component {
  constructor(props){
    super(props);
    this.state = ({
      isLoading: true,
      fadeAnimLogo: new Animated.Value(0), // 设置动画初始值，生成Value对象
      fadeAnimText0: new Animated.Value(0),
      fadeAnimText1: new Animated.Value(0),
      fadeAnimLayout: new Animated.Value(1)
    })
  }

  componentDidMount () {
    let timing = Animated.timing
    Animated.sequence([
      timing(this.state.fadeAnimLogo, {
        toValue: 1,
        duration: 800
      }),
      timing(this.state.fadeAnimText0, {
        toValue: 1,
        duration: 800
      }),
      timing(this.state.fadeAnimText1, {
        toValue: 1,
        duration: 800
      })
    ]).start(() => {
      setTimeout(() => this._hideWelcome(), 550);
    });
  }

  _hideWelcome () {
    if (!this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: false
    });
  }


  render(){
    if(!this.state.isLoading){
      return (<RootNavigator/>)
    }
    return(
      <View style={styles.content} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid >
        <View style={{backgroundColor: 'black', flex: 1}}/>
        {this._welcome()}
      </View>
    );
  }


_welcome () {
    if (this.state.welcomeEnd) {
      return null
    }
    let snackBar = this.state.isError
    ? (<SnackBar/>)
    : null

    return (
      <Animated.View style={[styles.indicatorWrapper, {
        opacity: this.state.fadeAnimLayout
      }]}>
        <Animated.View
          style={{
            opacity: this.state.fadeAnimLogo, // Binds directly
            marginTop: 220,
            alignItems: 'center',
            transform: [{
              translateX: this.state.fadeAnimLogo.interpolate({
                inputRange: [0, 1],
                outputRange: [-40, 0]  // 0 : 150, 0.5 : 75, 1 : 0
              })
            }]
          }}>
          <Image source={require('./images/gank_launcher.png')} style={{width: 100, height: 100}}/>
        </Animated.View>
        <Animated.View
          style={{
            opacity: this.state.fadeAnimText0,
            position: 'absolute',
            bottom: 50,
            transform: [{
              translateX: this.state.fadeAnimText0.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 25]
              })
            }]
          }}>
          <Text style={styles.footerText}>Supported by: Gank.io</Text>
        </Animated.View>

        <Animated.View
          style={{
            opacity: this.state.fadeAnimText1,
            position: 'absolute',
            bottom: 30,
            transform: [{
              translateX: this.state.fadeAnimText1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 25]
              })
            }]
          }}>
          <Text style={styles.footerText}>Powered by: 北京杰讯云动力科技有限公司</Text>
        </Animated.View>
        {snackBar}
      </Animated.View>
      )
  }
}

var styles = StyleSheet.create({
   content: {
    backgroundColor: '#434243',
    flex: 1
  },
  indicatorWrapper: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  footerText: {
    color: '#aaaaaa',
    fontSize: 15
  }

})
