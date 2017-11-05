import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Animated, Easing, Image, Dimensions, TouchableHighlight, Platform, TouchableOpacity} from 'react-native'
import TimerMixin from 'react-timer-mixin';

const {width, height} = Dimensions.get('window');
const navigatorH = 64; // navigator height
const [aWidth,aHeight] = [300,214];
const [left, top] = [0,0];
const [middleLeft,middleTop] = [(width-aWidth)/2,height-aHeight-navigatorH-20];

export default class ActionSheet extends Component{
  mixins = [TimerMixin];
  callBack = ()=>{};
  constructor(props){
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0),
      title: '',
      choose1: '',
      choose2: '',
      hide: true
    };
  }

  show(title: string, choose1:string,choose2:string ,obj:func) {
    if(typeof obj === 'function'){this.callBack = obj;}
    if(this.state.hide){
      this.setState({title: title, choose1: choose1, choose2: choose2, hide: false}, this.in);
    }
  }

   //取消
  iknow(event) {
    if(!this.state.hide){
      this.out();
    }
  }

  //选择
  choose(msg) {
    if(!this.state.hide){
      this.out();
      this.callBack(msg);
    }
  }

  //显示动画
  in(){
    Animated.timing(
      this.state.opacity,
      {
        easing: Easing.linear,
        duration: 400,
        toValue: 0.8,
    }).start();
  }

  // 隐藏动画
  out(){
    Animated.timing(
      this.state.opacity,
      {
        easing: Easing.linear,
        duration: 400,
        toValue: 0,
      }
    ).start();
    setTimeout(
      () => this.setState({hide: true}),
      500
    );
  }

  render(){
    if(this.state.hide){
      return(<View/>);
    }
    return(
      <View style={styles.container}>
        <Animated.View style={[styles.mask,{opacity:this.state.opacity}]}>
          <TouchableOpacity style={{flex: 1}} activeOpacity={1} onPress={this.iknow.bind(this)}></TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.tip , {transform: [{
                translateY: this.state.opacity.interpolate({
                 inputRange: [0, 0.8],
                 outputRange: [height, middleTop]
                }),
              }]
            }]}>
            <View style={[{backgroundColor: 'white'},Platform.OS === 'ios'?{borderRadius: 4}:null]}>
              <View style={styles.tipTitleView}>
                <Text style={styles.tipTitleText}>{this.state.title}</Text>
              </View>
              <TouchableHighlight style={styles.tipContentView} underlayColor='#f0f0f0' onPress={this.choose.bind(this,this.state.choose1)}>
                <Text style={styles.tipText} >{this.state.choose1}</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.tipContentView} underlayColor='#f0f0f0' onPress={this.choose.bind(this,this.state.choose2)}>
                <Text style={styles.tipText} >{this.state.choose2}</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight style={[styles.button,Platform.OS === 'ios'?{borderRadius: 4,}:null]} underlayColor='#f0f0f0' onPress={this.iknow.bind(this)}>
              <Text style={styles.buttonText}>取消</Text>
            </TouchableHighlight>
          </Animated.View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position:"absolute",
    width:width,
    height:height,
    left:left,
    top:top,
  },
  mask: {
    justifyContent:"center",
    backgroundColor:"#383838",
    opacity:0.8,
    position:"absolute",
    width:width,
    height:height,
    left:left,
    top:top,
  },
  tip: {
    width:aWidth,
    height:aHeight,
    left:middleLeft,
    backgroundColor:"transparent",
    alignItems:"center",
    // justifyContent:"space-between",
  },
  tipTitleView: {
    height:55,
    width: aWidth,
    // backgroundColor: '#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  tipTitleText:{
    color:"#999999",
    fontSize:14,
  },
  tipContentView: {
    height:45,
    width:aWidth,
    borderTopWidth:1,
    borderColor:"#f0f0f0",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: 'white'
  },
  tipText:{
    color:"#e6454a",
    fontSize:17,
    textAlign:"center",
  },
  button: {
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10
    //marginLeft: 10,
    //marginRight: 10,
  },
  buttonText: {
    fontSize:17,
    color:"#e6454a",
    textAlign:"center",
  },
 });
