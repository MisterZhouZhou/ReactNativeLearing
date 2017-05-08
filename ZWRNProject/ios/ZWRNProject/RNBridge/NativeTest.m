//
//  NativeTest.m
//  ZWRNProject
//
//  Created by chengfei on 17/5/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "NativeTest.h"

@implementation NativeTest

// 导出模块，不添加参数即默认为这个类名
RCT_EXPORT_MODULE();

#pragma mark - Response
// 导出方法，桥接到js的方法返回值类型必须是void
/* 回调参数必须为两个，第一个为状态，第二个为参数 */
RCT_EXPORT_METHOD(doSomething:(NSString *)testStr resolver:(RCTResponseSenderBlock)callback){
  NSLog(@"%@ ===> doSomething",testStr);
  NSString *callbackData = @"Callback数据"; //准备回调回去的数据
  callback(@[[NSNull null],callbackData]);
}


#pragma mark - Promise
// 导出方法，桥接到js的方法返回值类型必须是void
/*有两个回调，一个为正确的，一个为error*/
RCT_REMAP_METHOD(testPromisesEvent,name:(NSString *)testStr
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *PromisesData = @"Promises数据"; //准备回调回去的数据
  if (PromisesData) {
    resolve(testStr);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}

// 导出方法，桥接到js的方法返回值类型必须是void
/*必须有两个回调，一个为正确的，一个为error*/
RCT_REMAP_METHOD(thePromisesEvent, names:(NSString *)star resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  resolve(star);
}

RCT_REMAP_METHOD(thePromisesTest,theName:(NSString *)star resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  resolve(star);
}

@end
