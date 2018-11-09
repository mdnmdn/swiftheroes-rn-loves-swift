//
//  Bridge.h
//  RNLoveSwift2
//
//  Created by Marco  on 09/11/2018.
//  Copyright © 2018 Marco. All rights reserved.
//

#ifndef Bridge_h
#define Bridge_h

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNBridge, NSObject)

RCT_EXTERN_METHOD(writeText:(NSString *)val)

@end

#endif /* Bridge_h */
