import UIKit
import Capacitor
import FirebaseCore
import FirebaseMessaging

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, MessagingDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        FirebaseApp.configure()
        Messaging.messaging().delegate = self
        
        // Recuperar activamente el token FCM al iniciar la app
        Messaging.messaging().token { token, error in
            if let token = token {
                print("Firebase registration token on launch: \(token)")
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            } else if let error = error {
                print("Error retrieving FCM token on launch: \(error)")
            }
        }
        return true
    }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        // Vincula el token de Apple (APNs) con Firebase Messaging
        Messaging.messaging().apnsToken = deviceToken
        
        // Recuperar activamente el token FCM cada vez que iOS registra el dispositivo
        Messaging.messaging().token { token, error in
            if let token = token {
                print("Firebase registration token on APNs register: \(token)")
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            } else if let error = error {
                print("Error retrieving FCM token on APNs register: \(error)")
            }
        }
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }
    
    // Método para recibir el token de Firebase (FCM) directamente cuando cambia o se refresca
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let token = fcmToken {
            print("Firebase registration token from delegate: \(token)")
            NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: token)
            let data = ["token": token]
            NotificationCenter.default.post(name: Notification.Name("messaging_token"), object: nil, userInfo: data)
        }
    }

    func applicationWillResignActive(_ application: UIApplication) {}
    func applicationDidEnterBackground(_ application: UIApplication) {}
    func applicationWillEnterForeground(_ application: UIApplication) {}
    func applicationDidBecomeActive(_ application: UIApplication) {}
    func applicationWillTerminate(_ application: UIApplication) {}

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }

    // Build 41: forcing fresh CI run
}
