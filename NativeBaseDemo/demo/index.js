import {StackNavigator} from 'react-navigation';

import HomeView from './HomeScreen';
import DrawerView from './Drawer/ZWDrawView';

const App = StackNavigator({
   Main:  {screen: HomeView},
   Drawer:{screen: DrawerView},
},{
    headerMode: 'screen',
});

export default App;
