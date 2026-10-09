package cl.padelacademy.app.wear.models

import java.util.UUID

enum class PadelStroke(val label: String) {
    SMASH("Smash"),
    BANDEJA("Bandeja"),
    VIBORA("Víbora"),
    DRIVE("Drive"),
    REVES("Revés"),
    VOLEA("Volea"),
    GLOBO("Globo")
}

data class StrokeEvent(
    val id: String = UUID.randomUUID().toString(),
    val stroke: PadelStroke,
    val speedKmh: Double,
    val peakG: Double,
    val timestamp: Long = System.currentTimeMillis()
)
