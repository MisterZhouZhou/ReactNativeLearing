/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SimpleExample from './SimpleExample';
import ScrollableTabsExample from './ScrollableTabsExample';
import OverlayExample from './OverlayExample';
import FacebookExample from './FacebookExample';
import DynamicExample from './DynamicExample';

export default class SwipComponent extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (<View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Simple')}
      >
        <Text>Simple example</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Scrollable')}
      >
        <Text>Scrollable tabs example</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Overlay')}
      >
        <Text>Overlay example</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Facebook')}
      >
        <Text>Facebook tabs example</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Dynamic')}
      >
        <Text>Dynamic tabs example</Text>
      </TouchableOpacity>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
});

const App = StackNavigator({
  Home: { screen: SwipComponent },
  Simple: { screen: SimpleExample },
  Scrollable: { screen: ScrollableTabsExample },
  Overlay: { screen: OverlayExample },
  Facebook: { screen: FacebookExample },
  Dynamic: { screen: DynamicExample },
});

AppRegistry.registerComponent('SwipComponent', () => App);




// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import ScrollableTabView from './ScrollalbeTabComponent';
// export default class SwipComponent extends Component {
//   render() {
//     return (
//       <ScrollableTabView style={{marginTop: 20}} onChangeTab={()=>{alert('d')}}>
//         <View style={{width: 200, height: 200}} tabLabel={'view1'}></View>
//         <View style={{width: 200, height: 200}} tabLabel={'view2'}></View>
//         <View style={{width: 200, height: 200}} tabLabel={'view3'}></View>
//       </ScrollableTabView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('SwipComponent', () => SwipComponent);






