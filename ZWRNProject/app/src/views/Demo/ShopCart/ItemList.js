import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    const { cartData } = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        {
          cartData.map((data, index) => {
            return <Item key={data.id} index={index} data={data} cartData={cartData} />
          })
        }
      </ScrollView>
    );
  }
}
