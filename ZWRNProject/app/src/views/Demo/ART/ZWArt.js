import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ART, ScrollView, Dimensions, Animated} from 'react-native'
var {Surface, Group, Shape, Path} = ART;
export default class ZWArt extends Component{

  goToHeart(){
    this.props.navigation.navigate('Heart');
  }

  goToCircle(){
    this.props.navigation.navigate('CircleProcess');
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

    return(
      <ScrollView style={{flex:1}}>
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
      </ScrollView>
    );
  }
}
