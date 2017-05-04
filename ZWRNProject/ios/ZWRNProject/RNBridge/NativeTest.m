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

// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(doSomething:(NSString *)testStr){
  NSLog(@"%@ ===> doSomething",testStr);
}

@end
