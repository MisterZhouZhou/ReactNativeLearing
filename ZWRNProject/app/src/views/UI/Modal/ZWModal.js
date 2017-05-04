import React ,{Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView} from 'react-native';

import ModelExamples from './ModelExample'

export default class ZWModal extends Component{
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    }
  }

  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  render(){
    var eleArray = [];
    for(var i = 0; i < ModelExamples.examples.length; i++){
      var ele=(
        <View style={styles.contenter}
        key={i}>
            <Text style={styles.title}>{ModelExamples.examples[i].title}</Text>
            <Text>{ModelExamples.examples[i].description}</Text>
            <View style={styles.buttonContenter}>{ModelExamples.examples[i].render()}</View>
          </View>
      )
      eleArray.push(ele);
    }
    return(
      <ScrollView>
      <View style={{marginTop:22,backgroundColor:'red'}}>
        <Modal
          animationType={'slide'} //slide fade none
          transparent={false} // 是否填充整个视图
          visible={this.state.modalVisible}
          onRequestClose={() => alert('Modal has been closed.')}
        >
          <View style={{flex:1, marginTop: 22,backgroundColor:'green'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight style={{backgroundColor:'yellow',padding:10}} onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

         <TouchableHighlight style={{padding:10}} onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
      {eleArray}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contenter: {marginBottom: 10, padding: 10, backgroundColor: 'lightgray'},
  title: {fontSize: 16, fontWeight: '500'},
  buttonContenter: {backgroundColor: 'white', marginTop: 10}
});
