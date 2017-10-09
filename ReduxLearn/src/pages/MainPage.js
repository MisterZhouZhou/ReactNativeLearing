import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {ShowMsg} from '../actions/Main'

 class MainPage extends Component {
  show(){
    this.props.dispatch(ShowMsg('11'));
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{'姓名:' + this.props.navigation.state.params.user.name + '\n年龄:' + this.props.navigation.state.params.user.age}</Text>
        <TouchableOpacity onPress={this.show.bind(this)}>
          <Text>{this.props.msg?this.props.msg:TouchableOpacity}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function select(store)
{
  return {
    status: store.main.status,
    msg: store.main.msg
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(select)(MainPage);
