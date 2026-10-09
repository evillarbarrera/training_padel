package cl.padelacademy.app.wear.services

import com.google.android.gms.wearable.MessageEvent
import com.google.android.gms.wearable.WearableListenerService

class WearDataListenerService : WearableListenerService() {
    override fun onMessageReceived(messageEvent: MessageEvent) {
        super.onMessageReceived(messageEvent)
        WearSessionManager.getInstance(applicationContext).onMessageReceived(messageEvent)
    }
}
