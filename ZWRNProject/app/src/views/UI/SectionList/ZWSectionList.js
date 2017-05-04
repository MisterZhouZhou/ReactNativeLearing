import React ,{Component} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';

export default class ZWSectionList extends Component {

    _renderItem = (info) => {
        var txt = 'index:' + info.index + '     ' + info.item.title;
        var bgColor = info.index % 2 == 0 ? 'red' : 'blue';
        return (
         <Text
         style={{height:100,textAlignVertical:'center',backgroundColor:bgColor,color:'white',fontSize:15}}>{txt}</Text>
        );
    }

    _sectionComp = (info) => {
        var txt = 'key:' + info.section.key;
        return (
          <Text
            style={{height:50,textAlign:'center',textAlignVertical:'center',backgroundColor:'black',color:'white',fontSize:30}}>{txt}</Text>
        );
    }

    _extraUniqueKey(item ,index){
      return "index"+index+item;
    }

    render() {
        var sections = [];
        for (var i = 0; i < 10; i++) {
            var datas = [];
            for (var j = 0; j < 10; j++) {
                datas.push({title: 'title:' + j});
            }
            sections.push({key: i, data: datas});
        }
        return (
            <View style={{flex:1}}>
                <SectionList
                 renderSectionHeader={this._sectionComp}
                 renderItem={this._renderItem}
                 sections={sections}
                 keyExtractor = {this._extraUniqueKey}// 每个item的key
                />
            </View>
        );
    }
}
