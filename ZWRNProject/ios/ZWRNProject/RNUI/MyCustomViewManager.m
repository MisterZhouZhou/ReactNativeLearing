//
//  MyCustomViewManager.m
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyCustomViewManager.h"
#import "MyCustomView.h"
@implementation MyCustomViewManager

RCT_EXPORT_MODULE();
- (UIView *)view
{
  MyCustomView *view =[[MyCustomView alloc] init];
  view.contentSize = CGSizeMake(view.frame.size.width, view.frame.size.height*3);
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(scrollEnabled, BOOL);
RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor);
@end
