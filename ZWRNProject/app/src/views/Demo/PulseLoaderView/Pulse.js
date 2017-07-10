
import React,{Component} from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class Pulse extends React.Component {
  constructor(props) {
    super(props);

    this.anime = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.anime, {
      toValue: 1,
      duration: this.props.interval,
      easing: Easing.in,
    })
    .start();
  }

  render() {
    const { size, pulseMaxSize, borderColor, backgroundColor, getStyle } = this.props;

    return (
      <View style={[styles.circleWrapper, {
        width: pulseMaxSize,
        height: pulseMaxSize,
        marginLeft: -pulseMaxSize/2,
        marginTop: -pulseMaxSize/2,
        backgroundColor:'red'
      }]}>
        <Animated.View
          style={[styles.circle, {
            borderColor,
            backgroundColor,
            width: this.anime.interpolate({
              inputRange: [0, 1],
              outputRange: [size, pulseMaxSize]
            }),
            height: this.anime.interpolate({
              inputRange: [0, 1],
              outputRange: [size, pulseMaxSize]
            }),
            borderRadius: pulseMaxSize/2,
            opacity: this.anime.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0]
            })
          }, getStyle && getStyle(this.anime)]}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: (width - 250) /2,
    // top: height/2,
  },
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
  },
});

