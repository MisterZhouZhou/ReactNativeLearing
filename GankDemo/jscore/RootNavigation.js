
import HomePageView from './HomePage'
import HistoryListView from './HistoryList'
import WebViewPage from './WebViewPage'
import DailyContent from './DailyContent'
import {StackNavigator } from 'react-navigation';

export const RootNavigator = StackNavigator({
  Home: {screen: HomePageView},
  HistoryList: {screen : HistoryListView},
  WebView: {screen: WebViewPage},
  DailyContent: {screen: DailyContent},
}, {
  headerMode: 'screen',
  mode: 'modal'
});
