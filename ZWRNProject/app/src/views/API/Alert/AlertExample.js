import React, {Component} from 'react';
import {Alert, View,Text,AdSupportIOS,StyleSheet,TouchableHighlight} from 'react-native';

// var UIExplorerBlock = require('./UIExplorerBlock');

exports.framework = 'React';
exports.title = 'Alert Example';
exports.description = 'Example of using the Alert support API.';


var AlertNormal = React.createClass({
   tapFunction(){
    Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
    )
  },

  render() {
      // iOS和Android上都可用
      return(
        <Text onPress={this.tapFunction} style={{backgroundColor:'white',margin:10}}>
          Click to show the Alert
        </Text>

      );
    },

});


// corporate ipsum > lorem ipsum
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

/**
 * Simple alert examples.
 */
var SimpleAlertExampleBlock = React.createClass({

  render: function() {
    return (
      <View>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
          )}>
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with one button</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with two buttons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            null,
            [
              {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
              {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
            ]
          )}>
          <View style={styles.button}>
            <Text>Alert with three buttons</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Foo Title',
            alertMessage,
            '..............'.split('').map((dot, index) => ({
              text: 'Button ' + index,
              onPress: () => console.log('Pressed ' + index)
            }))
          )}>
          <View style={styles.button}>
            <Text>Alert with too many buttons</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  },
});


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


exports.examples = [
  {
    title: 'Alert normal example',
    render() {
      // iOS和Android上都可用
      return(
        <AlertNormal/>
      );
    },
  },
  {
    title: 'Alert SimpleAlertExampleBlock',
    render() {
      return(
        <SimpleAlertExampleBlock/>
      );
    },
  }
]

module.exports = {
  AlertNormal,
  SimpleAlertExampleBlock,
};
// var AlertExample = React.createClass({
//    statics: {
//     title: 'Alert',
//     description: 'Alerts display a concise and informative message ' +
//     'and prompt the user to make a decision.',
//   },

// })
