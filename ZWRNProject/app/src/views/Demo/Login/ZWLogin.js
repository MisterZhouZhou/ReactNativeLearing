import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TextInput, Dimensions, Modal, TouchableOpacity} from 'react-native'

import Cover from './ZWCover'

let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;

export default class ZWLogin extends Component{
  constructor(props) {
    super(props);
    this.state={
     inputedNum:"",
     inputedPW:"",
     modalVisible:false
    };
  }

  userPressConfirm(){
    if(this.state.inputedNum == '123' && this.state.inputedPW == '123'){
      this.setState({modalVisible: true});
    }
  }

  /*遮罩层取消*/
  cancleClick() {
    this.setState({modalVisible: false});
  }
  /*遮罩层确认*/
  suerClick(){
    this.setState({modalVisible: false});
    console.warn('success');
  }

  render(){
      return (
        <View style = {styles.container} >
          {/*遮罩层*/}
          <Cover show={this.state.modalVisible} onSurePress={this.suerClick.bind(this)} onCanclePress={this.cancleClick.bind(this)}/>
          <View style = {styles.container} >
            <TextInput style = {[styles.numberInputStyle,styles.leftWidth,styles.inputHeight]}
            placeholder = {'请输入手机号:'}
            onChangeText={(inputedNum)=>this.setState({inputedNum})}
            />
            <Text style = {[styles.textPromptStyle,styles.leftWidth]} >
            您输入的手机号：{this.state.inputedNum}
            </Text >
            <TextInput style = {[styles.passwordInputStyle,styles.leftWidth,styles.inputHeight]}
            placeholder = { '请输入密码' }
            onChangeText={(inputedPW)=>this.setState({inputedPW})}
            password = 'true'
            />
            <Text style = {[styles.bigTextPrompt,styles.leftWidth]}
              onPress = {this.userPressConfirm.bind(this)}
            >
            确定
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {flex: 1, justifyContent: 'center', padding: 20,backgroundColor:'rgba(0, 0, 0, 0.5)'},
  innerContainer: { borderRadius: 10, alignItems: 'center',backgroundColor:'white', paddingTop: 30, paddingBottom:20},
  container: {flex: 1,  backgroundColor: 'white' },
  leftWidth: {left: leftStartPoint,width: componentWidth},
  inputHeight: {height: 40, padding: 10},
  numberInputStyle: {top: 20, fontSize: 16, borderWidth: 1,borderColor: 'gray'},
  textPromptStyle: {top: 30, fontSize: 16,},
  passwordInputStyle: {top: 50, borderWidth: 1, borderColor: 'gray', fontSize: 16},
  bigTextPrompt: {top: 70, backgroundColor: 'gray', color: 'white', textAlign: 'center', fontSize: 20, paddingTop: 10, paddingBottom: 10,}
});
