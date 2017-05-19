import React ,{ Component } from 'react';
import {StyleSheet, View, Text, ListView, TouchableOpacity} from 'react-native';
import InputButton from './InputButton'

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];

export default class ZWCalculator extends Component{

  constructor(props) {
      super(props);
      this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        };

      this.state = this.initialState;
  }

  _renderInputButtons() {
    let views = inputButtons.map((row,idx)=>{
        let inputRow = row.map((buttonVal, columnIdx) => {
           return <InputButton  key={'col-'+columnIdx} value={buttonVal}  highlight={this.state.selectedSymbol === buttonVal}
                  onPress={this._onInputButtonPressed.bind(this, buttonVal)}/>
        });
        return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
    });
    return views;
  }

  _onInputButtonPressed(input){
    switch (typeof input) {
        case 'number':
            return this._handleNumberInput(input);
        default:
            return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
      let inputValue = (this.state.inputValue * 10) + num;
      this.setState({
          inputValue: inputValue
      });
  }

  _handleStringInput(str){
     switch(str){
        case '/':
        case '*':
        case '+':
        case '-':
          this.setState({
              selectedSymbol: str,
              previousInputValue: this.state.inputValue,
              inputValue: 0
          });
          break;
        case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;

            case 'ce':
                this.setState(this.initialState);
                    break;

            case 'c':
                this.setState({inputValue: 0});
                break;
      }
  }

  render(){
    return(
       <View style={Style.rootContainer}>
         <View style={Style.displayContainer}>
              <Text style={Style.displayText}>{this.state.inputValue}</Text>
          </View>
          <View style={Style.inputContainer}>
              {this._renderInputButtons()}
          </View>
       </View>
    );
  }
}

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});
