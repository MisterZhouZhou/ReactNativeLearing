//
//  DrawView.m
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "DrawView.h"
#import <React/RCTConvert.h>

@implementation DrawView

-(id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self){
    //    self.backgroundColor =  [UIColor clearColor];
    //    self.layer.anchorPoint = CGPointMake(0.5, 0.5);
  }
  return self;
}
-(void)layoutSubviews
{
  [super layoutSubviews];
  //  [self setNeedsDisplay];
}
- (void)setNeedsDisplay
{
  [super setNeedsDisplay];
  [self.layer setNeedsDisplay];
}
-(void)drawRect:(CGRect)rect
{
  CGContextRef context = UIGraphicsGetCurrentContext();
  CGContextTranslateCTM(context, self.frame.size.width/2, self.frame.size.height/2);
  CGContextScaleCTM(context, _scaleValue.x, _scaleValue.y);
  CGContextTranslateCTM(context, _transPos.x, _transPos.y);
  if (!CGRectIsEmpty(self.clipping)) {
    CGContextClipToRect(context, self.clipping);
  }
  UIColor * color;
  NSArray * orderKey = [RCTConvert NSArray:_drawData[@"order"]];
  for (NSString *key in orderKey) {
    NSArray* array = [RCTConvert NSArray:_drawData[key]];
    if ([key containsString:@"lines"]){
      for (int i=0; i<array.count; i++) {
        color = [RCTConvert UIColor:array[i][@"color"]];
        CGContextSetStrokeColorWithColor(context, color.CGColor);
        CGContextSetLineWidth(context, [RCTConvert CGFloat:array[i][@"stroke"]]);
        CGPoint aPoints[2];//坐标点
        aPoints[0] =CGPointMake([RCTConvert CGFloat:array[i][@"x1"]], [RCTConvert CGFloat:array[i][@"y1"]]);//坐标1
        aPoints[1] =CGPointMake([RCTConvert CGFloat:array[i][@"x2"]], [RCTConvert CGFloat:array[i][@"y2"]]);//坐标2
        CGContextAddLines(context, aPoints, 2);//添加线
        CGContextDrawPath(context, kCGPathStroke); //根据坐标绘制路径
      }
    }else if ([key containsString:@"rects"]){
      for(int i=0; i<array.count; i++){
        CGRect rect = [RCTConvert CGRect:array[i]];
        color = [RCTConvert UIColor:array[i][@"color"]];
        NSInteger fillType = [RCTConvert NSInteger:array[i][@"fill"]];
        if (fillType == 2){
          UIColor* sideColor = [RCTConvert UIColor:array[i][@"sideColor"]];
          CGFloat sideWidth = [RCTConvert CGFloat:array[i][@"sideWidth"]];
          CGContextSetFillColorWithColor(context, color.CGColor);//填充颜色
          CGContextSetStrokeColorWithColor(context, sideColor.CGColor);//线框颜色
          CGContextSetLineWidth(context, sideWidth);//线的宽度
          CGContextAddRect(context,rect);//画方框
          CGContextDrawPath(context, kCGPathFillStroke);//绘画路径
        }else if (fillType == 1){
          CGContextSetLineWidth(context, 1);//线的宽度
          CGContextSetStrokeColorWithColor(context, color.CGColor);
          CGContextStrokeRect(context, rect);
        }else{
          CGContextSetFillColorWithColor(context, color.CGColor);
          CGContextFillRect(context, rect);
        }
      }
    }else if ([key containsString:@"circles"]){
      for(int i=0; i<array.count; i++){
        CGPoint point = [RCTConvert CGPoint:array[i]];
        color = [RCTConvert UIColor:array[i][@"color"]];
        CGFloat radius = [RCTConvert CGFloat:array[i][@"radius"]];
        NSInteger fillType = [RCTConvert NSInteger:array[i][@"fill"]];
        CGContextAddArc(context, point.x, point.y, radius, 0, 2*PI, 0);
        if (fillType == 2){
          UIColor* sideColor = [RCTConvert UIColor:array[i][@"sideColor"]];
          CGFloat sideWidth = [RCTConvert CGFloat:array[i][@"sideWidth"]];
          CGContextSetFillColorWithColor(context, color.CGColor);//填充颜色
          CGContextSetStrokeColorWithColor(context, sideColor.CGColor);//线框颜色
          CGContextSetLineWidth(context, sideWidth);//线的宽度
          CGContextDrawPath(context, kCGPathFillStroke);
        }else if (fillType == 1){
          CGContextSetLineWidth(context, 1);//线的宽度
          CGContextSetStrokeColorWithColor(context, color.CGColor);
          CGContextDrawPath(context, kCGPathStroke);//绘画路径
        }else{
          CGContextSetFillColorWithColor(context, color.CGColor);
          CGContextDrawPath(context, kCGPathFill);//绘画路径
        }
      }
    }else if ([key containsString:@"texts"]){
      NSMutableParagraphStyle* paragraph = [[NSMutableParagraphStyle alloc] init];
      paragraph.alignment = NSTextAlignmentCenter;
      for(int i=0; i<array.count; i++){
        color = [RCTConvert UIColor:array[i][@"color"]];
        CGFloat fontSize = [RCTConvert CGFloat:array[i][@"fontSize"]];
        UIFont* font = [UIFont fontWithName:@"Arial" size:fontSize];
        NSString* text = [RCTConvert NSString:array[i][@"text"]];
        CGRect rect = [text boundingRectWithSize:CGSizeMake(MAXFLOAT, fontSize * 2)
                                         options:NSStringDrawingUsesLineFragmentOrigin
                                      attributes:@{NSFontAttributeName:font,NSParagraphStyleAttributeName:paragraph} context:nil];
        CGPoint point = [RCTConvert CGPoint:array[i]];
        rect.origin.x = point.x - rect.size.width / 2;
        rect.origin.y = point.y - rect.size.height / 2;
        [text drawInRect:rect
          withAttributes:@{
                           NSFontAttributeName: font,
                           NSForegroundColorAttributeName: color,
                           }];
      }
    }
  }
}


@end
