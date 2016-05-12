//
//  MyCustomViewManager.m
//  MyProject
//
//  Created by AceWei on 16/5/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MyCustomViewManager.h"
#import "MyCustomView.h"

@implementation MyCustomViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  MyCustomView *view =[[MyCustomView alloc] init];
//  view.contentSize = CGSizeMake(view.frame.size.width, view.frame.size.height*3);
  return view;
}

@end
