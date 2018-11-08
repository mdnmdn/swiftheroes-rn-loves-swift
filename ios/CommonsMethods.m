#import "CommonsMethods.h"
#import <React/RCTUtils.h>
#import <UIKit/UIKit.h>

@implementation CommonsMethods

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(goToAppSettingsLocation){
  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];
}
@end
