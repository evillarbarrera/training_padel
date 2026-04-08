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

# 3. Intelligent Node.js Detection & Installation
if ! command -v node &> /dev/null; then
    echo "--- Node.js not found in PATH. Checking common Homebrew paths... ---"
    export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
fi

if ! command -v node &> /dev/null; then
    echo "--- Node.js still not found. Installing via Homebrew (this might take 2-3 mins)... ---"
    brew install node
fi

echo "--- Using Node.js: $(node -v) ---"
echo "--- Using npm: $(npm -v) ---"

# Fix potential npm issues
npm cache clean --force

# Use npm install for faster/cleaner install in CI, with legacy-peer-deps to ignore conflicts
echo "--- Running npm install ---"
# Eliminamos temporalmente ngrok para evitar fallos en el postinstall (servidor caído)
# No es necesario para el build de iOS
sed -i '' '/"ngrok":/d' package.json

npm install --legacy-peer-deps --no-audit --no-fund

if ! command -v pod >/dev/null 2>&1; then
    echo "--- CocoaPods not found. Installing via Homebrew... ---"
    brew install cocoapods
else
    echo "--- CocoaPods: $(pod --version) ---"
fi

# 5. Build de Angular
echo "--- Running npm run build ---"
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build -- --configuration production

# 6. Sincronización Capacitor (SOLO COPIA WEB)
echo "--- Copying Web Assets (Skip Pods) ---"
# Evitamos 'sync' porque lanza pod install prematuramente sin reintentos
npx cap copy ios

# 7. iOS Pods con Reintentos y Blindaje DNS
cd "$PROJECT_ROOT/ios/App"
echo "--- Running Pod Install with Retries ---"

MAX_RETRIES=3
RETRY_COUNT=0
SUCCESS=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    echo "--- Pod Install Attempt $((RETRY_COUNT + 1)) of $MAX_RETRIES ---"
    
    # Intentamos la instalación. Si falla por red (host resolve), limpiamos repo y reintentamos.
    if pod install --repo-update; then
        SUCCESS=true
        break
    else
        echo "--- pod install failed. Cleaning trunk and retrying... ---"
        pod repo remove trunk || true
        RETRY_COUNT=$((RETRY_COUNT + 1))
        # Pequeña espera para dejar que la red se estabilice
        sleep 5
    fi
done

if [ "$SUCCESS" = false ]; then
    echo "!!! ERROR: pod install failed after $MAX_RETRIES attempts."
    exit 1
fi

echo "--- CI POST-CLONE SCRIPT FINISHED SUCCESSFULLY ---"
