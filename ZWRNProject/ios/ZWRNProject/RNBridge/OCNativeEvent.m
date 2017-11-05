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
//  [self showAlert:@"200" result:result];
  [self downLoadFile];
}

-(void)showAlert:(NSString*)code result:(NSString*) result
{
//  [self sendEventWithName:@"showAlertCallback"
//                     body:@{
//                            @"code": code,
//                            @"result": result,
//                            }];
  
  
}

- (void)downLoadFile{
  NSURL* url = [NSURL URLWithString:@"https://picjumbo.imgix.net/HNCK8461.jpg?q=40&w=1650&sharp=30"];

  // 得到session对象
  NSURLSessionConfiguration* cfg = [NSURLSessionConfiguration defaultSessionConfiguration]; // 默认配置
  
  NSURLSession* session = [NSURLSession sessionWithConfiguration:cfg delegate:self delegateQueue:[NSOperationQueue mainQueue]];
  
  // 创建任务
  NSURLSessionDownloadTask* downloadTask = [session downloadTaskWithURL:url];
  
  // 开始任务
  [downloadTask resume];
  

}


#pragma mark -- NSURLSessionDownloadDelegate
/**
 *  下载完毕会调用
 *
 *  @param location     文件临时地址
 */
- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask
didFinishDownloadingToURL:(NSURL *)location
{
    [self sendEventWithName:@"showAlertCallback"
                       body:@{
                              @"code": @"200",
                              @"result": @"",
                              }];
}
/**
 *  每次写入沙盒完毕调用
 *  在这里面监听下载进度，totalBytesWritten/totalBytesExpectedToWrite
 *
 *  @param bytesWritten              这次写入的大小
 *  @param totalBytesWritten         已经写入沙盒的大小
 *  @param totalBytesExpectedToWrite 文件总大小
 */
- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask
      didWriteData:(int64_t)bytesWritten
 totalBytesWritten:(int64_t)totalBytesWritten
totalBytesExpectedToWrite:(int64_t)totalBytesExpectedToWrite
{
  [self sendEventWithName:@"showAlertCallback"
                     body:@{
                            @"code": @"201",
                            @"result": @"",
                            }];
//  self.pgLabel.text = [NSString stringWithFormat:@"下载进度:%f",(double)totalBytesWritten/totalBytesExpectedToWrite];
}

/**
 *  恢复下载后调用，
 */
- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask
 didResumeAtOffset:(int64_t)fileOffset
expectedTotalBytes:(int64_t)expectedTotalBytes
{
  
}

@end
