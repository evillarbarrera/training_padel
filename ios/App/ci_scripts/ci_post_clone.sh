#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"

# Ir a la raíz del repositorio
cd "$CI_PRIMARY_REPOSITORY_PATH"
echo "--- Current directory: $(pwd) ---"

# 1. Instalar Node.js y CocoaPods si no están (Xcode Cloud suele tener brew)
export HOMEBREW_NO_AUTO_UPDATE=1

if ! command -v node >/dev/null 2>&1; then
    echo "--- Installing Node.js via Homebrew ---"
    brew install node
fi

if ! command -v pod >/dev/null 2>&1; then
    echo "--- Installing CocoaPods via Homebrew ---"
    brew install cocoapods
fi

# 2. Instalar dependencias de Node
# Esto es CRUCIAL para que el Podfile encuentre los scripts de Capacitor
echo "--- Running npm install ---"
npm install --legacy-peer-deps --ignore-scripts

# 3. Sincronizar Capacitor (Crea 'public', 'capacitor.config.json', etc.)
echo "--- Running npx cap sync ios ---"
npx cap sync ios

# 4. Moverse a la carpeta de iOS y ejecutar pod install
cd ios/App
echo "--- Running pod install in $(pwd) ---"
pod install

echo "--- Post-clone script finished successfully ---"
