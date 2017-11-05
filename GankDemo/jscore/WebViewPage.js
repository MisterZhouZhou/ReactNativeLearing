import React, { Component } from 'react'
import { View, WebView, Text, TouchableOpacity} from 'react-native'
let self;
export default class WebViewPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerLeft:(<TouchableOpacity onPress={()=>navigation.goBack()}><Text>back</Text></TouchableOpacity>)
  });

  constructor (props) {
    super(props);
    self = this;
  }

  render () {
    let {url}  = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: url}}/>
      </View>
      )
  }
}

