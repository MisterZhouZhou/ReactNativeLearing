/**
 * 路由导航
 * https://github.com/facebook/react-native
 * @flow
 */

// 1 安装 react-navigation
    //npm install --save react-navigation
// 2 导入react-navigation头文件
// 3 配置导航标题
// 4 配置跳转路由

import { StackNavigator } from 'react-navigation'
import { TabNavigator } from 'react-navigation'

import UIBaseView from './UI/TabBar/UIBaseView'
import APIBaseView from './UI/TabBar/APIBaseView'
import ActivityIndicatorView from './UI/ActivityIndicator/ZWActivityIndicatorView'
import ButtonView from './UI/Button/ZWButtonView'
import DatePickerView from './UI/DatePicker/DatePickerIOSView'
import DrawerLayoutAndroidView from './UI/DrawerLayoutAndroid/ZWDrawerLayoutAndroidView'
import ViewView from './UI/View/ZWViewView'

// API
import ActionSheetIOSView from './API/ActionSheetIOS/ZWActionSheetIOS'
import AdSupportIOSView from './API/AdSupportIOS/ZWAdSupportIOS'
import AlertView from './API/Alert/ZWAlert'
import AnimatedView from './API/Animated/ZWAnimated'
import AppStateView from './API/AppState/ZWAppState'
import AsyncStorageView from './API/AsyncStorage/ZWAsyncStorage'
import ClipboardView from './API/Clipboard/ZWClipboard'
import GeolocationView from './API/Geolocation/ZWGeolocation'
import KeyboardView from './API/Keyboard/ZWKeyboard'
import LayoutAnimationView from './API/LayoutAnimation/ZWLayoutAnimation'
import LinkingView from './API/Linking/ZWLinking'
import NativeMethodsMixinView from './API/NativeMethodsMixin/ZWNativeMethodsMixin'
import NetInfoView from './API/NetInfo/ZWNetInfo'
import PanResponderView from './API/PanResponder/ZWPanResponder'
import PixelRatioView from './API/PixelRatio/ZWPixelRatio'
import ShareView from './API/Share/ZWShare'





import DetailsView from './UI/DetailsView'
import AboutDetailsView from './UI/AboutDetailsView'

// 底部分栏
const TabHomeNavigator = TabNavigator({
  UITab: {screen: UIBaseView},
  APITab: {screen: APIBaseView},
},
{ tabBarOptions: {
    inactiveTintColor: '#888',   // 未激活时tabbar上字体颜色
    activeTintColor: '#23aeeb',  // 激活时tabbar上字体颜色
    style: {backgroundColor: '#fff'}, // tabbar背景颜色
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 11, marginTop: 3},
    tabStyle: {paddingBottom: 0, borderTopWidth: 0.5, borderTopColor: '#efefef'},
    showIcon: true
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true
});


export const RootNavigator = StackNavigator({
  Home: { screen: TabHomeNavigator },
  ActivityIndicator:{ screen: ActivityIndicatorView},
  Button:{screen: ButtonView},
  DatePicker: {screen: DatePickerView},
  DrawerLayoutAndroid: {screen: DrawerLayoutAndroidView},
  View: {screen: ViewView},
  ActionSheetIOS: {screen: ActionSheetIOSView},
  AdSupportIOS: {screen: AdSupportIOSView},
  Alert: {screen: AlertView},
  Animated: {screen: AnimatedView},
  AppState: {screen: AppStateView},
  AsyncStorage: {screen: AsyncStorageView},
  Clipboard: {screen: ClipboardView},
  Geolocation: {screen: GeolocationView},
  Keyboard: {screen: KeyboardView},
  LayoutAnimation: {screen:LayoutAnimationView},
  Linking: {screen: LinkingView},
  NativeMethodsMixin: {screen: NativeMethodsMixinView},
  NetInfo: {screen: NetInfoView},
  PanResponder: {screen: PanResponderView},
  PixelRatio: {screen: PixelRatioView},
  ShareView: {screen: ShareView},
  Details: {screen: DetailsView},
  AboutDetail: {screen: AboutDetailsView},
});
