import React ,{ Component } from 'react'
import {StyleSheet, View, Text,} from 'react-native'
import GlobalThe from './GlobalTHeme'


export default class GlobalThemeView extends Component{
  constructor(props){
    super(props);
    // GlobalThe.setTheme('default1');
    this.state = {
      globalstyels : GlobalThe.init(this).defaultTheme
    }
  }

  getCurrentTHeme(theme){
    this.setState({globalstyels:theme});
  }

  render(){
    let {globalstyels} = this.state;
    return(
       <View style={[{flex:1},globalstyels.container1]}>
         <Text style={globalstyels.titleText}>GlobalThemeView</Text>
         <Text style={globalstyels.content}>GlobalThemeView</Text>
       </View>
    );
  }
}
