import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeView from './app/views/Home'
import CategoryListView from './app/views/CategoryList'
import ListGridView from './app/views/ListGrid' ;
import SearchView from './app/views/Search';
import SettingsView from './app/views/Settings';

const TabHomeNavigator = TabNavigator({
  Home: {screen: HomeView},
  CategoryList: {screen: CategoryListView},
  ListGrid: {screen: ListGridView},
  Search: {screen: SearchView},
  Settings: {screen: SettingsView},
},{
  tabBarOptions: {
    inactiveTintColor: '#888',
    activeTintColor: '#23aeeb',
    style: {backgroundColor: '#fff'},
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 12},
    tabStyle: {paddingBottom: 5, borderTopWidth: 0, borderTopColor: '#efefef', height: 49},
    showIcon: true
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true
})

export const RootNavigator = StackNavigator({
  HomeTab: {screen: TabHomeNavigator},
},{
  headerMode: 'screen'
});
