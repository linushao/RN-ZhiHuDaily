
//
//  CalendarManager.m
//  MyProject
//
//  Created by AceWei on 16/5/11.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
//#import <RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}

@end
