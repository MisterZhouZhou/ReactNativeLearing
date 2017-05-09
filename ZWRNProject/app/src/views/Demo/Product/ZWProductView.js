import React ,{ Component } from 'react'
import {StyleSheet, View, Text, ScrollView, Dimensions, Modal, TouchableOpacity} from 'react-native'

import ItemView from './ProductItemView'

var details = [
  {title:'长途',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.02.22',money:'332'},
  {title:'交通',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.02.23',money:'65'},
  {title:'住宿',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.02.24',money:'25'},
  {title:'餐饮',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.02.25',money:'125'},
  {title:'补助',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.02.26',money:'63'},
  {title:'办公',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.03.11',money:'476'},
  {title:'福利',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.03.12',money:'55'},
  {title:'市场',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.03.13',money:'84'},
  {title:'研发',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.03.14',money:'198'},
  {title:'广告',icon:{uri:'http://avatar.csdn.net/5/F/0/1_zww1984774346.jpg'},date:'2016.03.15',money:'24'},
];

export default class ZWProductView extends Component{

   //修改消费明细
  onClick(i){
    alert("onClick : "+i);
    // this.toastMessage("onClick : "+i);
  }

  //删除单条消费记录
  onDelete(i) {
    alert("onDelete : "+i);
    // this.toastMessage("onDelete : "+i);
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView keyboardDismissMode={'on-drag'}>
          {
            details.map((item,i)=>this.renderExpenseItem(item,i))
          }
        </ScrollView>
      </View>
    );
  }

  renderExpenseItem(item , i) {
    return <ItemView key={i} detail={item} onClick={()=>this.onClick(i)} onDelete={()=>this.onDelete(i)}/>;
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8F8F8',
    flexDirection: 'column',
  }
});
