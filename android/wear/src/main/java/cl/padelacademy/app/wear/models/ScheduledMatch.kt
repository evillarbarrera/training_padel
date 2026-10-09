package cl.padelacademy.app.wear.models

import java.util.UUID

/**
 * Modelo de Partido / Reserva Programada para Wear OS
 */
data class ScheduledMatch(
    val id: String = UUID.randomUUID().toString(),
    val reservaId: Int? = null,
    val ligaPartidoId: Int? = null,
    val tipoLabel: String = "Cancha Reservada",
    val tipoActividad: String = "partido", // 'partido', 'entrenamiento', 'clase', 'libre'
    val entrenadorNombre: String? = null,
    val clubNombre: String = "PadelBlox Club",
    val canchaNombre: String = "Cancha 3 Panorámica",
    val canchaTipo: String = "Cristal Pro",
    val horarioTexto: String = "19:30 - 21:00",
    val pareja1: String = "Mi Pareja",
    val pareja2: String = "Pareja Rival",
    val puntoOro: Boolean = true,
    val sets: Int = 3,
    val esHoy: Boolean = true
) {
    val esEntrenamiento: Boolean
        get() = tipoActividad.equals("entrenamiento", ignoreCase = true) ||
                tipoActividad.equals("clase", ignoreCase = true) ||
                tipoLabel.contains("entrenamiento", ignoreCase = true) ||
                tipoLabel.contains("clase", ignoreCase = true)

    companion object {
        val sampleDefault = ScheduledMatch(
            id = "res_sample_1",
            reservaId = 101,
            ligaPartidoId = null,
            tipoLabel = "Cancha Reservada",
            clubNombre = "Club Padel Center",
            canchaNombre = "Cancha 2 Cristal",
            canchaTipo = "Panorámica",
            horarioTexto = "Hoy 19:30 - 21:00",
            pareja1 = "Emmanuel Villar / Partner",
            pareja2 = "Lucas / Diego",
            puntoOro = true,
            sets = 3,
            esHoy = true
        )
    }
}
