# ReactNativeLearing
react native learing demo

## 记录React Native学习的过程

**React Native** ReactNative 可以基于目前大热的开源JavaScript库React.js来开发iOS和Android原生App。其原理是在JavaScript中用React抽象操作系统原生的UI组件，代替DOM元素来渲染。

在幕后，React Native在主线程之外，在另一个背景线程里运行JavaScript引擎，两个线程之间通过一批量化的async消息协议来通信（有一个专门的React插件）。

UI方面React Native提供跨平台的类似Flexbox的布局系统，还支持CSS子集。可以用JSX或者普通JavaScript语言，还有CoffeeScript和TypeScript来开发。

## TabBar和导航
使用的导航为react-navigation，以tabbar导航作为navigation的首页面。

```
  // 底部分栏
  const TabHomeNavigator = TabNavigator({
    UITab: {screen: UIBaseView},
    APITab: {screen: APIBaseView},
  },
```

```
  export const RootNavigator = StackNavigator({
    Home: { screen: TabHomeNavigator },
    ActivityIndicator:{ screen: ActivityIndicatorView},
    Button:{screen: ButtonView},
    DatePicker: {screen: DatePickerView},
    DrawerLayoutAndroid: {screen: DrawerLayoutAndroidView},
    View: {screen: ViewView},
});
```
UITab为UI视图实现，APITab为API实现。

## UI功能列表

1. ActivityIndicator
2. Button
3. DatePicker
4. DrawLayoutAndroid
5. View
6. FlatList
7. Image
8. KeyBoardAvoid
9. ListView
10. Modal
11. Picker
12. Refreshcontrol
13. SectionListView
14. Slider
15. Switch
16. Touchable
17. WebView


## API功能列表
1. ActionSheetIOS
2. AdSupportIOS
3. Alert
4. Animated
5. AppState
6. AsyncStorage
7. Clipboard
8. Geolocation
9. Keyboard
10. LayoutAnimation
11. Linking
12. NativeMethodsMixin
13. NetInfo
14. panResponder
15. PixelRatio
16. ShareView


## Demo练习列表
1. RNToOC
2. SectionList
3. NativeEventEmitter
4. LoginView

### SectionList效果图

<img src="https://github.com/MisterZhouZhou/ReactNativeLearing/blob/master/show/Demo-SectionList.png" width=250px heith=400px/>


### LoginView效果图
<img src="https://github.com/MisterZhouZhou/ReactNativeLearing/blob/master/show/loginView.png" width=250px heith=400px/>



