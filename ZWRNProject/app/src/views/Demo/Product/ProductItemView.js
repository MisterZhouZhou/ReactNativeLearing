import React ,{ Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

export default class ProductItemView extends Component{
  render(){
    return(
       <View style={{backgroundColor:'#F8F8F8'}}>
           <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClick}>
             <View style={styles.container}>
                <View style={styles.left}>
                  <Image style={styles.icon} source={this.props.detail.icon} />
                </View>
                <View style={styles.center}>
                  <Text style={{fontSize:16,color:'#546979'}}>{this.props.detail.title}</Text>
                  <Text style={{fontSize:16,color:'#546979'}}>{this.props.detail.date}</Text>
                </View>
                <View style={styles.right}>
                  <Text style={{fontSize:17,color:'#B07267'}}>¥{this.props.detail.money}</Text>
                </View>
             </View>
           </TouchableOpacity>
           <View style={styles.close}>
            <TouchableOpacity activeOpacity={0.5} onPress={this.props.onDelete}>
              <Image style={{height:22,width:22,resizeMode: 'stretch',backgroundColor:'red'}}/>
            </TouchableOpacity>
           </View>
       </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    height:60,
    borderColor:'#E2E9EB',
    borderWidth:1,
    borderRadius:0.5,
    margin:10,
    backgroundColor:'#FFF',
    flexDirection:'row'
  },
  close:{
    width:22,
    height:22,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent',
    bottom:55,
    left:2,
    right:0,
    position: 'absolute',
  },
  left:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    width:40,
    height:40,
    borderRadius:20
  },
  center:{
    flex:3,
    justifyContent:'center',
  },
  right:{
    flex:1.5,
    justifyContent:'center',
    alignItems:'center'
  }
});
