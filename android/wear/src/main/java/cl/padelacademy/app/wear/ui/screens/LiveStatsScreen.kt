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
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.foundation.lazy.AutoCenteringParams
import androidx.wear.compose.foundation.lazy.ScalingLazyColumn
import androidx.wear.compose.foundation.lazy.ScalingLazyColumnDefaults
import androidx.wear.compose.foundation.lazy.rememberScalingLazyListState
import androidx.wear.compose.material.Text
import cl.padelacademy.app.wear.models.PadelStroke
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WorkoutManager
import cl.padelacademy.app.wear.theme.PadelBloxColors

@Composable
fun LiveStatsScreen(
    motionClassifier: MotionClassifier,
    workoutManager: WorkoutManager
) {
    val listState = rememberScalingLazyListState()

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
        contentPadding = PaddingValues(top = 34.dp, bottom = 40.dp, start = 12.dp, end = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // 1. Tarjeta Velocidad Máxima y Calorías (Alineada dentro de zona visible)
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth(0.92f)
                    .clip(RoundedCornerShape(16.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(16.dp))
                    .padding(horizontal = 10.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(horizontalAlignment = Alignment.Start) {
                    Text(
                        text = "⚡ VEL. MÁX",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${motionClassifier.maxSpeedKmh.toInt()} km/h",
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.neonVolt
                    )
                }

                Column(horizontalAlignment = Alignment.End) {
                    Text(
                        text = "🔥 CALORÍAS",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${workoutManager.activeEnergy.toInt()} kcal",
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.roseRed
                    )
                }
            }
        }

        // 2. Desglose de Golpes
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
                        text = "DISTRIBUCIÓN DE GOLPES",
                        fontSize = 7.5.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.textSecondary
                    )
                    Text(
                        text = "${motionClassifier.totalStrokes}",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.neonVolt
                    )
                }

                Spacer(modifier = Modifier.height(3.dp))

                PadelStroke.entries.forEach { stroke ->
                    val count = motionClassifier.strokeCounts[stroke] ?: 0
                    val icon = when (stroke) {
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
                            .fillMaxWidth()
                            .padding(vertical = 1.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(text = icon, fontSize = 8.sp)
                            Text(
                                text = " ${stroke.label}",
                                fontSize = 9.sp,
                                fontWeight = FontWeight.Medium,
                                color = PadelBloxColors.textPrimary
                            )
                        }
                        Text(
                            text = "$count",
                            fontSize = 9.5.sp,
                            fontWeight = FontWeight.ExtraBold,
                            color = if (count > 0) PadelBloxColors.neonVolt else PadelBloxColors.textMuted
                        )
                    }
                }
            }
        }
    }
}
