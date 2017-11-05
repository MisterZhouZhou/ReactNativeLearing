import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeView from '../pages/home/homeContainer';
import MainView from '../pages/main/mainContainer';
import MiddleView from '../pages/middle/middleContainer';
import PictureDetail from '../pages/home/detail/pictureDetail';
import VideoDetail from '../pages/home/detail/videoDetail';

// 标签导航
const TabHomeNavigator = TabNavigator({
  HomePage: {screen: HomeView},
  MiddlePage: {screen: MiddleView},
  MainPage: {screen: MainView},
}, {
  tabBarOptions: {
    inactiveTintColor: '#888',
    activeTintColor: 'rgb(251,33,33)',
    tabStyle: {paddingBottom: 0, borderTopWidth: 0, borderTopColor: '#efefef'},
    showIcon: true
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true,
  backBehavior:'none'
});
// 主栈
export const RootNavigator = StackNavigator({
  Home: {screen: TabHomeNavigator},
  PictureDetailView: {screen: PictureDetail},
  VideoDetailView: {screen: VideoDetail},
});
