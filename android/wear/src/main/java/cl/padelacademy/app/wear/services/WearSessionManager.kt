package cl.padelacademy.app.wear.services

import android.content.Context
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import cl.padelacademy.app.wear.models.ScheduledMatch
import com.google.android.gms.wearable.MessageClient
import com.google.android.gms.wearable.MessageEvent
import com.google.android.gms.wearable.NodeClient
import com.google.android.gms.wearable.Wearable
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await
import org.json.JSONArray
import org.json.JSONObject

class WearSessionManager private constructor(context: Context) : MessageClient.OnMessageReceivedListener {

    private val appContext = context.applicationContext
    private val messageClient: MessageClient = Wearable.getMessageClient(appContext)
    private val nodeClient: NodeClient = Wearable.getNodeClient(appContext)
    private val scope = CoroutineScope(Dispatchers.IO + Job())

    var isReachable by mutableStateOf(false)
        private set

    var playerName by mutableStateOf("Jugador PadelBlox")
        private set

    val scheduledMatches = mutableStateListOf<ScheduledMatch>(ScheduledMatch.sampleDefault)
    var selectedMatch by mutableStateOf<ScheduledMatch?>(ScheduledMatch.sampleDefault)

    var onStartMatchReceived: ((JSONObject) -> Unit)? = null
    var onStopMatchReceived: (() -> Unit)? = null
    var onScoreUpdatedReceived: ((JSONObject) -> Unit)? = null

    init {
        messageClient.addListener(this)
        checkReachability()
    }

    fun checkReachability() {
        scope.launch {
            try {
                val nodes = nodeClient.connectedNodes.await()
                val reachable = nodes.isNotEmpty()
                launch(Dispatchers.Main) {
                    isReachable = reachable
                }
                if (reachable) {
                    requestMatchesFromPhone()
                }
            } catch (e: Exception) {
                launch(Dispatchers.Main) {
                    isReachable = false
                }
            }
        }
    }

    fun requestMatchesFromPhone() {
        scope.launch {
            try {
                val payload = JSONObject().apply {
                    put("action", "GET_UPCOMING_MATCHES")
                }.toString().toByteArray()

                val nodes = nodeClient.connectedNodes.await()
                for (node in nodes) {
                    messageClient.sendMessage(node.id, "/get-upcoming-matches", payload).await()
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    fun sendScoreChanged(t1: String, t2: String, g1: Int, g2: Int, s1: Int, s2: Int) {
        scope.launch {
            try {
                val json = JSONObject().apply {
                    put("action", "SCORE_CHANGED")
                    put("puntos_t1", t1)
                    put("puntos_t2", t2)
                    put("games_t1", g1)
                    put("games_t2", g2)
                    put("sets_t1", s1)
                    put("sets_t2", s2)
                    put("timestamp", System.currentTimeMillis())
                }
                val bytes = json.toString().toByteArray()
                val nodes = nodeClient.connectedNodes.await()
                for (node in nodes) {
                    messageClient.sendMessage(node.id, "/score-changed", bytes).await()
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    fun sendStrokeDetected(stroke: String, speedKmh: Double, peakG: Double) {
        scope.launch {
            try {
                val json = JSONObject().apply {
                    put("action", "STROKE_DETECTED")
                    put("golpe", stroke)
                    put("velocidad_kmh", speedKmh)
                    put("fuerza_g", peakG)
                    put("timestamp", System.currentTimeMillis())
                }
                val bytes = json.toString().toByteArray()
                val nodes = nodeClient.connectedNodes.await()
                for (node in nodes) {
                    messageClient.sendMessage(node.id, "/stroke-detected", bytes).await()
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    fun sendWorkoutFinished(summary: Map<String, Any>) {
        scope.launch {
            try {
                val json = JSONObject(summary).apply {
                    put("action", "WORKOUT_FINISHED")
                    selectedMatch?.let { sm ->
                        sm.reservaId?.let { put("reserva_id", it) }
                        sm.ligaPartidoId?.let { put("liga_partido_id", it) }
                        put("tipo_actividad", sm.tipoActividad)
                        put("cancha_nombre", sm.canchaNombre)
                        put("club_nombre", sm.clubNombre)
                    }
                }
                val bytes = json.toString().toByteArray()
                val nodes = nodeClient.connectedNodes.await()
                for (node in nodes) {
                    messageClient.sendMessage(node.id, "/workout-finished", bytes).await()
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    override fun onMessageReceived(event: MessageEvent) {
        try {
            val jsonString = String(event.data)
            val json = JSONObject(jsonString)
            val action = json.optString("action")

            scope.launch(Dispatchers.Main) {
                when (action) {
                    "START_MATCH" -> onStartMatchReceived?.invoke(json)
                    "STOP_MATCH" -> onStopMatchReceived?.invoke()
                    "UPDATE_SCORE" -> onScoreUpdatedReceived?.invoke(json)
                    "SYNC_MATCHES" -> handleMatchesPayload(json)
                    else -> {
                        if (event.path == "/sync-matches") {
                            handleMatchesPayload(json)
                        }
                    }
                }
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    fun handleMatchesPayload(payload: JSONObject) {
        val name = payload.optString("usuario_nombre")
        if (name.isNotEmpty()) {
            this.playerName = name
        }

        val list = payload.optJSONArray("proximos_partidos")
        if (list != null && list.length() > 0) {
            val parsed = mutableListOf<ScheduledMatch>()
            for (i in 0 until list.length()) {
                val item = list.getJSONObject(i)
                val id = item.optString("id", "match_$i")
                val rId = if (item.has("reserva_id")) item.getInt("reserva_id") else null
                val lId = if (item.has("liga_partido_id")) item.getInt("liga_partido_id") else null
                val tipo = item.optString("tipo_label", "Reserva")
                val tipoAct = item.optString("tipo_actividad", if (tipo.contains("entrena", ignoreCase = true) || tipo.contains("clase", ignoreCase = true)) "entrenamiento" else "partido")
                val coach = item.optString("entrenador_nombre", "")
                val club = item.optString("club_nombre", "Club PadelBlox")
                val cancha = item.optString("cancha_nombre", "Cancha 1")
                val cTipo = item.optString("cancha_tipo", "Cristal")
                val hor = item.optString("horario_texto", "Hoy")
                val p1 = item.optString("pareja1", "Mi Pareja")
                val p2 = item.optString("pareja2", "Rivales")
                val gp = item.optBoolean("punto_oro", true)
                val st = item.optInt("sets", 3)
                val eh = item.optBoolean("es_hoy", true)

                parsed.add(
                    ScheduledMatch(
                        id = id,
                        reservaId = rId,
                        ligaPartidoId = lId,
                        tipoLabel = tipo,
                        tipoActividad = tipoAct,
                        entrenadorNombre = if (coach.isNotEmpty()) coach else null,
                        clubNombre = club,
                        canchaNombre = cancha,
                        canchaTipo = cTipo,
                        horarioTexto = hor,
                        pareja1 = p1,
                        pareja2 = p2,
                        puntoOro = gp,
                        sets = st,
                        esHoy = eh
                    )
                )
            }

            if (parsed.isNotEmpty()) {
                scheduledMatches.clear()
                scheduledMatches.addAll(parsed)
                selectedMatch = parsed.firstOrNull()
            }
        }
    }

    companion object {
        @Volatile
        private var instance: WearSessionManager? = null

        fun getInstance(context: Context): WearSessionManager {
            return instance ?: synchronized(this) {
                instance ?: WearSessionManager(context).also { instance = it }
            }
        }
    }
}
