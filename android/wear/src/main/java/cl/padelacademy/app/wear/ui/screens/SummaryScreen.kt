package cl.padelacademy.app.wear.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.foundation.lazy.AutoCenteringParams
import androidx.wear.compose.foundation.lazy.ScalingLazyColumn
import androidx.wear.compose.foundation.lazy.ScalingLazyColumnDefaults
import androidx.wear.compose.foundation.lazy.rememberScalingLazyListState
import androidx.wear.compose.material.Chip
import androidx.wear.compose.material.ChipDefaults
import androidx.wear.compose.material.Text
import cl.padelacademy.app.wear.services.MatchScoreManager
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.services.WorkoutManager
import cl.padelacademy.app.wear.theme.PadelBloxColors
import java.util.Locale

@Composable
fun SummaryScreen(
    scoreManager: MatchScoreManager,
    motionClassifier: MotionClassifier,
    workoutManager: WorkoutManager,
    sessionManager: WearSessionManager,
    onFinishAndSync: () -> Unit
) {
    val listState = rememberScalingLazyListState()
    val isTraining = sessionManager.selectedMatch?.esEntrenamiento == true

    ScalingLazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark),
        state = listState,
        autoCentering = AutoCenteringParams(itemIndex = 0),
        scalingParams = ScalingLazyColumnDefaults.scalingParams(
            edgeScale = 0.88f,
            edgeAlpha = 1.0f,
            minTransitionArea = 0.12f,
            maxTransitionArea = 0.22f
        ),
        contentPadding = PaddingValues(top = 34.dp, bottom = 44.dp, start = 12.dp, end = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // 1. Cabecera de Estado (Ganador o Entrenamiento Completado)
        if (isTraining) {
            item {
                Row(
                    modifier = Modifier.padding(vertical = 1.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(text = "🏋️ ", fontSize = 10.sp)
                    Text(
                        text = "Entrenamiento Completado",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.neonVolt
                    )
                }
            }
        } else {
            val winner = scoreManager.state.matchWinner
            if (winner != null) {
                item {
                    val winnerName = if (winner == 1) scoreManager.team1Name else scoreManager.team2Name
                    Row(
                        modifier = Modifier.padding(vertical = 1.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(text = "🏆 ", fontSize = 10.sp)
                        Text(
                            text = "Ganador: $winnerName",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.ExtraBold,
                            color = PadelBloxColors.goldenAmber
                        )
                    }
                }
            }
        }

        // 2. Resumen Biométrico (Tiempo, FC Media, Calorías)
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth(0.92f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(16.dp))
                    .padding(horizontal = 8.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Tiempo
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = "Tiempo",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = formatTime(workoutManager.elapsedTime),
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.textPrimary
                    )
                }

                // FC Media
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = "FC Media",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${workoutManager.avgHeartRate.toInt()} bpm",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.roseRed
                    )
                }

                // Calorías
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = "Calorías",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${workoutManager.activeEnergy.toInt()}",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.sunsetOrange
                    )
                }
            }
        }

        // 3. Resumen de Golpes y Velocidad
        item {
            Column(
                modifier = Modifier
                    .fillMaxWidth(0.92f)
                    .padding(vertical = 2.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(16.dp))
                    .padding(horizontal = 9.dp, vertical = 6.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Total Golpes:",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Medium,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${motionClassifier.totalStrokes}",
                        fontSize = 10.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.textPrimary
                    )
                }

                Spacer(modifier = Modifier.height(2.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Récord Smash:",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Medium,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${motionClassifier.maxSpeedKmh.toInt()} km/h",
                        fontSize = 10.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.neonVolt
                    )
                }
            }
        }

        // 4. Botón Guardar y Sincronizar
        item {
            Chip(
                modifier = Modifier
                    .fillMaxWidth(0.90f)
                    .height(40.dp)
                    .padding(vertical = 2.dp),
                onClick = { onFinishAndSync() },
                colors = ChipDefaults.chipColors(
                    backgroundColor = PadelBloxColors.neonVolt,
                    contentColor = Color.Black
                ),
                shape = RoundedCornerShape(20.dp),
                label = {
                    Text(
                        text = "GUARDAR Y SINCRONIZAR",
                        fontSize = 8.5.sp,
                        fontWeight = FontWeight.Black,
                        color = Color.Black,
                        textAlign = TextAlign.Center,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.fillMaxWidth()
                    )
                },
                icon = {
                    Text(text = "💾", fontSize = 9.5.sp, color = Color.Black)
                }
            )
        }
    }
}

private fun formatTime(seconds: Long): String {
    val mins = seconds / 60
    val secs = seconds % 60
    return String.format(Locale.US, "%02d:%02d", mins, secs)
}
