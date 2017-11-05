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
import DemoBaseView from './UI/TabBar/DemoBaseView'
import ES6View from './UI/TabBar/ES6View'

// UI
import ActivityIndicatorView from './UI/ActivityIndicator/ZWActivityIndicatorView'
import ButtonView from './UI/Button/ZWButtonView'
import DatePickerView from './UI/DatePicker/DatePickerIOSView'
import DrawerLayoutAndroidView from './UI/DrawerLayoutAndroid/ZWDrawerLayoutAndroidView'
import ViewView from './UI/View/ZWViewView'
import FlatListView from './UI/FlatList/ZWFlatList'
import ImageView from './UI/Image/ZWImage'
import KeyboardAvoidView from './UI/KeyboardAvoidingView/ZWKeyboardAvodingView'
import ListViewView from './UI/ListView/ZWListView'
import ModalView from './UI/Modal/ZWModal'
import PickerView from './UI/Picker/ZWPicker'
import RefreshControlView from './UI/RefreshControl/ZWRefreshControl'
import SectionListView from './UI/SectionList/ZWSectionList'
import SliderView from './UI/Slider/ZWSlider'
import SwitchView from './UI/Switch/ZWSwitch'
import TouchableView from './UI/Touchable/ZWTouchable'
import WebViewView from './UI/WebView/ZWWebView'



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
import GitTrendingView from './API/GitTrending/ZWGitTrending'



// Demo
import RNToOCView from './Demo/RNToOC/ZWRNToOCView'
import DemoSectionListView from './Demo/SectionList/ZWSectionList'
import NativeEventEmitterView from './Demo/NativeEventEmitter/ZWNativeEventEmitter'
import LoginViews from './Demo/Login/ZWLogin'
import ProductView from './Demo/Product/ZWProductView'
import DepthActionView from './Demo/DepthAction/DepthAction'
import RealmView from './Demo/Realm/ZWRealm'
import ArtView from './Demo/ART/ZWArt'
import HeartView from './Demo/ART/Heart'
import CircleProcessView from './Demo/ART/CircleProcess'
import ZWDialogView from './Demo/Dialog/ZWDialogView'
import CalculatorView from './Demo/Calculator/ZWCalculator'
import CalendarView from './Demo/Calendar/ZWCalendar'
import MultCellView from './Demo/MultCell/MultCell'
import OpenUUIDView from './Demo/OpenUUID/ZWOpenUUID'
import DaoJiShiView from './Demo/DaoJiShi/DaoJiShi'
import ScrollViewAllView from './Demo/ScrollViewAll/ZWScrollView2'
import CityListView from './Demo/CityList/ZWCityList'
import ShopCartView from './Demo/ShopCart/ZWShopCart'
import AnimaTView from './Demo/Animated/ZWAnimated'
import DrawView from './Demo/DrawView/ZWDrawView'
import MKMapView from './Demo/MKMap/ZWMapView'
import DrawAnleView from './Demo/DrawAngle/ZWDrawAnleView'
import GlobalThemeView from './Demo/GlobalTheme/GlobalThemeView'
import ImageSwiperView from './Demo/ImageSwiper/ZWImageSwiper'
import ZWImageSwiperView from './Demo/ImageSwiper/ZWImageSwiperView'
import ZWWeatherView from './Demo/Weather/ZWWeather'
import CustomListView from './Demo/CustomListView/ZWCustomListView'
import ActionSheetView from './Demo/ActionSheet/ZWActionSheet'
import KeyboardAvoidingView from './Demo/KeyboardAvoidingView/ZWKeyboardAvoidingView'
import ZWRefreshControlView from './Demo/RefreshControl/RefreshControlView'
import ZWPulseLoaderView from './Demo/PulseLoaderView/ZWPulseLoader'
import ZWShadowView from './Demo/shadow/ZWShadowView'


// ES6
import ZWMapView from './ES6/Map/ZWMap'
import ZWUnderscoreView from './ES6/Underscore/ZWUnderscore'
import ZWBaseLanguageView from './ES6/BaseLanguage/ZWBaseLanguage'



import DetailsView from './UI/DetailsView'
import AboutDetailsView from './UI/AboutDetailsView'

// 底部分栏
const TabHomeNavigator = TabNavigator({
  UITab: {screen: UIBaseView},
  APITab: {screen: APIBaseView},
  DemoTab: {screen: DemoBaseView},
  ES6Tab: {screen: ES6View},
},
{ tabBarOptions: {
    inactiveTintColor: '#888',   // 未激活时tabbar上字体颜色
    activeTintColor: '#23aeeb',  // 激活时tabbar上字体颜色
    style: {backgroundColor: '#fff'}, // tabbar背景颜色
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 11, marginTop: 3},
    tabStyle: {paddingBottom: 0, borderTopWidth: 0.5, borderTopColor: '#efefef'},
    showIcon: true,
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
  FlatList: {screen: FlatListView},
  Img: {screen: ImageView},
  KeyboardAvoid: {screen:KeyboardAvoidView},
  ListView: {screen: ListViewView},
  Modal: {screen: ModalView},
  Picker: {screen: PickerView},
  RefreshControl: {screen: RefreshControlView},
  SectionListView: {screen: SectionListView},
  Slider: {screen: SliderView},
  Switch: {screen: SwitchView},
  Touchable: {screen: TouchableView},
  WebViewView: {screen: WebViewView},

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
  GitTrending: {screen: GitTrendingView},

  RNToOC: {screen: RNToOCView},
  SectionList: {screen: DemoSectionListView},
  NativeEventEmitter: {screen: NativeEventEmitterView},
  LoginView: {screen: LoginViews},
  Product: {screen: ProductView},
  DepthAction: {screen: DepthActionView},
  Realm: {screen: RealmView},
  Art: {screen: ArtView},
  Heart: {screen: HeartView},
  CircleProcess: {screen: CircleProcessView},
  ZWDialog: {screen: ZWDialogView},
  CalculatorView: {screen: CalculatorView},
  Calendar:{screen: CalendarView},
  MultCell: {screen: MultCellView},
  OpenUUID: {screen: OpenUUIDView},
  DaoJiShi: {screen: DaoJiShiView},
  ScrollViewAll: {screen: ScrollViewAllView},
  CityList: {screen: CityListView},
  ShopCart: {screen: ShopCartView},
  Animated: {screen: AnimaTView},
  DrawViews: {screen: DrawView},
  MKMap: {screen: MKMapView},
  DrawAnleView: {screen: DrawAnleView},
  GlobalTheme: {screen: GlobalThemeView},
  ImageSwiper: {screen: ImageSwiperView},
  ZWImageSwiperView: {screen: ZWImageSwiperView},
  ZWWeather: {screen: ZWWeatherView},
  CustomList: {screen: CustomListView},
  ActionSheet: {screen: ActionSheetView},
  KeyboardAvoiding:{screen: KeyboardAvoidingView},
  ZWRefreshControl: {screen: ZWRefreshControlView},
  ZWPulseLoader: {screen: ZWPulseLoaderView},
  ZWShadow: {screen: ZWShadowView},

  ZWMap: {screen: ZWMapView},
  ZWUnderscore: {screen: ZWUnderscoreView},
  ZWBaseLanguage: {screen: ZWBaseLanguageView},

  Details: {screen: DetailsView},
  AboutDetail: {screen: AboutDetailsView},
});
