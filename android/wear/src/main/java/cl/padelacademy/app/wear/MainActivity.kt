package cl.padelacademy.app.wear

import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.content.ContextCompat
import cl.padelacademy.app.wear.services.MatchScoreManager
import cl.padelacademy.app.wear.services.MotionClassifier
import cl.padelacademy.app.wear.services.WearSessionManager
import cl.padelacademy.app.wear.services.WorkoutManager
import cl.padelacademy.app.wear.theme.PadelBloxWearTheme
import cl.padelacademy.app.wear.ui.PadelBloxWearApp

class MainActivity : ComponentActivity() {

    private lateinit var scoreManager: MatchScoreManager
    private lateinit var motionClassifier: MotionClassifier
    private lateinit var workoutManager: WorkoutManager
    private lateinit var sessionManager: WearSessionManager

    private val permissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        // Permiso de sensores corporales procesado
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Mantener la pantalla activa durante el uso de la app
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        scoreManager = MatchScoreManager(this)
        motionClassifier = MotionClassifier(this)
        workoutManager = WorkoutManager(this)
        sessionManager = WearSessionManager.getInstance(this)

        requestSensorPermissions()

        setContent {
            PadelBloxWearTheme {
                PadelBloxWearApp(
                    scoreManager = scoreManager,
                    motionClassifier = motionClassifier,
                    workoutManager = workoutManager,
                    sessionManager = sessionManager
                )
            }
        }
    }

    private fun requestSensorPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.BODY_SENSORS) != PackageManager.PERMISSION_GRANTED) {
                permissionLauncher.launch(Manifest.permission.BODY_SENSORS)
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        scoreManager.onDestroy()
        motionClassifier.stopTracking()
        workoutManager.stopWorkout()
    }
}
