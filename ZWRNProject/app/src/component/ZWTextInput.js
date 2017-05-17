import React, { Component } from 'react';
import {Text, View, TextInput, PropTypes, StyleSheet} from 'react-native';

export default class ZWTextInput extends Component{
  static propTypes = {
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    ispassword: React.PropTypes.bool
  }
  static defaultProps={
    name:'名称',
    placeholder: '内容',
    ispassword: false,
  }
  constructor(props){
    super(props);
    this.state={
      txtValue: "",
    }
  }

  render(){
    var { style, name, placeholder, ispassword } = this.props
    return(
        <View style={styles.txtBorder}>
          <Text style={styles.txtName}>{name}</Text>
           <TextInput
               underlineColorAndroid = {'transparent'}
               style={styles.textInput}
               multiline={false}
               placeholder={placeholder}
               password={ispassword}
               onChangeText={(text) => {
                   this.setState({
                       txtValue: text
                   })
               }}
               value={this.state.txtValue}
           />
         </View>
    );
  }
}

const styles = StyleSheet.create({
  txtBorder: {
    borderWidth: 1,
    borderColor: '#51A7F9',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
      marginLeft: 20,
      fontSize: 15,
      color: '#51A7F9',
      marginRight: 10,
      fontSize: 14
  },
  textInput: {
      height: 40,
      width: 200
  }
});
