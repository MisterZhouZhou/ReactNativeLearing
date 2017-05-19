import React, { Component } from 'react';
import {TouchableHighlight,Text, StyleSheet} from 'react-native';

export default class InputButton extends Component {
    render() {
      return (
        <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                            underlayColor="#193441"
                            onPress={this.props.onPress}>
            <Text style={Style.inputButtonText}>{this.props.value}</Text>
        </TouchableHighlight>
      );
    }
}


var Style = StyleSheet.create({
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D'
  },
  inputButtonHighlighted: {
      backgroundColor: '#193441'
  },
  inputButtonText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white'
  },
});
