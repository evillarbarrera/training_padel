package cl.padelacademy.app.wear.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Text
import cl.padelacademy.app.wear.models.PadelStroke
import cl.padelacademy.app.wear.services.MatchScoreManager
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.services.WorkoutManager
import cl.padelacademy.app.wear.theme.PadelBloxColors

@Composable
fun ScoreboardScreen(
    scoreManager: MatchScoreManager,
    motionClassifier: MotionClassifier,
    workoutManager: WorkoutManager,
    sessionManager: WearSessionManager
) {
    fun syncScore() {
        val setIdx = scoreManager.state.currentSet
        val g1 = scoreManager.state.gamesT1.getOrElse(setIdx) { 0 }
        val g2 = scoreManager.state.gamesT2.getOrElse(setIdx) { 0 }

        var s1 = 0
        var s2 = 0
        for (i in 0..setIdx) {
            val games1 = scoreManager.state.gamesT1.getOrElse(i) { 0 }
            val games2 = scoreManager.state.gamesT2.getOrElse(i) { 0 }
            if (games1 > games2) s1++ else if (games2 > games1) s2++
        }

        sessionManager.sendScoreChanged(
            t1 = scoreManager.displayPointsT1,
            t2 = scoreManager.displayPointsT2,
            g1 = g1,
            g2 = g2,
            s1 = s1,
            s2 = s2
        )
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark)
            .padding(top = 14.dp, bottom = 16.dp, start = 8.dp, end = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceEvenly
    ) {
        val isTraining = sessionManager.selectedMatch?.esEntrenamiento == true

        // 1. Header Centrado en Zona Superior Segura
        Row(
            modifier = Modifier
                .clip(RoundedCornerShape(10.dp))
                .background(PadelBloxColors.bgCard)
                .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(10.dp))
                .padding(horizontal = 7.dp, vertical = 2.dp),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically
        ) {
            if (isTraining) {
                Text(
                    text = "🏋️ ENTRENAMIENTO",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.Black,
                    color = PadelBloxColors.neonVolt
                )
                Spacer(modifier = Modifier.width(5.dp))
                Text(
                    text = "⚡ EN VIVO",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = PadelBloxColors.cyberCyan
                )
            } else {
                val alert = scoreManager.activeAlertMessage
                when {
                    alert != null -> {
                        Text(
                            text = alert,
                            fontSize = 7.5.sp,
                            fontWeight = FontWeight.Black,
                            color = PadelBloxColors.neonVolt
                        )
                    }
                    scoreManager.state.isGoldenPoint -> {
                        Text(
                            text = "⭐ PUNTO DE ORO",
                            fontSize = 7.5.sp,
                            fontWeight = FontWeight.Black,
                            color = PadelBloxColors.goldenAmber
                        )
                    }
                    scoreManager.state.isTieBreak -> {
                        Text(
                            text = "🔥 TIE-BREAK",
                            fontSize = 7.5.sp,
                            fontWeight = FontWeight.Black,
                            color = PadelBloxColors.sunsetOrange
                        )
                    }
                    else -> {
                        Text(
                            text = "SET ${scoreManager.state.currentSet + 1}",
                            fontSize = 8.sp,
                            fontWeight = FontWeight.Black,
                            color = PadelBloxColors.textPrimary
                        )
                    }
                }

                Spacer(modifier = Modifier.width(5.dp))

                // Saque
                val sideShort = if (scoreManager.state.serveSide.startsWith("D", ignoreCase = true)) "D" else "I"
                Text(
                    text = "🎾 T${scoreManager.state.servingTeam} ($sideShort)",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = PadelBloxColors.neonVolt
                )
            }

            Spacer(modifier = Modifier.width(3.dp))

            // Audio Toggle
            Box(
                modifier = Modifier
                    .clickable {
                        scoreManager.voiceAnnouncementsEnabled = !scoreManager.voiceAnnouncementsEnabled
                    }
                    .padding(horizontal = 2.dp)
            ) {
                Text(
                    text = if (scoreManager.voiceAnnouncementsEnabled) "🔊" else "🔇",
                    fontSize = 7.sp
                )
            }
        }

        // 2. Marcador Dual / Panel de Telemetría (Altura 60dp)
        Row(
            modifier = Modifier
                .fillMaxWidth(0.92f)
                .height(60.dp),
            horizontalArrangement = Arrangement.spacedBy(5.dp)
        ) {
            if (isTraining) {
                // Tarjeta 1: Total Golpes
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxSize()
                        .clip(RoundedCornerShape(14.dp))
                        .background(PadelBloxColors.team1CardFill)
                        .border(1.dp, PadelBloxColors.cyberCyan.copy(alpha = 0.5f), RoundedCornerShape(14.dp))
                        .padding(vertical = 2.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = "TOTAL GOLPES",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.cyberCyan
                    )
                    Text(
                        text = "${motionClassifier.totalStrokes}",
                        fontSize = 22.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.cyberCyan
                    )
                    val smashes = motionClassifier.strokeCounts[PadelStroke.SMASH] ?: 0
                    Text(
                        text = "⚡ Smash: $smashes",
                        fontSize = 7.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.neonVolt
                    )
                }

                // Tarjeta 2: Velocidad Máx & FC
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxSize()
                        .clip(RoundedCornerShape(14.dp))
                        .background(PadelBloxColors.team2CardFill)
                        .border(1.dp, PadelBloxColors.neonVolt.copy(alpha = 0.5f), RoundedCornerShape(14.dp))
                        .padding(vertical = 2.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = "VEL. MÁXIMA",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.neonVolt
                    )
                    Text(
                        text = "${motionClassifier.maxSpeedKmh.toInt()} km/h",
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.neonVolt
                    )
                    Text(
                        text = "❤️ ${workoutManager.heartRate.toInt()} bpm",
                        fontSize = 7.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.roseRed
                    )
                }
            } else {
                // Tarjeta Equipo 1 (Cyber Cyan)
                val isServingT1 = scoreManager.state.servingTeam == 1
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxSize()
                        .clip(RoundedCornerShape(14.dp))
                        .background(PadelBloxColors.team1CardFill)
                        .border(
                            width = if (isServingT1) 1.5.dp else 1.dp,
                            color = if (isServingT1) PadelBloxColors.cyberCyan else PadelBloxColors.borderSubtle,
                            shape = RoundedCornerShape(14.dp)
                        )
                        .clickable {
                            scoreManager.addPoint(1)
                            syncScore()
                        }
                        .padding(vertical = 2.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = scoreManager.team1Name,
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.Bold,
                        color = if (isServingT1) PadelBloxColors.cyberCyan else PadelBloxColors.textSecondary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Text(
                        text = scoreManager.displayPointsT1,
                        fontSize = 22.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.cyberCyan
                    )
                    val setIdx = scoreManager.state.currentSet
                    val g1 = scoreManager.state.gamesT1.getOrElse(setIdx) { 0 }
                    Text(
                        text = "G: $g1",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.textPrimary
                    )
                }

                // Tarjeta Equipo 2 (Sunset Orange)
                val isServingT2 = scoreManager.state.servingTeam == 2
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxSize()
                        .clip(RoundedCornerShape(14.dp))
                        .background(PadelBloxColors.team2CardFill)
                        .border(
                            width = if (isServingT2) 1.5.dp else 1.dp,
                            color = if (isServingT2) PadelBloxColors.sunsetOrange else PadelBloxColors.borderSubtle,
                            shape = RoundedCornerShape(14.dp)
                        )
                        .clickable {
                            scoreManager.addPoint(2)
                            syncScore()
                        }
                        .padding(vertical = 2.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = scoreManager.team2Name,
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.Bold,
                        color = if (isServingT2) PadelBloxColors.sunsetOrange else PadelBloxColors.textSecondary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Text(
                        text = scoreManager.displayPointsT2,
                        fontSize = 22.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.sunsetOrange
                    )
                    val setIdx = scoreManager.state.currentSet
                    val g2 = scoreManager.state.gamesT2.getOrElse(setIdx) { 0 }
                    Text(
                        text = "G: $g2",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.textPrimary
                    )
                }
            }
        }

        // 3. Mini Barra Inferior Centrada (Deshacer + FC + Golpe) 100% visible
        Row(
            modifier = Modifier
                .fillMaxWidth(0.82f),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Deshacer punto
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(8.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(8.dp))
                    .clickable {
                        scoreManager.undoLastPoint()
                        syncScore()
                    }
                    .padding(horizontal = 5.dp, vertical = 2.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "↩ Undo",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.Bold,
                    color = PadelBloxColors.textSecondary
                )
            }

            // Ritmo Cardíaco en Vivo
            Row(
                modifier = Modifier
                    .clip(RoundedCornerShape(8.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(8.dp))
                    .padding(horizontal = 4.dp, vertical = 2.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(text = "❤️", fontSize = 6.5.sp)
                Spacer(modifier = Modifier.width(2.dp))
                Text(
                    text = "${workoutManager.heartRate.toInt()}",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = PadelBloxColors.roseRed
                )
            }

            // Último golpe clasificado / Contador
            val last = motionClassifier.lastStroke
            if (last != null) {
                val icon = when (last.stroke) {
                    PadelStroke.SMASH -> "⚡"
                    PadelStroke.BANDEJA -> "🌪️"
                    PadelStroke.VIBORA -> "🔥"
                    PadelStroke.DRIVE -> "🎯"
                    PadelStroke.REVES -> "🔄"
                    PadelStroke.VOLEA -> "🛡️"
                    PadelStroke.GLOBO -> "🎈"
                }
                Row(
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .background(PadelBloxColors.bgCard)
                        .border(1.dp, PadelBloxColors.neonVolt.copy(alpha = 0.3f), RoundedCornerShape(8.dp))
                        .padding(horizontal = 4.dp, vertical = 2.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(text = icon, fontSize = 6.5.sp)
                    Spacer(modifier = Modifier.width(2.dp))
                    Text(
                        text = "${last.stroke.label.take(3)} ${last.speedKmh.toInt()}k",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.neonVolt
                    )
                }
            } else {
                Text(
                    text = "${motionClassifier.totalStrokes} golpes",
                    fontSize = 7.5.sp,
                    fontWeight = FontWeight.Bold,
                    color = PadelBloxColors.textMuted,
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .background(PadelBloxColors.bgCard)
                        .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(8.dp))
                        .padding(horizontal = 4.dp, vertical = 2.dp)
                )
            }
        }
    }
}
