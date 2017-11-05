import React ,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import cartData from './cartData'
import ItemList from './ItemList'
import Footer from './Footer'

export default class ZWShopCart extends Component {
  render(){
    return(
       <View style={{flex: 1}}>
        <ItemList cartData={cartData} />
        <Footer cartData={cartData} />
      </View>
    );
  }
}
