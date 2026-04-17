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
        return true
    }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        // Vincula el token de Apple (APNs) con Firebase Messaging
        Messaging.messaging().apnsToken = deviceToken
        // NOTA: Comentamos esta línea para que Capacitor NO reciba el token APNs de 32 bytes.
        // Solo queremos que reciba el token de Firebase (FCM) que enviamos en didReceiveRegistrationToken.
        // NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: deviceToken)
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name: .capacitorDidFailToRegisterForRemoteNotifications, object: error)
    }
    
    // Método para recibir el token de Firebase (FCM) directamente
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let token = fcmToken {
            print("Firebase registration token: \(token)")
            
            // Enviamos el token de Firebase al bridge de Capacitor.
            // Lo enviamos como Data para que el plugin de Capacitor lo procese correctamente.
            // El plugin lo convertirá a hex en JS, por lo que en JS deberemos de-hexificarlo.
            if let fcmData = token.data(using: .utf8) {
                NotificationCenter.default.post(name: .capacitorDidRegisterForRemoteNotifications, object: fcmData)
            }
            
            // También enviamos el evento personalizado por si acaso
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
