package cl.padelacademy.app.wear.ui.screens

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.draw.scale
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Text
import cl.padelacademy.app.wear.theme.PadelBloxColors
import kotlinx.coroutines.delay

@Composable
fun PadelBall(
    modifier: Modifier = Modifier,
    sizeDp: Int = 40
) {
    val infiniteTransition = rememberInfiniteTransition(label = "PadelBallAnim")

    val rotation by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 2400, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "Rotation"
    )

    val bounceOffset by infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = -6f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1100, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "Bounce"
    )

    val shadowScale by infiniteTransition.animateFloat(
        initialValue = 1.0f,
        targetValue = 0.65f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1100, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "Shadow"
    )

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = modifier
    ) {
        Box(
            modifier = Modifier
                .offset(y = bounceOffset.dp)
                .size(sizeDp.dp),
            contentAlignment = Alignment.Center
        ) {
            // 1. Resplandor exterior de la pelota
            Canvas(modifier = Modifier.fillMaxSize()) {
                drawCircle(
                    brush = Brush.radialGradient(
                        colors = listOf(
                            Color(0xFFCCFF00).copy(alpha = 0.40f),
                            Color(0xFF10B981).copy(alpha = 0.15f),
                            Color.Transparent
                        ),
                        center = center,
                        radius = size.minDimension / 1.4f
                    )
                )
            }

            // 2. Cuerpo de la Pelota de Pádel con degradado 3D
            Canvas(
                modifier = Modifier
                    .size((sizeDp * 0.85).dp)
                    .clip(CircleShape)
            ) {
                val radius = size.minDimension / 2f
                val lightOffset = Offset(size.width * 0.35f, size.height * 0.35f)

                // Pelota con sombreado esférico realista de pádel
                drawCircle(
                    brush = Brush.radialGradient(
                        colors = listOf(
                            Color(0xFFFACC15), // Amarillo brillante
                            Color(0xFFCCFF00), // Volt Neon central
                            Color(0xFF84CC16), // Verde lima medio
                            Color(0xFF4D7C0F)  // Sombra profunda
                        ),
                        center = lightOffset,
                        radius = radius * 1.35f
                    ),
                    radius = radius,
                    center = center
                )
            }

            // 3. Costuras blancas curvadas características de la pelota de pádel
            Canvas(
                modifier = Modifier
                    .size((sizeDp * 0.85).dp)
                    .rotate(rotation)
            ) {
                val seamInset = size.width * 0.12f
                val seamRect = Size(size.width - seamInset * 2, size.height - seamInset * 2)
                val strokeWidth = 2.5.dp.toPx()

                // Costura arco 1
                drawArc(
                    color = Color.White.copy(alpha = 0.95f),
                    startAngle = 205f,
                    sweepAngle = 130f,
                    useCenter = false,
                    topLeft = Offset(seamInset, seamInset),
                    size = seamRect,
                    style = Stroke(width = strokeWidth, cap = StrokeCap.Round)
                )

                // Costura arco 2
                drawArc(
                    color = Color.White.copy(alpha = 0.95f),
                    startAngle = 25f,
                    sweepAngle = 130f,
                    useCenter = false,
                    topLeft = Offset(seamInset, seamInset),
                    size = seamRect,
                    style = Stroke(width = strokeWidth, cap = StrokeCap.Round)
                )
            }
        }

        // Sombra dinámica bajo la pelota
        Canvas(
            modifier = Modifier
                .width((sizeDp * 0.55).dp)
                .height(4.dp)
                .scale(shadowScale)
        ) {
            drawOval(
                color = Color.Black.copy(alpha = 0.50f)
            )
        }
    }
}

@Composable
fun SplashScreen(
    onFinished: () -> Unit
) {
    LaunchedEffect(Unit) {
        delay(1800)
        onFinished()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(PadelBloxColors.bgDark),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // 1. Pelota de Pádel 3D Animada
            PadelBall(sizeDp = 42)

            Spacer(modifier = Modifier.height(7.dp))

            // 2. Marca PadelBlox
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = "Padel",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Black,
                    color = PadelBloxColors.textPrimary
                )
                Text(
                    text = "Blox",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Black,
                    color = PadelBloxColors.neonVolt
                )
            }

            Spacer(modifier = Modifier.height(1.dp))

            Text(
                text = "MATCH & MOTION",
                fontSize = 8.sp,
                fontWeight = FontWeight.ExtraBold,
                letterSpacing = 1.2.sp,
                color = PadelBloxColors.neonVolt
            )

            Spacer(modifier = Modifier.height(6.dp))

            // 3. Barra de Carga Volt Neon
            Box(
                modifier = Modifier
                    .width(68.dp)
                    .height(2.5.dp)
                    .clip(RoundedCornerShape(2.dp))
                    .background(Color.White.copy(alpha = 0.12f))
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth(0.9f)
                        .height(2.5.dp)
                        .background(PadelBloxColors.neonGradient)
                )
            }
        }
    }
}
