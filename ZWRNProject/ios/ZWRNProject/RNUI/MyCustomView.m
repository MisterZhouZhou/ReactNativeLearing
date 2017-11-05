//
//  MyCustomView.m
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyCustomView.h"

@implementation MyCustomView

-(id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self!=nil) {
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 100, 50)];
    label.text = @"你好中国";
    [self addSubview:label];
    label.textColor = [UIColor blueColor];
  }
  return self;
}


@end
