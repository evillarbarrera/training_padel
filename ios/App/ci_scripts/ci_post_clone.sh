#!/bin/sh

# Salir inmediatamente si un comando falla y mostrar comandos para debugging claro en Xcode Cloud
set -e
set -x

echo "--- STARTING CI POST-CLONE SCRIPT (ULTRA-RESILIENT V3) ---"

# 1. Configuración de entorno
export NG_CLI_ANALYTICS=false
export HOMEBREW_NO_AUTO_UPDATE=1
export HOMEBREW_NO_INSTALL_CLEANUP=1
export SHARP_IGNORE_GLOBAL_LIBVIPS=1
export NODE_OPTIONS="--max-old-space-size=4096"

echo "CI_PRIMARY_REPOSITORY_PATH: ${CI_PRIMARY_REPOSITORY_PATH:-'Not defined'}"
echo "Current working directory: $(pwd)"

# 2. Localizar el directorio raíz del proyecto (donde reside package.json)
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
    SEARCH_DIR="${CI_PRIMARY_REPOSITORY_PATH:-$(pwd)/../..}"
    FOUND_PKG=$(find "$SEARCH_DIR" -maxdepth 3 -name "package.json" -not -path "*/node_modules/*" | head -n 1)
    if [ -n "$FOUND_PKG" ]; then
        PROJECT_ROOT="$(dirname "$FOUND_PKG")"
    else
        echo "!!! ERROR: No se pudo localizar package.json"
        exit 1
    fi
fi

echo "--- Using PROJECT_ROOT: $PROJECT_ROOT ---"
cd "$PROJECT_ROOT"

# 3. Detección / Instalación Rápida de Node.js 22 LTS (Requerido por Angular 20)
export PATH="/opt/homebrew/bin:/opt/homebrew/opt/node@22/bin:/usr/local/bin:/usr/local/opt/node@22/bin:$PATH"

NEED_NODE=false
if ! command -v node >/dev/null 2>&1; then
    NEED_NODE=true
else
    NODE_MAJOR=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_MAJOR" -lt 22 ]; then
        NEED_NODE=true
    fi
fi

if [ "$NEED_NODE" = true ]; then
    echo "--- Installing Node.js 22 LTS standalone binary... ---"
    ARCH=$(uname -m)
    if [ "$ARCH" = "arm64" ]; then
        NODE_DIST="darwin-arm64"
    else
        NODE_DIST="darwin-x64"
    fi
    NODE_TAG="v22.14.0"
    mkdir -p /tmp/node_standalone
    
    if curl -fsSL --retry 3 "https://nodejs.org/dist/${NODE_TAG}/node-${NODE_TAG}-${NODE_DIST}.tar.gz" -o /tmp/node.tar.gz; then
        tar -xzf /tmp/node.tar.gz -C /tmp/node_standalone --strip-components=1
        export PATH="/tmp/node_standalone/bin:$PATH"
    elif command -v brew >/dev/null 2>&1; then
        echo "--- Fallback: Installing Node via Homebrew ---"
        brew install node@22 || brew install node
        NODE_PREFIX=$(brew --prefix node@22 2>/dev/null || brew --prefix node 2>/dev/null || echo "")
        if [ -n "$NODE_PREFIX" ]; then
            export PATH="$NODE_PREFIX/bin:$PATH"
        fi
    fi
fi

echo "--- Using Node.js: $(node -v) ---"
echo "--- Using npm: $(npm -v) ---"

# 4. Instalación de dependencias npm
echo "--- Running npm install ---"
npm install --legacy-peer-deps --no-audit --no-fund

# 5. Compilación de producción Angular
echo "--- Running Angular Build ---"
npm run build

# 6. Sincronización de Web Assets con Capacitor
echo "--- Copying Web Assets to iOS ---"
npx cap copy ios

# 7. CocoaPods (pod install)
PODS_DIR="$PROJECT_ROOT/ios/App"
if [ -d "$PODS_DIR" ]; then
    cd "$PODS_DIR"
    echo "--- Running Pod Install in $(pwd) ---"
    
    if ! pod install; then
        echo "--- pod install failed. Retrying with --repo-update ---"
        pod repo remove trunk 2>/dev/null || true
        pod install --repo-update
    fi
fi

echo "--- CI POST-CLONE SCRIPT COMPLETED SUCCESSFULLY ---"
