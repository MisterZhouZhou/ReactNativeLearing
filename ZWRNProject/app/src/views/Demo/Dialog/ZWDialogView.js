import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Dimensions, Modal, TouchableOpacity} from 'react-native'

import ZWDialog from './ZWDialog'
import Dialog from './Dialog'

export default class ZWDialogView extends Component{
  callback(){
    alert('回调');
  }
  action(){
    this.refs.dialog.show("确定要取消订单吗");
  }

  action2(){
    this.dialog.show('使用该账号登录吗?使用该账号登录吗?使用该账号登录吗?使用该账号登录吗?');
  }

  render(){
    return(
        <View>
          <TouchableOpacity onPress={this.action.bind(this)}>
            <Text>TouchableOpacity</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.action2.bind(this)}>
            <Text>Dialog</Text>
          </TouchableOpacity>
          <Dialog ref={(e)=>this.dialog=e} onSurePress={()=>alert('onSurePress')}/>
          <ZWDialog ref="dialog" callback={this.callback.bind(this)}/>
        </View>
    );
  }
}
