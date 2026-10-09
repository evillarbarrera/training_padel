package cl.padelacademy.app.wear.services

import android.content.Context
import android.os.Build
import android.os.CombinedVibration
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.speech.tts.TextToSpeech
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import cl.padelacademy.app.wear.models.ScoreState
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.util.Locale

class MatchScoreManager(private val context: Context) : TextToSpeech.OnInitListener {

    var state by mutableStateOf(ScoreState())
        private set

    var team1Name by mutableStateOf("Pareja 1")
    var team2Name by mutableStateOf("Pareja 2")
    var useGoldenPoint by mutableStateOf(true)
    var totalSets by mutableStateOf(3)
    val matchHistory = mutableStateListOf<ScoreState>()
    var activeAlertMessage by mutableStateOf<String?>(null)
        private set
    var voiceAnnouncementsEnabled by mutableStateOf(true)

    private var tts: TextToSpeech? = null
    private var isTtsReady = false
    private val scope = CoroutineScope(Dispatchers.Main + Job())
    private var alertJob: Job? = null

    private val vibrator: Vibrator? by lazy {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
            vibratorManager?.defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
        }
    }

    init {
        tts = TextToSpeech(context.applicationContext, this)
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            val result = tts?.setLanguage(Locale.forLanguageTag("es-ES"))
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                tts?.setLanguage(Locale.forLanguageTag("es-MX"))
            }
            tts?.setSpeechRate(1.05f)
            tts?.setPitch(1.0f)
            isTtsReady = true
        }
    }

    val displayPointsT1: String
        get() {
            if (state.isTieBreak) return "${state.pointsT1}"
            return when (state.pointsT1) {
                0 -> "0"
                1 -> "15"
                2 -> "30"
                3 -> "40"
                4 -> if (useGoldenPoint) "ORO" else "AD"
                else -> "40"
            }
        }

    val displayPointsT2: String
        get() {
            if (state.isTieBreak) return "${state.pointsT2}"
            return when (state.pointsT2) {
                0 -> "0"
                1 -> "15"
                2 -> "30"
                3 -> "40"
                4 -> if (useGoldenPoint) "ORO" else "AD"
                else -> "40"
            }
        }

    fun resetMatch(
        t1: String = "Pareja 1",
        t2: String = "Pareja 2",
        goldenPoint: Boolean = true,
        sets: Int = 3
    ) {
        team1Name = t1
        team2Name = t2
        useGoldenPoint = goldenPoint
        totalSets = sets
        state = ScoreState()
        matchHistory.clear()
        activeAlertMessage = null
        updateServeSide()
    }

    fun addPoint(toTeam: Int) {
        if (state.matchWinner != null) return
        saveStateForUndo()

        if (state.isTieBreak) {
            handleTieBreakPoint(toTeam)
        } else {
            handleStandardPoint(toTeam)
        }

        updateServeSide()
        evaluateSpecialPoints()
    }

    fun undoLastPoint() {
        if (matchHistory.isNotEmpty()) {
            val prevState = matchHistory.removeAt(matchHistory.size - 1)
            state = prevState
            activeAlertMessage = null
            triggerHaptic(HapticType.CLICK)
        }
    }

    private fun saveStateForUndo() {
        matchHistory.add(state)
        if (matchHistory.size > 25) {
            matchHistory.removeAt(0)
        }
    }

    private fun handleStandardPoint(team: Int) {
        var p1 = state.pointsT1
        var p2 = state.pointsT2

        if (team == 1) {
            if (p1 == 3 && p2 < 3) {
                winGame(1)
                return
            } else if (p1 == 3 && p2 == 3) {
                if (useGoldenPoint) {
                    winGame(1)
                    return
                } else {
                    p1 = 4
                    triggerHaptic(HapticType.CLICK)
                }
            } else if (p1 == 4) {
                winGame(1)
                return
            } else if (p2 == 4) {
                p2 = 3 // Vuelta a iguales
                triggerHaptic(HapticType.CLICK)
            } else {
                p1 += 1
                triggerHaptic(HapticType.CLICK)
            }
        } else {
            if (p2 == 3 && p1 < 3) {
                winGame(2)
                return
            } else if (p2 == 3 && p1 == 3) {
                if (useGoldenPoint) {
                    winGame(2)
                    return
                } else {
                    p2 = 4
                    triggerHaptic(HapticType.CLICK)
                }
            } else if (p2 == 4) {
                winGame(2)
                return
            } else if (p1 == 4) {
                p1 = 3 // Vuelta a iguales
                triggerHaptic(HapticType.CLICK)
            } else {
                p2 += 1
                triggerHaptic(HapticType.CLICK)
            }
        }

        val golden = useGoldenPoint && p1 == 3 && p2 == 3
        state = state.copy(
            pointsT1 = p1,
            pointsT2 = p2,
            isGoldenPoint = golden
        )

        if (golden) {
            showAlert("⭐ PUNTO DE ORO", HapticType.NOTIFICATION)
            speak("Punto de Oro")
        }
    }

    private fun handleTieBreakPoint(team: Int) {
        var p1 = state.pointsT1
        var p2 = state.pointsT2
        var serving = state.servingTeam

        if (team == 1) p1 += 1 else p2 += 1
        triggerHaptic(HapticType.CLICK)

        val totalPts = p1 + p2
        if (totalPts % 2 == 1) {
            serving = if (serving == 1) 2 else 1
        }

        if (totalPts % 6 == 0 && totalPts > 0) {
            showAlert("🔄 CAMBIO DE LADO", HapticType.DIRECTION_UP)
            speak("Cambio de lado")
        }

        state = state.copy(
            pointsT1 = p1,
            pointsT2 = p2,
            servingTeam = serving
        )

        val target = 7
        if (p1 >= target && p1 - p2 >= 2) {
            winSet(1)
        } else if (p2 >= target && p2 - p1 >= 2) {
            winSet(2)
        }
    }

    private fun winGame(team: Int) {
        val setIdx = state.currentSet
        val updatedGamesT1 = state.gamesT1.toMutableList()
        val updatedGamesT2 = state.gamesT2.toMutableList()

        if (team == 1) {
            updatedGamesT1[setIdx] = updatedGamesT1[setIdx] + 1
        } else {
            updatedGamesT2[setIdx] = updatedGamesT2[setIdx] + 1
        }

        val g1 = updatedGamesT1[setIdx]
        val g2 = updatedGamesT2[setIdx]
        val totalGamesInSet = g1 + g2
        val nextServing = if (state.servingTeam == 1) 2 else 1

        triggerHaptic(HapticType.SUCCESS)

        state = state.copy(
            pointsT1 = 0,
            pointsT2 = 0,
            gamesT1 = updatedGamesT1,
            gamesT2 = updatedGamesT2,
            isGoldenPoint = false,
            isBreakPoint = false,
            servingTeam = nextServing
        )

        // Alerta Cambio de Lado (suma de games impar)
        if (totalGamesInSet % 2 == 1 && g1 != 6 && g2 != 6) {
            showAlert("🔄 CAMBIO DE LADO", HapticType.DIRECTION_UP)
            speak("Juego. $g1 a $g2. Cambio de lado")
        } else {
            speak("Juego. $g1 a $g2")
        }

        // Tie-Break al 6-6
        if (g1 == 6 && g2 == 6) {
            state = state.copy(isTieBreak = true)
            showAlert("🔥 TIE-BREAK A 7", HapticType.NOTIFICATION)
            speak("Tie-break")
            return
        }

        // Ganar Set
        if ((g1 >= 6 && g1 - g2 >= 2) || g1 == 7) {
            winSet(1)
        } else if ((g2 >= 6 && g2 - g1 >= 2) || g2 == 7) {
            winSet(2)
        }
    }

    private fun winSet(team: Int) {
        var setsWonT1 = 0
        var setsWonT2 = 0
        for (i in 0..state.currentSet) {
            val g1 = state.gamesT1[i]
            val g2 = state.gamesT2[i]
            if (g1 > g2) setsWonT1 += 1
            else if (g2 > g1) setsWonT2 += 1
        }

        val setsNeeded = if (totalSets == 3) 2 else 1
        if (setsWonT1 >= setsNeeded) {
            state = state.copy(matchWinner = 1, isTieBreak = false, pointsT1 = 0, pointsT2 = 0)
            showAlert("🏆 VICTORIA ${team1Name.uppercase()}", HapticType.SUCCESS)
            speak("Partido finalizado. Ganador: $team1Name")
        } else if (setsWonT2 >= setsNeeded) {
            state = state.copy(matchWinner = 2, isTieBreak = false, pointsT1 = 0, pointsT2 = 0)
            showAlert("🏆 VICTORIA ${team2Name.uppercase()}", HapticType.SUCCESS)
            speak("Partido finalizado. Ganador: $team2Name")
        } else {
            val nextSet = state.currentSet + 1
            val newG1 = state.gamesT1.toMutableList().apply { add(0) }
            val newG2 = state.gamesT2.toMutableList().apply { add(0) }

            state = state.copy(
                currentSet = nextSet,
                gamesT1 = newG1,
                gamesT2 = newG2,
                isTieBreak = false,
                pointsT1 = 0,
                pointsT2 = 0
            )
            showAlert("🏁 SET FINALIZADO (SET ${nextSet + 1})", HapticType.NOTIFICATION)
            speak("Set finalizado. Comienza set ${nextSet + 1}")
        }
    }

    private fun evaluateSpecialPoints() {
        if (state.matchWinner != null) return

        val isReceivingBreakPoint = (state.servingTeam == 1 && state.pointsT2 >= 3 && state.pointsT2 > state.pointsT1) ||
                (state.servingTeam == 2 && state.pointsT1 >= 3 && state.pointsT1 > state.pointsT2)

        state = state.copy(isBreakPoint = isReceivingBreakPoint)
        if (isReceivingBreakPoint && !state.isGoldenPoint) {
            showAlert("⚠️ PUNTO DE BREAK", HapticType.NOTIFICATION)
        }
    }

    private fun updateServeSide() {
        val totalGamePoints = state.pointsT1 + state.pointsT2
        val side = if (totalGamePoints % 2 == 0) "Derecha" else "Izquierda"
        state = state.copy(serveSide = side)
    }

    fun speak(text: String) {
        if (!voiceAnnouncementsEnabled || !isTtsReady) return
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "PadelBloxTTS_${System.currentTimeMillis()}")
    }

    private fun showAlert(msg: String, haptic: HapticType) {
        activeAlertMessage = msg
        triggerHaptic(haptic)

        alertJob?.cancel()
        alertJob = scope.launch {
            delay(3000)
            if (activeAlertMessage == msg) {
                activeAlertMessage = null
            }
        }
    }

    private fun triggerHaptic(type: HapticType) {
        val vib = vibrator ?: return
        if (!vib.hasVibrator()) return

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val effect = when (type) {
                HapticType.CLICK -> VibrationEffect.createOneShot(35, VibrationEffect.DEFAULT_AMPLITUDE)
                HapticType.SUCCESS -> VibrationEffect.createWaveform(longArrayOf(0, 50, 60, 90), intArrayOf(0, 180, 0, 255), -1)
                HapticType.NOTIFICATION -> VibrationEffect.createWaveform(longArrayOf(0, 80, 50, 80), intArrayOf(0, 200, 0, 200), -1)
                HapticType.DIRECTION_UP -> VibrationEffect.createWaveform(longArrayOf(0, 40, 40, 70), intArrayOf(0, 120, 0, 220), -1)
            }
            vib.vibrate(effect)
        } else {
            @Suppress("DEPRECATION")
            vib.vibrate(50)
        }
    }

    fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        alertJob?.cancel()
    }

    enum class HapticType {
        CLICK, SUCCESS, NOTIFICATION, DIRECTION_UP
    }
}
