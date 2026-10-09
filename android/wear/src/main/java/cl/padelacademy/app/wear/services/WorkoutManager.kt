package cl.padelacademy.app.wear.services

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableDoubleStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlin.random.Random

class WorkoutManager(private val context: Context) : SensorEventListener {

    private val sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as? SensorManager
    private val heartRateSensor = sensorManager?.getDefaultSensor(Sensor.TYPE_HEART_RATE)

    var isRunning by mutableStateOf(false)
        private set

    var heartRate by mutableDoubleStateOf(0.0)
        private set

    var avgHeartRate by mutableDoubleStateOf(0.0)
        private set

    var maxHeartRate by mutableDoubleStateOf(0.0)
        private set

    var activeEnergy by mutableDoubleStateOf(0.0) // kcal
        private set

    var elapsedTime by mutableLongStateOf(0L) // segundos
        private set

    val heartRateHistory = mutableStateListOf<Double>()

    private var timerJob: Job? = null
    private val scope = CoroutineScope(Dispatchers.Main + Job())

    private var hrSum = 0.0
    private var hrCount = 0

    fun startWorkout() {
        elapsedTime = 0L
        heartRate = if (heartRateSensor != null) 0.0 else 138.0
        avgHeartRate = if (heartRateSensor != null) 0.0 else 135.0
        maxHeartRate = if (heartRateSensor != null) 0.0 else 152.0
        activeEnergy = 0.0
        hrSum = 0.0
        hrCount = 0
        heartRateHistory.clear()
        isRunning = true

        heartRateSensor?.let {
            sensorManager?.registerListener(this, it, SensorManager.SENSOR_DELAY_NORMAL)
        }

        timerJob?.cancel()
        timerJob = scope.launch {
            while (isActive && isRunning) {
                delay(1000)
                elapsedTime += 1

                if (heartRateSensor == null) {
                    // Simulación biomecánica para emuladores
                    activeEnergy += 0.15 // ~9 kcal/min de pádel
                    val variation = Random.nextDouble(-2.0, 2.0)
                    val simHr = (heartRate + variation).coerceIn(125.0, 165.0)
                    heartRate = simHr
                    hrSum += simHr
                    hrCount += 1
                    avgHeartRate = hrSum / hrCount
                    if (simHr > maxHeartRate) {
                        maxHeartRate = simHr
                    }
                    heartRateHistory.add(simHr)
                    if (heartRateHistory.size > 60) {
                        heartRateHistory.removeAt(0)
                    }
                } else {
                    // Cálculo de calorías activas basado en frecuencia cardíaca
                    val intensity = (heartRate / 140.0).coerceIn(0.5, 1.8)
                    activeEnergy += (0.15 * intensity)
                }
            }
        }
    }

    fun stopWorkout(onFinished: (() -> Unit)? = null) {
        timerJob?.cancel()
        timerJob = null
        sensorManager?.unregisterListener(this)
        isRunning = false
        onFinished?.invoke()
    }

    override fun onSensorChanged(event: SensorEvent?) {
        if (event == null || !isRunning) return

        if (event.sensor.type == Sensor.TYPE_HEART_RATE) {
            val hr = event.values[0].toDouble()
            if (hr > 30.0) {
                heartRate = hr
                hrSum += hr
                hrCount += 1
                avgHeartRate = hrSum / hrCount
                if (hr > maxHeartRate) {
                    maxHeartRate = hr
                }
                heartRateHistory.add(hr)
                if (heartRateHistory.size > 60) {
                    heartRateHistory.removeAt(0)
                }
            }
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}
}
