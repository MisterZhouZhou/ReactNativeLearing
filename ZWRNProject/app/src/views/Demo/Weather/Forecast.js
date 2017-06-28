import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Forecast extends Component {
  render(){
    return(
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions:{this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  bigText: {flex: 2, fontSize: 20, textAlign: 'center', margin: 10, color: '#FFFFFF'},
  mainText: {flex: 1, fontSize: 16, textAlign: 'center', color: '#FFFFFF'}
});
