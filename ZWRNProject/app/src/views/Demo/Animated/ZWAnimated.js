import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Animated, Easing, Image, Dimensions} from 'react-native'

let {width, height} = Dimensions.get('window');
let viewHeight = 100;

let animationT=0;//定义一个全局变量来标示动画时间
let animationN=30,//余弦函数的极值倍数，即最大偏移值范围为正负50
    animationM=60;//余弦函数偏移值，使得极值在100-200之间,可以用来设置高度

export default class ZWAnimated extends Component{
   constructor(props) {
        super(props);
        this.state = {
            transformView: new Animated.Value(0),
        };
    }

   componentDidMount() {
       Animated.timing(this.state.transformView,{toValue:1,duration:1000}).start();
       animationT=0;
      // requestAnimationFrame(this.loopAnimation.bind(this));//组件加载之后就执行loopAnimation动画
      this.loopAnimation();
      this.timer = setInterval(() => {
        this.loopAnimation();
      },10);
   }

  loopAnimation(){
    var t0=animationT,t1=t0+0.5,t2=t1+0.5,t3=t2+0.5,t4=t3+0.5;//这里分别是四个动画的当前时间，依次加上了0.5的延迟
    var v1=Number(Math.cos(t0).toFixed(2))*animationN+animationM;//将cos函数的小数值只精确到小数点2位，提高运算效率
    var v2=Number(Math.cos(t1).toFixed(2))*animationN+animationM;
    var v3=Number(Math.cos(t2).toFixed(2))*animationN+animationM;
    var v4=Number(Math.cos(t3).toFixed(2))*animationN+animationM;
    this.setState({
      fV:v1,
      sV:v2,
      tV:v3,
      foV:v4
    });
    animationT+=0.15;//增加时间值，每次增值越大动画越快
    // requestAnimationFrame(this.loopAnimation.bind(this));
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render(){
     return(
            <View style={{flex:1}}>
                <View style={layouts.lineLayout}/>
                <Animated.View
                    style={[layouts.bgViewLayout,{transform:[
                        {translateY: -viewHeight/2},
                        {rotateX:this.state.transformView.interpolate({inputRange:[0,1], outputRange:['0deg','180deg']})},
                        {translateY:viewHeight/2}
                    ]}]}/>
                <View style={layouts.square}>
                  <Animated.View style={[layouts.line,{height:this.state.fV}]}></Animated.View>
                  <Animated.View style={[layouts.line,{height:this.state.sV}]}></Animated.View>
                  <Animated.View style={[layouts.line,{height:this.state.tV}]}></Animated.View>
                  <Animated.View style={[layouts.line,{height:this.state.foV}]}></Animated.View>
                </View>
            </View>
        );
  }
}



const layouts = StyleSheet.create({
    bgViewLayout:{
        width:width * 0.3,
        height:viewHeight,
        top: 100,
        left:100,
        backgroundColor:'red',
        shadowColor:'gray',
        shadowOffset:{width:1,height:0},
        shadowRadius:10,
        shadowOpacity:0.8
    },
    lineLayout:{
        width:width,
        height:0.5,
        top:100,
        backgroundColor:'black'
    },
    bgLayout:{
        width:100,
        height:100,
        top:250,
        left:50,
        backgroundColor:'green',
        overflow:'hidden'
    },
    imageLayout:{
        width:100,
        height:200,
        top:-100,
        left:0,
        backgroundColor:'yellow'
    },
    square:{
      width:200,
      height:200,
      backgroundColor:'lightgray',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    line:{
      width:5,
      height:50,
      backgroundColor:'green',
      marginLeft:5
    }
});
