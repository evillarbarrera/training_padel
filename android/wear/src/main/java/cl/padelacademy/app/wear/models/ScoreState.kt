package cl.padelacademy.app.wear.models

data class ScoreState(
    val pointsT1: Int = 0,
    val pointsT2: Int = 0,
    val gamesT1: List<Int> = listOf(0),
    val gamesT2: List<Int> = listOf(0),
    val currentSet: Int = 0,
    val isGoldenPoint: Boolean = false,
    val isTieBreak: Boolean = false,
    val isBreakPoint: Boolean = false,
    val isSetPoint: Boolean = false,
    val isMatchPoint: Boolean = false,
    val servingTeam: Int = 1,
    val serveSide: String = "Derecha",
    val matchWinner: Int? = null
)
