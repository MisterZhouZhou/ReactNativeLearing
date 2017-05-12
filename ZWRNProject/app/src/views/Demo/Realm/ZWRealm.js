import React ,{ Component } from 'react'
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'

import ZWModelManager from './ZWModelManager'

export default class ZWRealm extends Component{
  constructor(props){
    super(props);
     this.realm = new ZWModelManager();
     this.state = {
        dataSource:[]
     }
  }
  insert(){
    // 向表中插入数据
    this.realm.saveItems('User',[{
      name:'zw1',
      age:35,
    },{
      name:'zw2',
      age:35,
    }]);
  }

  searchData(){
    let users =  this.realm.getItems('User');
    this.setState({dataSource:users});
  }

  delete(){
    this.realm.delete('User','age == 35');
  }



  render(){

    let eleArray = [];
    eleArray = this.state.dataSource.map((item,idx)=>{
      let ele = (
        <View key={'idx_'+idx}>
         <Text style={{fontSize:20,backgroundColor:'red'}}>
           Name of Users in Realm: {item.name}
         </Text>
         <Text style={{fontSize:20,backgroundColor:'red'}}>
           Age of Users in Realm: {item.age}
         </Text>
        </View>
      )
      return ele;
    });
    return(
       <View style={{flex: 1,}}>
         <View style={{flexDirection:'row'}}>
           <TouchableOpacity style={styles.button} onPress={()=>this.insert()}>
             <Text>插入数据</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={()=>this.searchData()}>
             <Text>查询数据</Text>
           </TouchableOpacity >
           <TouchableOpacity style={styles.button} onPress={()=>this.delete()}>
             <Text>删除数据</Text>
           </TouchableOpacity>
         </View>
         <Text style={{fontSize:20,backgroundColor:'red'}}>
         Count of Users in Realm: {this.state.dataSource.length}
         </Text>
         {eleArray}
     </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {flex:1,backgroundColor:'white',margin:10,height:30,alignItems:'center',justifyContent:'center'}
});
