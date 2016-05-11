//
//  AceMapManager.m
//  MyProject
//
//  Created by AceWei on 16/5/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "AceMapManager.h"
#import <MapKit/MapKit.h>

@implementation AceMapManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[MKMapView alloc] init];
}

@end
