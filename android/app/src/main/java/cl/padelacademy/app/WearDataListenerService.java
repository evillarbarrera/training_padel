package cl.padelacademy.app;

import android.util.Log;

import com.google.android.gms.wearable.MessageEvent;
import com.google.android.gms.wearable.Wearable;
import com.google.android.gms.wearable.WearableListenerService;

import org.json.JSONArray;
import org.json.JSONObject;

import java.nio.charset.StandardCharsets;

public class WearDataListenerService extends WearableListenerService {

    private static final String TAG = "PadelBloxWearPhone";

    @Override
    public void onMessageReceived(MessageEvent messageEvent) {
        String path = messageEvent.getPath();
        byte[] data = messageEvent.getData();
        String payloadString = data != null ? new String(data, StandardCharsets.UTF_8) : "";

        Log.d(TAG, "Mensaje recibido desde el reloj Wear OS en path: " + path + " con payload: " + payloadString);

        if ("/get-upcoming-matches".equals(path)) {
            sendUpcomingMatchesToWear(messageEvent.getSourceNodeId());
        } else if ("/score-changed".equals(path)) {
            handleScoreChanged(payloadString);
        } else if ("/stroke-detected".equals(path)) {
            handleStrokeDetected(payloadString);
        } else if ("/workout-finished".equals(path)) {
            handleWorkoutFinished(payloadString);
        }
    }

    private void sendUpcomingMatchesToWear(String nodeId) {
        try {
            JSONObject response = new JSONObject();
            response.put("action", "SYNC_MATCHES");
            response.put("usuario_nombre", "Jugador PadelBlox");

            JSONArray matches = new JSONArray();

            JSONObject m1 = new JSONObject();
            m1.put("id", "res_default_1");
            m1.put("reserva_id", 101);
            m1.put("tipo_label", "Cancha Reservada");
            m1.put("club_nombre", "Club Padel Center");
            m1.put("cancha_nombre", "Cancha 2 Cristal");
            m1.put("cancha_tipo", "Panorámica");
            m1.put("horarioTexto", "Hoy 19:30 - 21:00");
            m1.put("pareja1", "Mi Pareja");
            m1.put("pareja2", "Rivales");
            m1.put("punto_oro", true);
            m1.put("sets", 3);
            m1.put("es_hoy", true);
            matches.put(m1);

            response.put("proximos_partidos", matches);

            byte[] bytes = response.toString().getBytes(StandardCharsets.UTF_8);
            Wearable.getMessageClient(this).sendMessage(nodeId, "/sync-matches", bytes);
            Log.d(TAG, "Partidos sincronizados exitosamente con el reloj Wear OS (Nodo: " + nodeId + ")");
        } catch (Exception e) {
            Log.e(TAG, "Error enviando partidos al reloj: " + e.getMessage(), e);
        }
    }

    private void handleScoreChanged(String jsonStr) {
        Log.d(TAG, "Marcador en vivo actualizado desde el reloj: " + jsonStr);
    }

    private void handleStrokeDetected(String jsonStr) {
        Log.d(TAG, "Golpe detectado en tiempo real: " + jsonStr);
    }

    private void handleWorkoutFinished(String jsonStr) {
        Log.i(TAG, "Resumen de partido y entrenamiento guardado desde Wear OS: " + jsonStr);
    }
}
