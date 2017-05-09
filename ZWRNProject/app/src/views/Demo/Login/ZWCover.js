import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Dimensions, Modal, TouchableOpacity} from 'react-native'
let totalWidth = Dimensions.get('window').width;

export default class ZWLogin extends Component{
  constructor(props) {
    super(props);
    this.state={
     modalVisible:this.props.show
    };
  }

  render(){
      return (
        <View style = {styles.container} >
          <Modal
           animationType={'none'}
           transparent={true}
           visible={this.props.show}
           onRequestClose={() => this._setModalVisible(false)}
           >
           <View style={styles.modalContainer}>
             <View style={styles.innerContainer}>
               <Text>使用该账号登录吗？</Text>
               <View style={{flexDirection:'row',justifyContent:'space-around',width: totalWidth - 160}}>
                 <TouchableOpacity
                 onPress={this.props.onSurePress}
                 style={{marginTop: 30}}>
                 <Text style={{padding:10}}>确定</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                   onPress={this.props.onCanclePress}
                   style={{marginTop: 30}}>
                   <Text style={{padding:10}}>取消</Text>
                 </TouchableOpacity>
               </View>
             </View>
             </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {flex: 1, justifyContent: 'center', padding: 20,backgroundColor:'rgba(0, 0, 0, 0.5)'},
  innerContainer: { borderRadius: 10, alignItems: 'center',backgroundColor:'white', paddingTop: 30, paddingBottom:20},
});
