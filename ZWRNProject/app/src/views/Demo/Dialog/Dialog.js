import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Dimensions, Animated, TouchableOpacity, Modal} from 'react-native'

import TimerMixin from 'react-timer-mixin';

const {width, height} = Dimensions.get('window');
const navigatorH = 64; // navigator height
const [aWidth, aHeight] = [270, 128];
const [left, top] = [0, 0];
const [middleLeft, middleTop] = [(width - aWidth) / 2, (height - aHeight) / 2 - navigatorH];

export default class Dialog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bgOpacity: new Animated.Value(0),
      contentOpacity: new Animated.Value(0),
      visible: false,
      title:''
    };
  }

  show(title) {
    this.setState({visible: true,title:title});
    Animated.timing(this.state.bgOpacity, {toValue: 0.5, duration: 250}).start();
    Animated.timing(this.state.contentOpacity, {toValue: 1, duration: 250}).start();
  }


  hide() {
    Animated.timing(this.state.bgOpacity, {toValue: 0, duration: 250}).start();
    Animated.timing(this.state.contentOpacity, {toValue: 0, duration: 250}).start();
    this.state.bgOpacity.addListener(e => {
      if (e.value == 0) {
        this.setState({visible: false});
        this.state.bgOpacity.removeAllListeners();
      }
    });
  }

  callBack(){
    this.hide();
    setTimeout(() => {
        this.props.onSurePress();
      },
      300);
  }

  render(){
    return (
      <Modal transparent={true} animationType='none' visible={this.state.visible}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.hide()}>
          <Animated.View style={{width: width, height: height, opacity: this.state.bgOpacity, position: 'absolute', top: 0, left: 0, backgroundColor: '#000'}}></Animated.View>
        </TouchableOpacity>
        <Animated.View style={{position: 'absolute', top: middleTop, left: middleLeft,opacity: this.state.contentOpacity}}>
          <View style={styles.innerContainer}>
             <View style={styles.tipTitleView}>
               <Text style={styles.tipTitleText}>{this.state.title}</Text>
             </View>
             <View style={styles.btnView}>
              <TouchableOpacity onPress={this.callBack.bind(this)} style={styles.okBtnView}>
                <Text>确定</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.hide()} style={styles.cancelBtnView}>
                  <Text>取消</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: { borderRadius: 10, alignItems: 'center',backgroundColor:'white', paddingTop: 10, paddingBottom:5},
  btnView:{flexDirection:'row',width: aWidth-20 ,height: 44,},
  okBtnView:{width:(aWidth-20)/2,height: 44,alignItems: 'center',justifyContent: 'center',borderRightWidth:1/2,borderColor:'#f0f0f0',},
  cancelBtnView:{width:(aWidth-20)/2, height: 44,alignItems: 'center',justifyContent: 'center',},
  tipTitleView: {width:aWidth,flexDirection:'row',alignItems:'center',justifyContent:'center', borderBottomWidth:1/2,borderColor:'#f0f0f0',paddingLeft: 10, paddingRight: 10,},
  tipTitleText:{color:"#333333",fontSize:16, marginTop:20, marginBottom:19,textAlignVertical:'center',textAlign:'center',}
});



