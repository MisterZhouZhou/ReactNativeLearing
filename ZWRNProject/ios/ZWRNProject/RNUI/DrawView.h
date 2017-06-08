//
//  DrawView.h
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>
#define PI 3.14159265358979323846
@interface DrawView : UIView
@property (nonatomic, assign) CGRect clipping;
@property (nonatomic, strong) NSDictionary* drawData;
@property (nonatomic, assign) CGPoint transPos;
@property (nonatomic, assign) CGPoint scaleValue;
@end
