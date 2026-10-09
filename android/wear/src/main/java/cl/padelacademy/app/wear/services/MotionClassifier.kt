package cl.padelacademy.app.wear.services

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableDoubleStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import cl.padelacademy.app.wear.models.PadelStroke
import cl.padelacademy.app.wear.models.StrokeEvent
import kotlin.math.abs
import kotlin.math.min
import kotlin.math.max
import kotlin.math.sqrt

class MotionClassifier(private val context: Context) : SensorEventListener {

    private val sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as? SensorManager
    private val accelerometer = sensorManager?.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    private val gyroscope = sensorManager?.getDefaultSensor(Sensor.TYPE_GYROSCOPE)

    private val vibrator: Vibrator? by lazy {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
            vibratorManager?.defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
        }
    }

    var isRunning by mutableStateOf(false)
        private set

    var lastStroke by mutableStateOf<StrokeEvent?>(null)
        private set

    val strokeCounts = mutableStateMapOf<PadelStroke, Int>().apply {
        PadelStroke.entries.forEach { put(it, 0) }
    }

    var totalStrokes by mutableIntStateOf(0)
        private set

    var maxSpeedKmh by mutableDoubleStateOf(0.0)
        private set

    var avgSpeedKmh by mutableDoubleStateOf(0.0)
        private set

    val recentStrokes = mutableStateListOf<StrokeEvent>()

    var isRightHanded = true
    private var lastStrokeTime = 0L
    private var speedAccumulator = 0.0

    // Buffers de sensor en memoria
    private var lastAccX = 0f
    private var lastAccY = 0f
    private var lastAccZ = 0f

    private var lastGyroX = 0f
    private var lastGyroY = 0f
    private var lastGyroZ = 0f

    fun startTracking(rightHanded: Boolean = true) {
        this.isRightHanded = rightHanded
        resetStats()

        accelerometer?.let {
            sensorManager?.registerListener(this, it, SensorManager.SENSOR_DELAY_FASTEST)
        }
        gyroscope?.let {
            sensorManager?.registerListener(this, it, SensorManager.SENSOR_DELAY_FASTEST)
        }

        isRunning = true
    }

    fun stopTracking() {
        sensorManager?.unregisterListener(this)
        isRunning = false
    }

    fun resetStats() {
        totalStrokes = 0
        maxSpeedKmh = 0.0
        avgSpeedKmh = 0.0
        speedAccumulator = 0.0
        lastStroke = null
        recentStrokes.clear()
        PadelStroke.entries.forEach { strokeCounts[it] = 0 }
    }

    override fun onSensorChanged(event: SensorEvent?) {
        if (event == null || !isRunning) return

        when (event.sensor.type) {
            Sensor.TYPE_ACCELEROMETER -> {
                lastAccX = event.values[0]
                lastAccY = event.values[1]
                lastAccZ = event.values[2]
            }
            Sensor.TYPE_GYROSCOPE -> {
                lastGyroX = event.values[0]
                lastGyroY = event.values[1]
                lastGyroZ = event.values[2]

                // Procesar movimiento coordinado tras lectura de giroscopio
                processMotionData()
            }
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}

    private fun processMotionData() {
        // Aceleración en Gs (dividido por gravedad 9.80665 m/s^2)
        val gX = (lastAccX / 9.80665f).toDouble()
        val gY = (lastAccY / 9.80665f).toDouble()
        val gZ = (lastAccZ / 9.80665f).toDouble()

        val accMagnitude = sqrt(gX * gX + gY * gY + gZ * gZ)
        val rotMagnitude = sqrt(
            (lastGyroX * lastGyroX + lastGyroY * lastGyroY + lastGyroZ * lastGyroZ).toDouble()
        )

        // Umbral de impacto de golpe de pádel: mínimo 3.8G y rotación angular > 6.0 rad/s
        if (accMagnitude <= 3.8 || rotMagnitude <= 6.0) return

        val now = System.currentTimeMillis()
        // Ventana de refracción de 350 ms para evitar doble conteo de un mismo swing
        if (now - lastStrokeTime < 350) return
        lastStrokeTime = now

        // Estimación de velocidad tangencial de la pala: v = ω * r (radio estimado brazo + pala = 0.85m)
        val estimatedRadius = 0.85
        val rawSpeedKmh = (rotMagnitude * estimatedRadius + accMagnitude * 1.8) * 3.6
        val speedKmh = min(max(rawSpeedKmh, 35.0), 165.0)

        val detectedStroke = classifyStroke(gY, gZ, lastGyroX.toDouble(), lastGyroY.toDouble(), lastGyroZ.toDouble(), speedKmh)

        totalStrokes += 1
        strokeCounts[detectedStroke] = (strokeCounts[detectedStroke] ?: 0) + 1
        speedAccumulator += speedKmh
        avgSpeedKmh = speedAccumulator / totalStrokes.toDouble()
        if (speedKmh > maxSpeedKmh) {
            maxSpeedKmh = speedKmh
        }

        val event = StrokeEvent(
            stroke = detectedStroke,
            speedKmh = speedKmh,
            peakG = accMagnitude,
            timestamp = now
        )
        lastStroke = event
        recentStrokes.add(0, event)
        if (recentStrokes.size > 30) {
            recentStrokes.removeAt(recentStrokes.size - 1)
        }

        triggerStrokeHaptic(detectedStroke)
    }

    private fun classifyStroke(
        yAcc: Double,
        zAcc: Double,
        xRot: Double,
        yRot: Double,
        zRotRaw: Double,
        speedKmh: Double
    ): PadelStroke {
        val zRot = if (isRightHanded) zRotRaw else -zRotRaw

        // 1. Smash / Remate: Gran aceleración descendente + pronación rápida + alta velocidad
        if ((yAcc > 3.0 || zAcc > 4.0) && speedKmh > 85.0 && xRot < -4.0) {
            return PadelStroke.SMASH
        }

        // 2. Bandeja / Víbora: Swing alto cortado con rotación lateral pronunciada
        if (yAcc > 2.0 && abs(zRot) > 5.0) {
            return if (zRot > 6.0) PadelStroke.VIBORA else PadelStroke.BANDEJA
        }

        // 3. Globo: Impulso ascendente suave con bajo pico de velocidad
        if (yAcc > 2.5 && speedKmh < 65.0 && xRot > 2.0) {
            return PadelStroke.GLOBO
        }

        // 4. Voleas: Aceleración frontal brusca sin arco de rotación largo
        if (abs(zAcc) > 3.5 && abs(yRot) < 5.0 && speedKmh < 80.0) {
            return PadelStroke.VOLEA
        }

        // 5. Drive vs Revés: Clasificación por dirección angular de swing horizontal
        return if (zRot > 0) PadelStroke.DRIVE else PadelStroke.REVES
    }

    private fun triggerStrokeHaptic(stroke: PadelStroke) {
        val vib = vibrator ?: return
        if (!vib.hasVibrator()) return

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val effect = if (stroke == PadelStroke.SMASH) {
                VibrationEffect.createWaveform(longArrayOf(0, 60, 40, 80), intArrayOf(0, 220, 0, 255), -1)
            } else {
                VibrationEffect.createOneShot(30, VibrationEffect.DEFAULT_AMPLITUDE)
            }
            vib.vibrate(effect)
        } else {
            @Suppress("DEPRECATION")
            vib.vibrate(40)
        }
    }
}
