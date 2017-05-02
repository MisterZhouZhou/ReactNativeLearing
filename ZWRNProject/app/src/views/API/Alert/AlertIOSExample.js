import React, {Component} from 'react';
import {AlertIOS, View, Text, StyleSheet, TouchableHighlight} from 'react-native';

var { SimpleAlertExampleBlock } = require('./AlertExample');

var AlertIOSNormal = React.createClass({
    tapFunction(){
      AlertIOS.alert(
              'Foo Title',
              'My Alert Msg',
              [
                {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
              ]
      )
  },
  render() {
      return(
        <Text onPress={this.tapFunction} style={{backgroundColor:'white',margin:10}}>
          Click to show the AlertIOS
        </Text>

      );
    },

});



class PromptOptions extends React.Component {
  state: any;
  customButtons: Array<Object>;

  constructor(props) {
    super(props);

    // $FlowFixMe this seems to be a Flow bug, `saveResponse` is defined below
    this.saveResponse = this.saveResponse.bind(this);

    this.customButtons = [{
      text: 'Custom OK',
      onPress: this.saveResponse
    }, {
      text: 'Custom Cancel',
      style: 'cancel',
    }];

    this.state = {
      promptValue: undefined,
    };
  }

  render() {
    return (
      <View>
        <Text style={{marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>Prompt value:</Text> {this.state.promptValue}
        </Text>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => AlertIOS.prompt('Type a value', null, this.saveResponse)}>

          <View style={styles.button}>
            <Text>
              prompt with title & callback
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => AlertIOS.prompt('Type a value', null, this.customButtons)}>

          <View style={styles.button}>
            <Text>
              prompt with title & custom buttons
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => AlertIOS.prompt('Type a value', null, this.saveResponse, undefined, 'Default value')}>

          <View style={styles.button}>
            <Text>
              prompt with title, callback & default value
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => AlertIOS.prompt('Type a value', null, this.customButtons, 'login-password', 'admin@site.com')}>

          <View style={styles.button}>
            <Text>
              prompt with title, custom buttons, login/password & default value
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  saveResponse(promptValue) {
    this.setState({ promptValue: JSON.stringify(promptValue) });
  }
}



var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

exports.framework = 'React';
exports.title = 'AlertIOS Example';
exports.description = 'Example of using the AlertIOS support API.';
exports.examples = [
  {
    title: 'Alert example',
    render() {
      return(
        <SimpleAlertExampleBlock/>
      );
    },
  },
  {
    title: 'AlertIOS normal example',
    render() {
      return(
        <AlertIOSNormal/>
      );
    },
  },
  {
    title: 'Prompt Options',
    render(){
      return <PromptOptions />;
  }
},
]

