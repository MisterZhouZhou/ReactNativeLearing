//
//  RNTMapManager.m
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import "RNTMap.h"
#import <React/UIView+React.h>
#import <React/RCTConvert+MapKit.h>

@implementation RNTMapManager

RCT_EXPORT_MODULE();

-(UIView *)view{
  RNTMap *map = [RNTMap new];
  map.delegate = self;
  return map;
}

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL);
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RNTMap)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}


#pragma mark MKMapViewDelegate
- (void)mapView:(RNTMap *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onChange(@{
                     @"region": @{
                         @"latitude": @(region.center.latitude),
                         @"longitude": @(region.center.longitude),
                         @"latitudeDelta": @(region.span.latitudeDelta),
                         @"longitudeDelta": @(region.span.longitudeDelta),
                         }
                     });
}
@end
