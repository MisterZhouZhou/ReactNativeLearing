import React, {Component} from 'react';
import {Text, View, AppState} from 'react-native'

var AppStateSubscription = React.createClass({
  getInitialState() {
    return {
      appState: AppState.currentState,
      previousAppStates: [],
      memoryWarnings: 0,
    };
  },
  componentDidMount: function() {
    AppState.addEventListener('change', this._handleAppStateChange);
    AppState.addEventListener('memoryWarning', this._handleMemoryWarning);
  },
  componentWillUnmount: function() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    AppState.removeEventListener('memoryWarning', this._handleMemoryWarning);
  },
  _handleMemoryWarning: function() {
    this.setState({memoryWarnings: this.state.memoryWarnings + 1});
  },
  _handleAppStateChange: function(appState) {
    var previousAppStates = this.state.previousAppStates.slice();
    previousAppStates.push(this.state.appState);
    this.setState({
      appState,
      previousAppStates,
    });
  },
  render() {
    if (this.props.showMemoryWarnings) {
      return (
        <View>
          <Text>{this.state.memoryWarnings}</Text>
        </View>
      );
    }
    if (this.props.showCurrentOnly) {
      return (
        <View>
          <Text>{this.state.appState}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    );
  }
});

export default class ZWAppState extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentAppState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({appState: nextAppState});
  }

  render() {
    return (
      <View>
        <Text>Current state is: {this.state.currentAppState}</Text>
        <AppStateSubscription />
      </View>
    );
  }
}




