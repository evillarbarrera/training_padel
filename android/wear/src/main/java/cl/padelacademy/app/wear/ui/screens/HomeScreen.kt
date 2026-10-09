package cl.padelacademy.app.wear.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
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
import androidx.wear.compose.material.CompactChip
import androidx.wear.compose.material.Switch
import androidx.wear.compose.material.SwitchDefaults
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.ToggleChip
import androidx.wear.compose.material.ToggleChipDefaults
import cl.padelacademy.app.wear.models.ScheduledMatch
import cl.padelacademy.app.wear.services.MatchScoreManager
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.theme.PadelBloxColors

@Composable
fun HomeScreen(
    scoreManager: MatchScoreManager,
    motionClassifier: MotionClassifier,
    sessionManager: WearSessionManager,
    isRightHanded: Boolean,
    onToggleHand: () -> Unit,
    isGoldenPoint: Boolean,
    onToggleGoldenPoint: () -> Unit,
    onStartMatch: (ScheduledMatch?) -> Unit,
    onOpenMatchPicker: () -> Unit
) {
    val listState = rememberScalingLazyListState()

    ScalingLazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark),
        state = listState,
        autoCentering = AutoCenteringParams(itemIndex = 1),
        scalingParams = ScalingLazyColumnDefaults.scalingParams(
            edgeScale = 0.90f,
            edgeAlpha = 1.0f,
            minTransitionArea = 0.12f,
            maxTransitionArea = 0.22f
        ),
        contentPadding = PaddingValues(top = 52.dp, bottom = 52.dp, start = 12.dp, end = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // 1. Tarjeta Ergonómica de Cancha / Partido / Entrenamiento (100% visible bajo TimeText)
        item {
            val match = sessionManager.selectedMatch
            if (match != null) {
                val isTraining = match.esEntrenamiento
                Column(
                    modifier = Modifier
                        .fillMaxWidth(0.90f)
                        .clip(RoundedCornerShape(16.dp))
                        .background(PadelBloxColors.bgCard)
                        .border(
                            1.dp,
                            if (isTraining) PadelBloxColors.neonVolt.copy(alpha = 0.5f) else PadelBloxColors.cyberCyan.copy(alpha = 0.45f),
                            RoundedCornerShape(16.dp)
                        )
                        .clickable { onOpenMatchPicker() }
                        .padding(horizontal = 9.dp, vertical = 6.dp)
                ) {
                    // Estado y Horario
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Box(
                                modifier = Modifier
                                    .size(5.dp)
                                    .background(
                                        if (sessionManager.isReachable) PadelBloxColors.emeraldGreen else PadelBloxColors.textMuted,
                                        CircleShape
                                    )
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Text(
                                text = if (isTraining) "🏋️ ${match.tipoLabel.uppercase()}" else match.tipoLabel.uppercase(),
                                fontSize = 7.5.sp,
                                fontWeight = FontWeight.Black,
                                color = PadelBloxColors.neonVolt
                            )
                        }

                        Text(
                            text = match.horarioTexto,
                            fontSize = 8.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (isTraining) PadelBloxColors.neonVolt else PadelBloxColors.cyberCyan
                        )
                    }

                    Spacer(modifier = Modifier.height(2.dp))

                    Text(
                        text = if (isTraining) "🎾 ${match.canchaNombre}" else "🏟️ ${match.canchaNombre}",
                        fontSize = 11.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.textPrimary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )

                    Text(
                        text = if (isTraining) "${match.clubNombre} · ${match.pareja1}" else "${match.clubNombre} · ${match.pareja1} vs ${match.pareja2}",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Medium,
                        color = PadelBloxColors.textSecondary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }
            } else {
                Row(
                    modifier = Modifier
                        .fillMaxWidth(0.86f)
                        .clip(RoundedCornerShape(14.dp))
                        .background(PadelBloxColors.bgCard)
                        .border(1.dp, PadelBloxColors.borderSubtle, RoundedCornerShape(14.dp))
                        .padding(horizontal = 10.dp, vertical = 6.dp),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(text = "🎾 ", fontSize = 10.sp)
                    Text(
                        text = "Partido / Entrenamiento Libre",
                        fontSize = 9.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = PadelBloxColors.textPrimary
                    )
                }
            }
        }

        // 2. Botón Principal "JUGAR PARTIDO" o "INICIAR ENTRENAMIENTO"
        item {
            val match = sessionManager.selectedMatch
            val isTraining = match?.esEntrenamiento == true
            val buttonText = when {
                isTraining -> "ENTRENAR"
                match != null -> "JUGAR PARTIDO"
                else -> "INICIAR PARTIDO"
            }
            val buttonIcon = if (isTraining) "⚡" else "▶"

            Chip(
                modifier = Modifier
                    .fillMaxWidth(0.88f)
                    .height(42.dp)
                    .padding(vertical = 2.dp),
                onClick = {
                    onStartMatch(sessionManager.selectedMatch)
                },
                colors = ChipDefaults.chipColors(
                    backgroundColor = PadelBloxColors.neonVolt,
                    contentColor = Color.Black
                ),
                shape = RoundedCornerShape(21.dp),
                label = {
                    Text(
                        text = buttonText,
                        fontSize = 11.5.sp,
                        fontWeight = FontWeight.Black,
                        color = Color.Black,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.fillMaxWidth()
                    )
                },
                icon = {
                    Text(text = buttonIcon, fontSize = 11.5.sp, color = Color.Black)
                }
            )
        }

        // 3. Botón Secundario: Cambiar Cancha / Sesión
        item {
            val isTraining = sessionManager.selectedMatch?.esEntrenamiento == true
            CompactChip(
                modifier = Modifier
                    .fillMaxWidth(0.80f)
                    .padding(vertical = 1.dp),
                onClick = { onOpenMatchPicker() },
                colors = ChipDefaults.chipColors(
                    backgroundColor = PadelBloxColors.bgCard,
                    contentColor = PadelBloxColors.cyberCyan
                ),
                border = ChipDefaults.chipBorder(
                    borderStroke = androidx.compose.foundation.BorderStroke(1.dp, PadelBloxColors.cyberCyan.copy(alpha = 0.35f))
                ),
                shape = RoundedCornerShape(14.dp),
                label = {
                    Text(
                        text = if (sessionManager.selectedMatch != null) "Cambiar Sesión" else "Seleccionar Sesión",
                        fontSize = 8.5.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.cyberCyan,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                icon = {
                    Text(text = "🔄", fontSize = 8.sp)
                }
            )
        }

        // 4. Separador Ajustes Rápidos
        item {
            Text(
                text = "AJUSTES",
                fontSize = 7.5.sp,
                fontWeight = FontWeight.ExtraBold,
                color = PadelBloxColors.textMuted,
                letterSpacing = 0.8.sp,
                modifier = Modifier.padding(top = 4.dp, bottom = 1.dp)
            )
        }

        // 5. Ajustes: Mano Pala
        item {
            ToggleChip(
                modifier = Modifier
                    .fillMaxWidth(0.86f)
                    .padding(vertical = 1.dp),
                checked = isRightHanded,
                onCheckedChange = { onToggleHand() },
                colors = ToggleChipDefaults.toggleChipColors(
                    checkedStartBackgroundColor = PadelBloxColors.bgCard,
                    checkedEndBackgroundColor = PadelBloxColors.bgCard,
                    uncheckedStartBackgroundColor = PadelBloxColors.bgCard,
                    uncheckedEndBackgroundColor = PadelBloxColors.bgCard,
                    checkedContentColor = PadelBloxColors.textPrimary,
                    uncheckedContentColor = PadelBloxColors.textSecondary
                ),
                shape = RoundedCornerShape(14.dp),
                label = {
                    Text(
                        text = "Mano pala",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Medium,
                        color = PadelBloxColors.textPrimary
                    )
                },
                secondaryLabel = {
                    Text(
                        text = if (isRightHanded) "Diestro" else "Zurdo",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.neonVolt
                    )
                },
                toggleControl = {
                    Switch(
                        checked = isRightHanded,
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = PadelBloxColors.neonVolt,
                            checkedTrackColor = PadelBloxColors.neonVolt.copy(alpha = 0.45f)
                        )
                    )
                }
            )
        }

        // 6. Ajustes: Punto de Oro
        item {
            ToggleChip(
                modifier = Modifier
                    .fillMaxWidth(0.86f)
                    .padding(vertical = 1.dp),
                checked = isGoldenPoint,
                onCheckedChange = { onToggleGoldenPoint() },
                colors = ToggleChipDefaults.toggleChipColors(
                    checkedStartBackgroundColor = PadelBloxColors.bgCard,
                    checkedEndBackgroundColor = PadelBloxColors.bgCard,
                    uncheckedStartBackgroundColor = PadelBloxColors.bgCard,
                    uncheckedEndBackgroundColor = PadelBloxColors.bgCard,
                    checkedContentColor = PadelBloxColors.textPrimary,
                    uncheckedContentColor = PadelBloxColors.textSecondary
                ),
                shape = RoundedCornerShape(14.dp),
                label = {
                    Text(
                        text = "Punto de Oro",
                        fontSize = 9.sp,
                        fontWeight = FontWeight.Medium,
                        color = PadelBloxColors.textPrimary
                    )
                },
                secondaryLabel = {
                    Text(
                        text = if (isGoldenPoint) "Activado" else "Ventaja",
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = if (isGoldenPoint) PadelBloxColors.goldenAmber else PadelBloxColors.textMuted
                    )
                },
                toggleControl = {
                    Switch(
                        checked = isGoldenPoint,
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = PadelBloxColors.goldenAmber,
                            checkedTrackColor = PadelBloxColors.goldenAmber.copy(alpha = 0.45f)
                        )
                    )
                }
            )
        }

        // 7. Micro Banner Récord Personal
        if (motionClassifier.maxSpeedKmh > 0) {
            item {
                Row(
                    modifier = Modifier
                        .fillMaxWidth(0.78f)
                        .clip(RoundedCornerShape(10.dp))
                        .background(PadelBloxColors.bgCard)
                        .padding(horizontal = 8.dp, vertical = 3.dp),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "⚡ Récord Smash: ${motionClassifier.maxSpeedKmh.toInt()} km/h",
                        fontSize = 8.5.sp,
                        fontWeight = FontWeight.Black,
                        color = PadelBloxColors.neonVolt
                    )
                }
            }
        }
    }
}
