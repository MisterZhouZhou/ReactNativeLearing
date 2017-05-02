import React, {Component} from 'react';
import {Keyboard, TextInput} from 'react-native';

export default class ZWKeyboard extends Component {
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

  render() {
    return (
      <TextInput style={{backgroundColor:'white',borderWidth:1,borderColor:'red',height:40}}
        onSubmitEditing={alert('d')}
      />
    );
  }
}
