//
//  OCNativeEvent.m
//  ZWRNProject
//
//  Created by chengfei on 17/5/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "OCNativeEvent.h"

@implementation OCNativeEvent
RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"showAlertCallback"];//导出你的方法，数组结构。
}

RCT_EXPORT_METHOD(emit:(NSString*) result){
  [self showAlert:@"200" result:result];
}

-(void)showAlert:(NSString*)code result:(NSString*) result
{
  [self sendEventWithName:@"showAlertCallback"
                     body:@{
                            @"code": code,
                            @"result": result,
                            }];
  
}
@end
