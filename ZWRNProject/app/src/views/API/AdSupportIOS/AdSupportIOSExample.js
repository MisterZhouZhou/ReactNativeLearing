import React, {Component} from 'react';
import {View,Text,AdSupportIOS,StyleSheet} from 'react-native';

exports.framework = 'React';
exports.title = 'Advertising ID';
exports.description = 'Example of using the ad support API.';

exports.examples = [
  {
    title: 'Ad Support IOS',
    render() {
      return <AdSupportIOSExample />;
    },
  }
];


class AdSupportIOSExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      deviceID: 'No IDFA yet',
      hasAdvertiserTracking: 'unset',
    }
  }

  componentDidMount() {
    AdSupportIOS.getAdvertisingId(
      this._onDeviceIDSuccess,
      this._onDeviceIDFailure
    );

    AdSupportIOS.getAdvertisingTrackingEnabled(
      this._onHasTrackingSuccess,
      this._onHasTrackingFailure
    );
  }

  _onHasTrackingSuccess = (hasTracking) => {
    this.setState({
      'hasAdvertiserTracking': hasTracking,
    });
  };

  _onHasTrackingFailure = (e) => {
    this.setState({
      'hasAdvertiserTracking': 'Error!',
    });
  };

  _onDeviceIDSuccess = (deviceID) => {
    this.setState({
      'deviceID': deviceID,
    });
  };

  _onDeviceIDFailure = (e) => {
    this.setState({
      'deviceID': 'Error!',
    });
  };

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Advertising ID: </Text>
          {JSON.stringify(this.state.deviceID)}
        </Text>
        <Text>
          <Text style={styles.title}>Has Advertiser Tracking: </Text>
          {JSON.stringify(this.state.hasAdvertiserTracking)}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
