import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ART, ScrollView, Dimensions, Animated} from 'react-native'
var {Surface, Group, Shape, Path} = ART;
import SpeedCanvas from "./SpeedCanvas";
import ZWTextInput from '../../../ZWTextInput'
export default class ZWArt extends Component{

  constructor(props){
    super(props);
    this.state={
      speed:1
    }
  }
  goToHeart(){
    this.props.navigation.navigate('Heart');
  }

  goToCircle(){
    this.props.navigation.navigate('CircleProcess');
  }

  changeSpeed(){
      var sp = this.state.speed;
      sp = Math.random()*100;
      this.setState({speed:sp});
  }

  render(){
     const path = Path()
            .moveTo(1,1)//移动起始点
            .lineTo(300,1);//绘制结束后的坐标点
     const   path2=new Path()
    .moveTo(40,40)
    .lineTo(99,10);

    const pathRect = new Path()
            .moveTo(1,1)
            .lineTo(1,99)
            .lineTo(99,99)
            .lineTo(99,1)
            .close();

        const pathCircle = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close();

        const pathText = new Path()
            .moveTo(40,5)
            .lineTo(40,99);

         const _path = new Path('M0 0 Q5 20, 10 20 T15 35, Q17.5 50, 20 50 T25 25, Q27.5 0, 30 0 T35 0, Q37.5 0, 40 0 T45 15, Q47.5 30, 50 30 T55 20, Q57.5 10, 60 10 T65 5, Q67.5 0, 70 0').close();
          // const _path = new Path('M0 100 Q5 20,10 20 T15 35,Q17.5 50,20 50 T25 25,Q27.5 0, 30 0 T35 0,Q37.5 0, 40 0 T45 15');
    return(
      <ScrollView style={{flex:1}}>
        <ZWTextInput />
        {/*绘制直线*/}
        <Surface width={300} height={2}>
            <Shape d={path} stroke="#000000" strokeWidth={1} />
        </Surface>
        {/*绘制虚线*/}
         <Surface width={300} height={2} style={{marginTop:10}}>
            <Shape d={path} stroke="#000000" strokeWidth={2} strokeDash={[10,50]} />
        </Surface>
        {/*绘制矩形*/}
         <Surface width={100} height={100} style={{margin:10}}>
            <Shape d={Path().moveTo(1,1).lineTo(1,99).lineTo(99,99).lineTo(99,1).close()} stroke="#000000" strokeWidth={2}/>
        </Surface>
        {/*绘制圆形*/}
         <Surface width={100} height={100} style={{margin:10,backgroundColor:'red'}}>
            <Shape d={Path().moveTo(50,1).arc(0,99,25).arc(0,-99,25).close()} stroke="#000000" strokeWidth={2}/>
        </Surface>
        {/*绘制字体
         <Surface width={100} height={100}>
           <Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC" path={path2} >Swipe</Text>
         </Surface>
         */}
         <Surface width={100} height={100}>
              <Group>
                  <Shape d={pathRect} stroke="#000000" fill="#000000" strokeWidth={1}/>
                  <Shape d={pathCircle} stroke="#FFFFFF" fill="#FFFFFF" strokeWidth={1}/>
                 {/*
                  <Text strokeWidth={1} strokeDash={[2,1,2,1]} stroke="#000" font="bold 30px Heiti SC" path={pathText} >Swipe</Text>
                 */}
              </Group>
          </Surface>
        <TouchableOpacity onPress={() => this.goToHeart()} style={{marginTop:20,padding:10,backgroundColor:'red'}}>
          <Text>心形动画效果</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goToCircle()} style={{marginTop:20,padding:10,backgroundColor:'red'}}>
          <Text>进度条</Text>
        </TouchableOpacity>

        <Surface width={200} height={200} style={{margin:20,backgroundColor:'green'}}>
          <Shape d={_path} stroke="#36ffff" strokeWidth={2} fill="rgba(54,255,255,0.2)"/>
        </Surface>

        <TouchableOpacity onPress={() => this.changeSpeed()} style={{marginTop:20,padding:10,backgroundColor:'red'}}>
          <Text>进度条</Text>
        </TouchableOpacity>
        <ScrollView showsHorizontalScrollIndicator={true}>
           <SpeedCanvas speed={this.state.speed} style={{backgroundColor:'green',width:1000,height:200}}/>
        </ScrollView>
      </ScrollView>
    );
  }
}
