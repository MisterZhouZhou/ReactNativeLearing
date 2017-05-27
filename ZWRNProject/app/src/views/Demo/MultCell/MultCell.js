import React, {Component} from 'react';
import {View, Text, ScrollView,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class MultCell extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedIndex:0
    }
  }
  render(){
    return(
        <ScrollView style={{flex:1}}>
        {this.renderRow()}
        </ScrollView>
    );
  }

  onItemClick(idex){
    this.setState({selectedIndex:idex});
  }

  renderRow(){
    var array = [1,2,3,4,5,6,7,8,9];
    var item = array.map((value,idx)=>{
      let bgColor ;
      if(this.state.selectedIndex == idx){
         bgColor = 'green';
      }else{
         bgColor ='red'
      }
      let index = idx;
      return(
         <TouchableOpacity key={'row_'+idx} onPress={()=>this.onItemClick(index)}>
           <View style={[styles.item,{backgroundColor:bgColor}]}>
             <Text>{value}</Text>
           </View>
         </TouchableOpacity>
      );
    });
    return (<View style={{width:width,flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start'}}>
      {item}
      </View>);
  }
}


const styles = StyleSheet.create({
  item:{width:width/4,height:width/4,borderRadius:width/8,flexDirection:'row',justifyContent:'center',alignItems:'center'}
});
