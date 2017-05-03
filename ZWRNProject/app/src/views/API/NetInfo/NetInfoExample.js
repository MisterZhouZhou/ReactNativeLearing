import React, {Component} from 'react';
import {NetInfo, View, Text,TouchableWithoutFeedback} from 'react-native';


const ConnectionInfoSubscription = React.createClass({
  getInitialState() {
    return {
      connectionInfoHistory: [],
    };
  },
  componentDidMount: function() {
    NetInfo.addEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  },
  componentWillUnmount: function() {
    NetInfo.removeEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  },
  _handleConnectionInfoChange: function(connectionInfo) {
    const connectionInfoHistory = this.state.connectionInfoHistory.slice();
    connectionInfoHistory.push(connectionInfo);
    this.setState({
      connectionInfoHistory,
    });
  },
  render() {
    return (
        <View>
          <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
        </View>
    );
  }
});

const ConnectionInfoCurrent = React.createClass({
  getInitialState() {
    return {
      connectionInfo: null,
    };
  },
  componentDidMount: function() {
    NetInfo.addEventListener(
        'change',
        this._handleConnectionInfoChange
    );
    NetInfo.fetch().done(
        (connectionInfo) => { this.setState({connectionInfo}); }
    );
  },
  componentWillUnmount: function() {
    NetInfo.removeEventListener(
        'change',
        this._handleConnectionInfoChange
    );
  },
  _handleConnectionInfoChange: function(connectionInfo) {
    this.setState({
      connectionInfo,
    });
  },
  render() {
    return (
        <View>
          <Text>{this.state.connectionInfo}</Text>
        </View>
    );
  }
});

const IsConnected = React.createClass({
  getInitialState() {
    return {
      isConnected: null,
    };
  },
  componentDidMount: function() {
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  },
  componentWillUnmount: function() {
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  },
  _handleConnectivityChange: function(isConnected) {
    this.setState({
      isConnected,
    });
  },
  render() {
    return (
        <View>
          <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
        </View>
    );
  }
});

const IsConnectionExpensive = React.createClass({
  getInitialState() {
    return {
      isConnectionExpensive: (null : ?boolean),
    };
  },
  _checkIfExpensive() {
    NetInfo.isConnectionExpensive().then(
        isConnectionExpensive => { this.setState({isConnectionExpensive}); }
    );
  },
  render() {
    return (
        <View>
          <TouchableWithoutFeedback onPress={this._checkIfExpensive}>
            <View>
              <Text>Click to see if connection is expensive:
                {this.state.isConnectionExpensive === true ? 'Expensive' :
                this.state.isConnectionExpensive === false ? 'Not expensive'
                : 'Unknown'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
});

exports.title = 'NetInfo';
exports.description = 'Monitor network status';
exports.examples = [
  {
    title: 'NetInfo.updateHistory',
    description: 'Observed updates to connectionInfo',
    render() { return <ConnectionInfoSubscription />; }
  },
  {
    title: 'NetInfo.update',
    description: 'Asynchronously load and observe connectionInfo',
    render() { return <ConnectionInfoCurrent />; }
  },
  {
    title: 'NetInfo.isConnected',
    description: 'Asynchronously load and observe connectivity',
    render() { return <IsConnected />; }
  },
  {
    platform: 'android',
    title: 'NetInfo.isConnectionExpensive (Android)',
    description: 'Asynchronously check isConnectionExpensive',
    render() { return <IsConnectionExpensive />; }
  },
];
