package cl.padelacademy.app.wear.theme

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.wear.compose.material.Colors
import androidx.wear.compose.material.MaterialTheme

object PadelBloxColors {
    // Canvas & Backgrounds (from mobile app #080c14 & #1e293b)
    val bgDark = Color(0xFF080C14)
    val bgCard = Color(0xFF1E293B)
    val bgCardSecondary = Color(0x14FFFFFF)
    val borderSubtle = Color(0x14FFFFFF)

    // Brand & Accent Colors
    val neonVolt = Color(0xFFCCFF00)      // #ccff00
    val cyberCyan = Color(0xFF06B6D4)     // #06b6d4
    val sunsetOrange = Color(0xFFF97316)  // #f97316
    val emeraldGreen = Color(0xFF10B981)  // #10b981
    val roseRed = Color(0xFFEF4444)       // #ef4444
    val goldenAmber = Color(0xFFF59E0B)   // #f59e0b

    // Typography & Neutrals
    val textPrimary = Color.White
    val textSecondary = Color(0xFF94A3B8)
    val textMuted = Color(0xFF64748B)

    // Gradients
    val neonGradient = Brush.linearGradient(listOf(neonVolt, emeraldGreen))
    val cyanGradient = Brush.linearGradient(listOf(cyberCyan, Color(0xFF078CA8)))
    val team1CardFill = Brush.verticalGradient(listOf(cyberCyan.copy(alpha = 0.18f), bgCard))
    val team2CardFill = Brush.verticalGradient(listOf(sunsetOrange.copy(alpha = 0.18f), bgCard))

    val wearColorPalette = Colors(
        primary = neonVolt,
        primaryVariant = emeraldGreen,
        secondary = cyberCyan,
        secondaryVariant = sunsetOrange,
        background = bgDark,
        surface = bgCard,
        error = roseRed,
        onPrimary = Color.Black,
        onSecondary = Color.Black,
        onBackground = textPrimary,
        onSurface = textPrimary,
        onError = Color.White
    )
}

@Composable
fun PadelBloxWearTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colors = PadelBloxColors.wearColorPalette,
        content = content
    )
}
