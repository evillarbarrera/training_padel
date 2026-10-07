#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- STARTING CI POST-CLONE SCRIPT (ROBUST V2) ---"

# 1. Mostrar información del entorno para debugging
echo "--- Environment Info ---"
export NG_CLI_ANALYTICS=false
echo "CI_PRIMARY_REPOSITORY_PATH: ${CI_PRIMARY_REPOSITORY_PATH:-'Not defined'}"
echo "Current working directory: $(pwd)"

# 2. Localizar el directorio raíz del proyecto (donde está package.json de la app)
if [ -n "$CI_PRIMARY_REPOSITORY_PATH" ] && [ -f "$CI_PRIMARY_REPOSITORY_PATH/training_padel/package.json" ]; then
    PROJECT_ROOT="$CI_PRIMARY_REPOSITORY_PATH/training_padel"
elif [ -n "$CI_PRIMARY_REPOSITORY_PATH" ] && [ -f "$CI_PRIMARY_REPOSITORY_PATH/package.json" ]; then
    PROJECT_ROOT="$CI_PRIMARY_REPOSITORY_PATH"
elif [ -n "$CI_PRIMARY_REPOSITORY_PATH" ] && [ -f "$CI_PRIMARY_REPOSITORY_PATH/training/package.json" ]; then
    PROJECT_ROOT="$CI_PRIMARY_REPOSITORY_PATH/training"
elif [ -f "$(pwd)/../../package.json" ]; then
    PROJECT_ROOT="$(cd "$(pwd)/../.." && pwd)"
elif [ -f "$(pwd)/../../../training_padel/package.json" ]; then
    PROJECT_ROOT="$(cd "$(pwd)/../../../training_padel" && pwd)"
else
    # Búsqueda dinámica de package.json
    SEARCH_DIR="${CI_PRIMARY_REPOSITORY_PATH:-$(pwd)/../..}"
    FOUND_PKG=$(find "$SEARCH_DIR" -maxdepth 3 -name "package.json" -not -path "*/node_modules/*" | head -n 1)
    if [ -n "$FOUND_PKG" ]; then
        PROJECT_ROOT="$(dirname "$FOUND_PKG")"
    else
        echo "!!! ERROR: No se pudo localizar package.json en el repositorio"
        exit 1
    fi
fi

echo "--- Using PROJECT_ROOT: $PROJECT_ROOT ---"
cd "$PROJECT_ROOT"

# 3. Intelligent Node.js Detection & Installation
export PATH="/opt/homebrew/bin:/opt/homebrew/opt/node@22/bin:/usr/local/bin:/usr/local/opt/node@22/bin:$PATH"

# Detectar versión actual de Node de forma segura
NODE_RAW_VERSION=$(node -v 2>/dev/null || echo "")
if [ -z "$NODE_RAW_VERSION" ]; then
    NODE_VERSION=0
else
    NODE_VERSION=$(echo "$NODE_RAW_VERSION" | cut -d'v' -f2 | cut -d'.' -f1)
fi

if [ "$NODE_VERSION" -lt 20 ]; then
    echo "--- Node.js version ($NODE_VERSION) is too old or not found. Installing Node via Homebrew... ---"
    if command -v brew >/dev/null 2>&1; then
        brew install node@22 || brew install node
        brew link --overwrite node@22 --force 2>/dev/null || true
        NODE22_PREFIX=$(brew --prefix node@22 2>/dev/null || brew --prefix node 2>/dev/null || echo "")
        if [ -n "$NODE22_PREFIX" ]; then
            export PATH="$NODE22_PREFIX/bin:$PATH"
        fi
    else
        echo "!!! ERROR: Node.js not found and Homebrew is missing. Cannot proceed. ---"
        exit 1
    fi
fi

echo "--- Using Node.js: $(node -v) ---"
echo "--- Using npm: $(npm -v) ---"

# 4. Configurar Sharp y optimizaciones de instalación
export SHARP_IGNORE_GLOBAL_LIBVIPS=1
export NODE_OPTIONS="--max-old-space-size=4096"

echo "--- Installing NPM dependencies ---"
npm install --legacy-peer-deps --no-audit --no-fund

echo "--- Verifying critical dependencies ---"
if [ ! -d "node_modules/@capacitor/browser" ]; then
    echo "--- Installing missing @capacitor/browser... ---"
    npm install @capacitor/browser --legacy-peer-deps --no-audit --no-fund
fi

# 5. CocoaPods verification
if ! command -v pod >/dev/null 2>&1; then
    echo "--- Installing CocoaPods via Homebrew... ---"
    brew install cocoapods || sudo gem install cocoapods
fi
echo "--- CocoaPods version: $(pod --version) ---"

# 6. Build de Angular (Producción)
echo "--- Running Angular Production Build ---"
npm run build

# 7. Sincronización Capacitor (Copia Web a iOS)
echo "--- Copying Web Assets to iOS ---"
npx cap copy ios

# 8. iOS Pods con Reintentos
PODS_DIR="$PROJECT_ROOT/ios/App"
if [ -d "$PODS_DIR" ]; then
    cd "$PODS_DIR"
    echo "--- Running Pod Install in $(pwd) ---"

    MAX_RETRIES=3
    RETRY_COUNT=0
    SUCCESS=false

    while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
        echo "--- Pod Install Attempt $((RETRY_COUNT + 1)) of $MAX_RETRIES ---"
        if pod install --repo-update; then
            SUCCESS=true
            break
        else
            echo "--- pod install failed. Cleaning trunk and retrying... ---"
            pod repo remove trunk 2>/dev/null || true
            RETRY_COUNT=$((RETRY_COUNT + 1))
            sleep 5
        fi
    done

    if [ "$SUCCESS" = false ]; then
        echo "!!! ERROR: pod install failed after $MAX_RETRIES attempts."
        exit 1
    fi
else
    echo "!!! Warning: ios/App directory not found at $PODS_DIR"
fi

echo "--- CI POST-CLONE SCRIPT FINISHED SUCCESSFULLY ---"
