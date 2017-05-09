import React ,{ Component } from 'react'
import {Text, View} from 'react-native'
export default class ZWMap extends Component{

  componentWillMount() {
     this.dataArray = ['data1','data2','data3','data4'];
  }

  render(){
      return (
        <View style={{flex: 1, }}>
          {
            this.dataArray.map((name,idex) =>{
              return(
                <Text key={idex}>{name}===>{idex}</Text>
              );
            })
          }
        </View>
      );
  }
}
