//
//  BatteryStatus.m
//  Coffee
//
//  Created by Victor Varghese on 10/09/18.
//  Copyright © 2018 Facebook. All rights reserved.
//


#import <Foundation/Foundation.h>
#import "BatteryStatus.h"

@implementation BatteryStatus
RCT_EXPORT_MODULE(BatteryStatus)

- (instancetype)init
{
  if ((self = [super init])) {
    
    [[UIDevice currentDevice] setBatteryMonitoringEnabled:YES];
    
  }
  return self;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"getBatteryStatus"];
}

RCT_EXPORT_METHOD(hide) {
}

RCT_EXPORT_METHOD(getBatteryStatus:(RCTResponseSenderBlock)callback)
{
  callback(@[[self getBatteryStatus]]);
}

//manually get battery status by calling following method

-(NSDictionary*)getBatteryStatus
{
  
  float batteryLevel = [UIDevice currentDevice].batteryLevel;
  
  NSObject* currentLevel = nil;
  
  currentLevel = [NSNumber numberWithFloat:(batteryLevel * 100)];
  
  NSMutableDictionary* batteryData = [NSMutableDictionary dictionaryWithCapacity:2];
  
  [batteryData setObject:currentLevel forKey:@"level"];
  return batteryData;
  
}

@end
