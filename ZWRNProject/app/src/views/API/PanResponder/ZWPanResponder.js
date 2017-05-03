import React, {Component} from 'react';
import {View, Text, PanResponder, StyleSheet, processColor,} from 'react-native';

/*
  onPanResponderMove: (event, gestureState) => {}
  原生事件是指由以下字段组成的合成触摸事件：

  nativeEvent
  changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
  identifier - 触摸点的ID
  locationX - 触摸点相对于父元素的横坐标
  locationY - 触摸点相对于父元素的纵坐标
  pageX - 触摸点相对于根元素的横坐标
  pageY - 触摸点相对于根元素的纵坐标
  target - 触摸点所在的元素ID
  timestamp - 触摸事件的时间戳，可用于移动速度的计算
  touches - 当前屏幕上的所有触摸点的集合
  一个gestureState对象有如下的字段：

  stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
  moveX - 最近一次移动时的屏幕横坐标
  moveY - 最近一次移动时的屏幕纵坐标
  x0 - 当响应器产生时的屏幕坐标
  y0 - 当响应器产生时的屏幕坐标
  dx - 从触摸操作开始时的累计横向路程
  dy - 从触摸操作开始时的累计纵向路程
  vx - 当前的横向移动速度
  vy - 当前的纵向移动速度
  numberActiveTouches - 当前在屏幕上的有效触摸点的数量
 */


var CIRCLE_SIZE = 80;

export default class ZWPanResponder extends Component{
  constructor(props){
    super(props);
      _panResponder: {}
      _previousLeft: 0
      _previousTop: 0
      _circleStyles: {}
      circle: (null : ?{ setNativeProps(props: Object): void })
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
  }

  componentDidMount() {
    this._updateNativeStyles();
  }

  render() {
    return (
      <View
        style={styles.container}>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }

  _highlight() {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight() {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }

  _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    this._highlight();
  }

  _handlePanResponderMove(e: Object, gestureState: Object) {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }
}

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});
