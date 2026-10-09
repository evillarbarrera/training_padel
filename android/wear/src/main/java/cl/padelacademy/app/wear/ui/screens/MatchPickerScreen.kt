package cl.padelacademy.app.wear.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
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
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.foundation.lazy.AutoCenteringParams
import androidx.wear.compose.foundation.lazy.ScalingLazyColumn
import androidx.wear.compose.foundation.lazy.ScalingLazyColumnDefaults
import androidx.wear.compose.foundation.lazy.items
import androidx.wear.compose.foundation.lazy.rememberScalingLazyListState
import androidx.wear.compose.material.ChipDefaults
import androidx.wear.compose.material.CompactChip
import androidx.wear.compose.material.Text
import cl.padelacademy.app.wear.models.ScheduledMatch
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.theme.PadelBloxColors

@Composable
fun MatchPickerScreen(
    sessionManager: WearSessionManager,
    onMatchSelected: (ScheduledMatch) -> Unit,
    onClose: () -> Unit
) {
    val listState = rememberScalingLazyListState()

    ScalingLazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark),
        state = listState,
        autoCentering = AutoCenteringParams(itemIndex = 1),
        scalingParams = ScalingLazyColumnDefaults.scalingParams(
            edgeScale = 0.85f,
            edgeAlpha = 1.0f,
            minTransitionArea = 0.15f,
            maxTransitionArea = 0.25f
        ),
        contentPadding = PaddingValues(top = 20.dp, bottom = 28.dp, start = 8.dp, end = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item {
            Text(
                text = "MIS SESIONES",
                fontSize = 11.5.sp,
                fontWeight = FontWeight.Black,
                color = PadelBloxColors.neonVolt,
                modifier = Modifier.padding(bottom = 4.dp)
            )
        }

        if (sessionManager.scheduledMatches.isEmpty()) {
            item {
                Text(
                    text = "No hay partidos ni entrenamientos hoy.\nPuedes iniciar una sesión libre.",
                    fontSize = 9.sp,
                    color = PadelBloxColors.textSecondary,
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 8.dp)
                )
            }
        }

        items(sessionManager.scheduledMatches) { match ->
            val isSelected = sessionManager.selectedMatch?.id == match.id
            val isTraining = match.esEntrenamiento
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 2.dp)
                    .clip(RoundedCornerShape(10.dp))
                    .background(PadelBloxColors.bgCard)
                    .border(
                        width = if (isSelected) 2.dp else 1.dp,
                        color = if (isSelected) (if (isTraining) PadelBloxColors.neonVolt else PadelBloxColors.cyberCyan) else PadelBloxColors.borderSubtle,
                        shape = RoundedCornerShape(10.dp)
                    )
                    .clickable {
                        sessionManager.selectedMatch = match
                        onMatchSelected(match)
                    }
                    .padding(8.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = if (isTraining) "🏋️ ${match.canchaNombre}" else match.canchaNombre,
                        fontSize = 10.5.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = if (isSelected) (if (isTraining) PadelBloxColors.neonVolt else PadelBloxColors.cyberCyan) else PadelBloxColors.textPrimary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Text(
                        text = match.horarioTexto,
                        fontSize = 8.sp,
                        fontWeight = FontWeight.Bold,
                        color = if (isTraining) PadelBloxColors.neonVolt else PadelBloxColors.cyberCyan
                    )
                }

                Text(
                    text = "${match.tipoLabel.uppercase()} · ${match.clubNombre}",
                    fontSize = 8.sp,
                    fontWeight = FontWeight.Medium,
                    color = PadelBloxColors.textSecondary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )

                Spacer(modifier = Modifier.height(2.dp))

                Text(
                    text = if (isTraining) match.pareja1 else "${match.pareja1} vs ${match.pareja2}",
                    fontSize = 8.sp,
                    fontWeight = FontWeight.Normal,
                    color = PadelBloxColors.textPrimary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }
        }

        item {
            CompactChip(
                modifier = Modifier
                    .fillMaxWidth(0.85f)
                    .padding(vertical = 4.dp),
                onClick = { onClose() },
                colors = ChipDefaults.chipColors(
                    backgroundColor = PadelBloxColors.bgCard,
                    contentColor = PadelBloxColors.textSecondary
                ),
                label = {
                    Text(
                        text = "Cerrar",
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = PadelBloxColors.textSecondary
                    )
                }
            )
        }
    }
}
