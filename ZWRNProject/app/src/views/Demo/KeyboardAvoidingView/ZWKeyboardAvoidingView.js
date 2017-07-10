import React ,{Component} from 'react';
import {KeyboardAvoidingView,ScrollView,View,Text,TextInput,Dimensions,StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class ZWKeyboardAvodingView extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior='position' >
        <ScrollView style={styles.outerContainer}>
          <View style={styles.container}>
            <View style={{height:height-30,backgroundColor:'red',justifyContent:'center',alignItems:'center',}}>
              <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Top Area</Text>
            </View>
              <TextInput
                placeholder="KeyboardAvoidingView不建议使用"
                style={styles.textInput} />
              {/*
              <View style={{height:200,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}>
              <Text style={{fontSize:28,color:'#998462',textAlign:'center',}}>Bottom Area</Text>
            </View>
            */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    height:height-64,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
  },
});
