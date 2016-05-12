//
//  MyCustomView.m
//  MyProject
//
//  Created by AceWei on 16/5/12.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MyCustomView.h"

@implementation MyCustomView


-(id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self!=nil) {
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 100, 50)];
    label.text = @"你好中国";
    [self addSubview:label];
    label.textColor = [UIColor blueColor];
  }
  return self;
}



/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
