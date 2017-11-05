/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// var OpenUDIDIOS = require('react-native').NativeModules.OpenUDID;
var OpenUDIDIOS = require('NativeModules').OpenUDID;
exports.framework = 'React';
exports.title = 'OpenUDID';
exports.description = 'Example of using the OpenUDID API.';

exports.examples = [
  {
    title: 'OpenUDID IOS',
    render: function(): ReactElement {
      return <OpenUDIDIOSExample />;
    },
  }
];

var OpenUDIDIOSExample = React.createClass({
  getInitialState: function() {
    return {
      openUDID: 'No OpenUDID yet',
    };
  },

  componentDidMount() {
    OpenUDIDIOS.getOpenUDID(
      this._onOpenUDIDSuccess,
      this._onOpenUDIDFailure
    );
  },

  _onOpenUDIDSuccess(openUDID) {
    this.setState({
      'openUDID': openUDID,
    });
  },

  _onOpenUDIDFailure(e) {
    this.setState({
      'openUDID': 'Error!',
    });
  },

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>OpenUDID: </Text>
          {JSON.stringify(this.state.openUDID)}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
