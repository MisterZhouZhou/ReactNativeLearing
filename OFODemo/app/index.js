
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import DrawerScreen from './screens/drawer/DrawerScreen';
import NotificationScreen from './screens/notification/NotificationScreen';
import QRScannerScreen from "./screens/scanner/QRScannerScreen";

const App = StackNavigator({
   Main: {screen: HomeScreen},
   Drawer: {screen: DrawerScreen},
   Notification: {screen: NotificationScreen},
   Scanner: {screen: QRScannerScreen},
},{
  headerMode: 'none',
});

AppRegistry.registerComponent('OFODemo', () => App);
