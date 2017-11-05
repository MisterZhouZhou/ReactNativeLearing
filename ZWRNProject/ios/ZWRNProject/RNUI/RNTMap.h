//
//  RNTMap.h
//  ZWRNProject
//
//  Created by chengfei on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

@interface RNTMap : MKMapView
@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@end
