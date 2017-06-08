//
//  RCTDrawViewManager.m
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import <React/RCTUIManager.h>
#import "RCTDrawViewManager.h"
#import "RCTDrawView.h"
@implementation RCTDrawViewManager

RCT_EXPORT_MODULE();
-(UIView *)view{
  return [[RCTDrawView alloc]init];
}

RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(drawData, NSDictionary);
RCT_EXPORT_VIEW_PROPERTY(transPos, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(scaleValue, CGPoint);

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
