#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(PadelBloxWatchPlugin, "PadelBloxWatch",
    CAP_PLUGIN_METHOD(isWatchConnected, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(startMatchSession, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(syncUpcomingMatches, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(updateScore, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(stopMatchSession, CAPPluginReturnPromise);
)
