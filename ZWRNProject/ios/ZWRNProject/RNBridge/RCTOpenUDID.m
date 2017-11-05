//
//  RCTOpenUDID.m
//  ZWRNProject
//
//  Created by chengfei on 17/5/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTOpenUDID.h"
#import "OpenUDID.h"
#import <React/RCTUtils.h>

@implementation RCTOpenUDID

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getOpenUDID:(RCTResponseSenderBlock)callback withErrorCallback:(RCTResponseErrorBlock)errorCallback){
  NSError* error;
  NSString* openUDID = [OpenUDID valueWithError:&error];
  if (error && ([error code] != kOpenUDIDErrorNone)) {
    errorCallback(RCTErrorWithMessage(@"OpenUDID is unavailable."));
  } else {
    callback(@[openUDID]);
  }
}

@end
