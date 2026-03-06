# Capacitor Proguard Rules

-keep class com.getcapacitor.** { *; }
-keep  class **.R$* {
    <fields>;
}
-keepnames class com.getcapacitor.Bridge

# Google Auth Rules (if using Google Login)
-keep class com.google.android.gms.auth.api.signin.** { *; }
-dontwarn com.google.android.gms.**

# Proguard rules for Capacitor Cordova Plugins
-keep class org.apache.cordova.** { *; }
-keep public class * extends org.apache.cordova.CordovaPlugin

# Optimization
-repackageclasses ''
-allowaccessmodification
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
