import React, {Component} from 'react';
import {UIManager, LayoutAnimation,TouchableHighlight,StyleSheet, Platform, View, Text} from 'react-native';


class CustomButton extends Component{
  render(){
    return(
      <TouchableHighlight
       style={styles.button}
       underlayColor="#a5a5a5"
       onPress={this.props.onPress}>
       <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

// 自定义动画
var CustomLayoutAnimation = {
  duration: 800, // duration 动画持续时间，单位是毫秒
  create: {      // 配置创建新视图时的动画。(参阅 Anim 类型)
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {      // 配置被更新的视图的动画。(参阅 Anim 类型)
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

export default class ZWLayoutAnimation extends Component{
  constructor(props){
    super(props);
    this.state={
      views:[],
      num:0,
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    // 淡入淡出效果
    LayoutAnimation.easeInEaseOut();
    //或者可以使用如下的自定义的动画效果
    //LayoutAnimation.configureNext(CustomLayoutAnimation);

    /* Types:
        1、easeInEaseOut
        2、spring
        3、linear
    */

    /*
    static create(duration: number, type, creationProp) 用来创建configureNext所需的config参数的辅助函数。
    animationConfig = LayoutAnimation.create(
      e.duration/5*3,
      LayoutAnimation.Types[e.easing],
      LayoutAnimation.Properties.opacity,
    );
    */
  }

  _onPressAddView() {
     this.setState({num:parseInt(this.state.num)+1});
   }

  _onPressRemoveView() {
    this.setState({num:Number.parseInt(this.state.num)-1});
  }

  _renderAddedView(i) {
   return (
    <View key={i} style={styles.view}>
       <Text style={{color:'#fff'}}>{i}</Text>
     </View>
  );
  }

  render(){
    this.state.views.length=0;
    for(var i=0;i<this.state.num;i++){
      this.state.views.push(this._renderAddedView(i));
    }
    return(
      <View style={{marginTop:20,margin:10}}>
        <Text style={styles.welcome}>
            LayoutAnimation实例演示
        </Text>
        <CustomButton text="添加View"  onPress={this._onPressAddView.bind(this)}/>
        <CustomButton text="删除View"  onPress={this._onPressRemoveView.bind(this)}/>
        <View style={styles.viewContainer}>
          {this.state.views}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
