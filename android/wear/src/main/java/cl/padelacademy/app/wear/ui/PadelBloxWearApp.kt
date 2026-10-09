package cl.padelacademy.app.wear.ui

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Scaffold
import androidx.wear.compose.material.TimeText
import androidx.wear.compose.material.TimeTextDefaults
import cl.padelacademy.app.wear.models.ScheduledMatch
import cl.padelacademy.app.wear.services.MatchScoreManager
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.services.WorkoutManager
import cl.padelacademy.app.wear.theme.PadelBloxColors
import cl.padelacademy.app.wear.ui.screens.HomeScreen
import cl.padelacademy.app.wear.ui.screens.LiveStatsScreen
import cl.padelacademy.app.wear.ui.screens.MatchPickerScreen
import cl.padelacademy.app.wear.ui.screens.ScoreboardScreen
import cl.padelacademy.app.wear.ui.screens.SplashScreen
import cl.padelacademy.app.wear.ui.screens.SummaryScreen

enum class WearScreen {
    SPLASH,
    HOME,
    MATCH_PICKER,
    ACTIVE_MATCH
}

@Composable
fun PadelBloxWearApp(
    scoreManager: MatchScoreManager,
    motionClassifier: MotionClassifier,
    workoutManager: WorkoutManager,
    sessionManager: WearSessionManager
) {
    var currentScreen by remember { mutableStateOf(WearScreen.SPLASH) }
    var isRightHanded by remember { mutableStateOf(true) }
    var isGoldenPoint by remember { mutableStateOf(true) }

    val pagerState = rememberPagerState(initialPage = 0, pageCount = { 3 })

    fun startMatch(match: ScheduledMatch?) {
        if (match != null) {
            isGoldenPoint = match.puntoOro
            scoreManager.useGoldenPoint = match.puntoOro
            scoreManager.resetMatch(
                t1 = match.pareja1,
                t2 = match.pareja2,
                goldenPoint = match.puntoOro,
                sets = match.sets
            )
        } else {
            scoreManager.useGoldenPoint = isGoldenPoint
            scoreManager.resetMatch()
        }

        workoutManager.startWorkout()
        motionClassifier.startTracking(rightHanded = isRightHanded)
        currentScreen = WearScreen.ACTIVE_MATCH
    }

    fun finishAndSyncMatch() {
        motionClassifier.stopTracking()
        workoutManager.stopWorkout {
            val summary = mutableMapOf<String, Any>(
                "duracion_segundos" to workoutManager.elapsedTime,
                "calorias_quemadas" to workoutManager.activeEnergy,
                "fc_promedio" to workoutManager.avgHeartRate.toInt(),
                "fc_maxima" to workoutManager.maxHeartRate.toInt(),
                "total_golpes" to motionClassifier.totalStrokes,
                "smash_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.SMASH] ?: 0),
                "bandeja_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.BANDEJA] ?: 0),
                "vibora_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.VIBORA] ?: 0),
                "drive_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.DRIVE] ?: 0),
                "reves_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.REVES] ?: 0),
                "volea_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.VOLEA] ?: 0),
                "globo_count" to (motionClassifier.strokeCounts[cl.padelacademy.app.wear.models.PadelStroke.GLOBO] ?: 0),
                "velocidad_max_kmh" to motionClassifier.maxSpeedKmh,
                "velocidad_media_kmh" to motionClassifier.avgSpeedKmh,
                "marcador_final_t1" to scoreManager.state.gamesT1.toString(),
                "marcador_final_t2" to scoreManager.state.gamesT2.toString(),
                "equipo_ganador" to (scoreManager.state.matchWinner ?: 0)
            )

            sessionManager.selectedMatch?.let { activeMatch ->
                activeMatch.reservaId?.let { summary["reserva_id"] = it }
                activeMatch.ligaPartidoId?.let { summary["liga_partido_id"] = it }
                summary["cancha_nombre"] = activeMatch.canchaNombre
                summary["club_nombre"] = activeMatch.clubNombre
            }

            sessionManager.sendWorkoutFinished(summary)
            currentScreen = WearScreen.HOME
        }
    }

    LaunchedEffect(Unit) {
        sessionManager.onStartMatchReceived = { payload ->
            val p1 = payload.optString("pareja1", "Pareja 1")
            val p2 = payload.optString("pareja2", "Pareja 2")
            val gp = payload.optBoolean("punto_oro", true)
            val sets = payload.optInt("sets", 3)
            val mano = payload.optString("mano_reloj", "derecha")
            val rId = if (payload.has("reserva_id")) payload.getInt("reserva_id") else null
            val lId = if (payload.has("liga_partido_id")) payload.getInt("liga_partido_id") else null
            val club = payload.optString("club_nombre", "Club PadelBlox")
            val cancha = payload.optString("cancha_nombre", "Cancha 1")

            if (rId != null || lId != null) {
                sessionManager.selectedMatch = ScheduledMatch(
                    id = "remote_${rId ?: lId ?: 0}",
                    reservaId = rId,
                    ligaPartidoId = lId,
                    tipoLabel = "Sincronizado desde Teléfono",
                    clubNombre = club,
                    canchaNombre = cancha,
                    canchaTipo = "Pádel",
                    horarioTexto = "En vivo",
                    pareja1 = p1,
                    pareja2 = p2,
                    puntoOro = gp,
                    sets = sets,
                    esHoy = true
                )
            }

            isGoldenPoint = gp
            isRightHanded = (mano == "derecha")
            scoreManager.resetMatch(t1 = p1, t2 = p2, goldenPoint = gp, sets = sets)
            workoutManager.startWorkout()
            motionClassifier.startTracking(rightHanded = isRightHanded)
            currentScreen = WearScreen.ACTIVE_MATCH
        }

        sessionManager.onStopMatchReceived = {
            finishAndSyncMatch()
        }
    }

    Scaffold(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark),
        timeText = {
            if (currentScreen == WearScreen.HOME || currentScreen == WearScreen.MATCH_PICKER) {
                TimeText(
                    timeTextStyle = TimeTextDefaults.timeTextStyle(
                        color = PadelBloxColors.textSecondary
                    )
                )
            }
        }
    ) {
        AnimatedContent(
            targetState = currentScreen,
            transitionSpec = { fadeIn() togetherWith fadeOut() },
            modifier = Modifier.fillMaxSize(),
            label = "AppScreenTransition"
        ) { screen ->
            when (screen) {
                WearScreen.SPLASH -> {
                    SplashScreen(onFinished = { currentScreen = WearScreen.HOME })
                }
                WearScreen.MATCH_PICKER -> {
                    MatchPickerScreen(
                        sessionManager = sessionManager,
                        onMatchSelected = { match ->
                            isGoldenPoint = match.puntoOro
                            scoreManager.useGoldenPoint = match.puntoOro
                            currentScreen = WearScreen.HOME
                        },
                        onClose = { currentScreen = WearScreen.HOME }
                    )
                }
                WearScreen.ACTIVE_MATCH -> {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(PadelBloxColors.bgDark)
                    ) {
                        HorizontalPager(
                            state = pagerState,
                            modifier = Modifier.fillMaxSize()
                        ) { page ->
                            when (page) {
                                0 -> ScoreboardScreen(
                                    scoreManager = scoreManager,
                                    motionClassifier = motionClassifier,
                                    workoutManager = workoutManager,
                                    sessionManager = sessionManager
                                )
                                1 -> LiveStatsScreen(
                                    motionClassifier = motionClassifier,
                                    workoutManager = workoutManager
                                )
                                2 -> SummaryScreen(
                                    scoreManager = scoreManager,
                                    motionClassifier = motionClassifier,
                                    workoutManager = workoutManager,
                                    sessionManager = sessionManager,
                                    onFinishAndSync = { finishAndSyncMatch() }
                                )
                            }
                        }

                        // Pager Indicator Dots at the bottom
                        Row(
                            modifier = Modifier
                                .align(Alignment.BottomCenter)
                                .padding(bottom = 2.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            repeat(3) { index ->
                                val isSelected = pagerState.currentPage == index
                                Box(
                                    modifier = Modifier
                                        .padding(horizontal = 2.dp)
                                        .size(if (isSelected) 4.dp else 3.dp)
                                        .background(
                                            if (isSelected) PadelBloxColors.neonVolt else PadelBloxColors.textMuted,
                                            CircleShape
                                        )
                                )
                            }
                        }
                    }
                }
                WearScreen.HOME -> {
                    HomeScreen(
                        scoreManager = scoreManager,
                        motionClassifier = motionClassifier,
                        sessionManager = sessionManager,
                        isRightHanded = isRightHanded,
                        onToggleHand = { isRightHanded = !isRightHanded },
                        isGoldenPoint = isGoldenPoint,
                        onToggleGoldenPoint = {
                            isGoldenPoint = !isGoldenPoint
                            scoreManager.useGoldenPoint = isGoldenPoint
                        },
                        onStartMatch = { match -> startMatch(match) },
                        onOpenMatchPicker = { currentScreen = WearScreen.MATCH_PICKER }
                    )
                }
            }
        }
    }
}
