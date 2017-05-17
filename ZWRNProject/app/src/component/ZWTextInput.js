import React, { Component } from 'react';
import {Text, TextInput, PropTypes, StyleSheet}
export default class ZWTextInput extends Component {
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
      <View style={styles.container,style}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  txtBorder: {
    height: 50,
    flex: 1,
    borderWidth: 1,
    borderColor: '#51A7F9',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25,
    flexDirection: 'row'
  },
  txtName: {
      height: 20,
      width: 40,
      marginLeft: 20,
      fontSize: 15,
      marginTop: 15,
      color: '#51A7F9',
      marginRight: 10,
      fontSize: 14
  },
  textInput: {
      height: 50,
      width: 200
  }
});
