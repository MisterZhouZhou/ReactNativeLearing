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

1、ActivityIndicator
2、Button
3、DatePicker
4、DrawLayoutAndroid
5、View

## API功能列表
1、

