//
//  MCFileWriterUtil.m
//  MyProject
//
//  Created by AceWei on 16/5/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MCFileWriterUtil.h"
#import <UIKit/UIKit.h>
#import <RCTMap.h>

@implementation MCFileWriterUtil

// Expose this module to the React Native bridge
RCT_EXPORT_MODULE()

// Persist data
RCT_EXPORT_METHOD(writeFile:(NSString *)fileName
                  withContents:(NSString *)contents
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback:(RCTResponseSenderBlock)successCallback) {
  
  NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
  
  successCallback(@[@"Write method called"]);
}


// Load data from disk and return the String.
RCT_EXPORT_METHOD(readFile:(NSString *)fileName
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback:(RCTResponseSenderBlock)successCallback) {
  
  NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
  
  successCallback(@[@"Read method called"]);
}


RCT_EXPORT_METHOD(helloTest:(NSString *)name)
{
  NSLog(@"hello: %@", name);
  
  NSArray *objectsToShare = @[[NSURL URLWithString:@"http://m.baidu.com"]];
  UIActivityViewController *activityVC = [[UIActivityViewController alloc] initWithActivityItems:objectsToShare applicationActivities:nil];
  
  UIViewController *rootController = UIApplication.sharedApplication.delegate.window.rootViewController;
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [rootController presentViewController:activityVC animated:YES completion:nil];
  });
}



@end
