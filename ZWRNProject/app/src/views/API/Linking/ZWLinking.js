import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, TouchableHighlight} from 'react-native';

/*
  AppDelegate.m
  1、导入头文件 #import <React/RCTLinkingManager.h>
  2、添加代理方法
     - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
  {
    return [RCTLinkingManager application:application openURL:url
                        sourceApplication:sourceApplication annotation:annotation];
  }

  // Only if your app is using [Universal Links](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).
  - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
   restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
  {
    return [RCTLinkingManager application:application
                     continueUserActivity:userActivity
                       restorationHandler:restorationHandler];
  }

  3、设置打开和监听
  // 打开外部应用
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.log('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));

  // 监听外部链接打开应用
  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  },
  // 移除外部链接打开应用
  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  },

 */


class CustomButton extends React.Component {
  constructor(props){
    super(props);
  }
  propTypes: {
    url: React.PropTypes.string,
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={()=>Linking.canOpenURL(this.props.url).then(supported => {
           if (supported) {
               Linking.openURL(this.props.url);
           } else {
              console.log('无法打开该URI: ' + this.props.url);
           }
        })}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class ZWLayoutAnimation extends Component {
  render() {
    return (
      <View style={{marginTop:20}}>
         <Text text="iOS平台,Linking演示"/>
         <CustomButton url={'http://www.lcode.org'}  text="点击打开http网页(http://www.lcode.org)"/>
         <CustomButton url={'https://www.baidu.com'} text="点击打开https网页(https://www.baidu.com)"/>
         <CustomButton url={'smsto:18352402477'}  text="点击进行发送短信(smsto:18352402477)"/>
         <CustomButton url={'sms://800888'}  text="点击进行发送短信(sms://800888)"/>
         <CustomButton url={'tel:18611116979'}  text="点击进行打电话(tel:18611116979)"/>
         <CustomButton url={'mailto:1984774346@qq.com'}  text="点击进行发送邮件(mailto:1984774346@qq.com)"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomColor: '#cdcdcd',
  },
});
