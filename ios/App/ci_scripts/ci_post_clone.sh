#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- STARTING CI POST-CLONE SCRIPT (HARDENED) ---"

# 1. Mostrar información del entorno para debugging
echo "--- Environment Info ---"
echo "CI_PRIMARY_REPOSITORY_PATH: $CI_PRIMARY_REPOSITORY_PATH"
echo "Current directory: $(pwd)"
echo "Listing root files:"
ls -F "$CI_PRIMARY_REPOSITORY_PATH"

# 2. Localizar el directorio raíz del proyecto (donde está package.json)
# Xcode Cloud puede clonar el repo completo o solo una subcarpeta dependiendo de la config.
if [ -f "$CI_PRIMARY_REPOSITORY_PATH/package.json" ]; then
    PROJECT_ROOT="$CI_PRIMARY_REPOSITORY_PATH"
elif [ -f "$CI_PRIMARY_REPOSITORY_PATH/training/package.json" ]; then
    PROJECT_ROOT="$CI_PRIMARY_REPOSITORY_PATH/training"
else
    echo "!!! ERROR: No se pudo localizar package.json en el root o en /training"
    exit 1
fi

echo "--- Using PROJECT_ROOT: $PROJECT_ROOT ---"
cd "$PROJECT_ROOT"

# 3. Validar herramientas instaladas o instalarlas
if ! command -v node >/dev/null 2>&1; then
    echo "--- Node.js not found. Installing via Homebrew... ---"
    brew install node
else
    echo "--- Node.js: $(node -v) ---"
fi

if ! command -v pod >/dev/null 2>&1; then
    echo "--- CocoaPods not found. Installing via Homebrew... ---"
    brew install cocoapods
else
    echo "--- CocoaPods: $(pod --version) ---"
fi

# 4. Instalación de dependencias
echo "--- Running npm install ---"
# Usamos legacy-peer-deps para asegurar compatibilidad en Ionic/Angular 19/20
npm install --legacy-peer-deps --no-audit --no-fund

# 5. Build de Angular
echo "--- Running npm run build ---"
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build -- --configuration production

# 6. Sincronización Capacitor
echo "--- Synchronizing Capacitor ---"
npx cap sync ios

# 7. iOS Pods
# IMPORTANTE: Asegurarse de estar en el directorio de la App de iOS
cd "$PROJECT_ROOT/ios/App"
echo "--- Current directory for pods: $(pwd) ---"
echo "--- Running pod install ---"
# repo-update ayuda si los specs son antiguos en el runner
pod install --repo-update

echo "--- CI POST-CLONE SCRIPT FINISHED SUCCESSFULLY ---"
