# ⌚ PadelBlox Watch - App para Apple Watch (watchOS)

Aplicación nativa de Apple Watch para **PadelBlox**, diseñada para jugadores y entrenadores de pádel.

---

## 🚀 Características Principales

1. **Marcador Táctil & Háptico en Pista**:
   - Tanteador táctil de alto contraste (+1 al tocar el bloque del equipo).
   - Soporte para **Punto de Oro** (*Golden Point*), ventajas y Tie-break.
   - Asistente de **Saque**: indica qué pareja debe sacar y desde qué lado de la pista (Derecha/Izquierda).
   - Vibración háptica en la muñeca (*Taptic Engine*) en cada punto, juego y set.

2. **Detección y Clasificación Automática de Golpes (CoreMotion 100Hz)**:
   - **Smash / Remate x3 / x4**: Detección de aceleración vertical e impacto de alta velocidad.
   - **Bandeja / Víbora**: Identificación de swing aéreo cortado con rotación lateral.
   - **Drive (Derecha) y Revés**: Clasificación por sentido angular de swing horizontal.
   - **Voleas**: Detección de impacto rápido sin armado largo.
   - **Globos**: Trayectoria ascendente suave.
   - **Velocidad estimada del golpe (km/h)** y fuerza G.

3. **Biometría & Salud (HealthKit)**:
   - Registro continuo de Frecuencia Cardíaca (BPM promedio y máxima).
   - Calorías activas quemadas (kcal).
   - Mantiene la pantalla encendida y activa durante todo el partido mediante `HKWorkoutSession`.

4. **Sincronización Bidireccional con Padelblox**:
   - Enlace automático con la App móvil vía `WatchConnectivity`.
   - Subida automática de estadísticas a la base de datos de Padelblox (`api/smartwatch/sync_session.php`).

---

## 🛠️ Cómo Abrir y Compilar en Xcode

1. Abre el proyecto iOS en Xcode:
   ```bash
   cd training_padel/ios/App
   open App.xcworkspace
   ```

2. En Xcode:
   - Si no has agregado el target de WatchKit: Ve a **File > New > Target... > watchOS > App**.
   - Nómbralo **PadelBloxWatch**.
   - Incluye los archivos ubicados en `training_padel/ios/App/PadelBloxWatch/`.

3. Selecciona el esquema **PadelBloxWatch** y el simulador **Apple Watch Series 9 / Ultra** y presiona **Run (Cmd + R)**.

4. ¡Listo! Puedes jugar y registrar tus estadísticas en tiempo real.
