#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"

# El repo raiz de Xcode Cloud YA ES la carpeta 'training'
# NO hacer cd a training/training
cd "$CI_PRIMARY_REPOSITORY_PATH"
echo "--- Current directory: $(pwd) ---"
echo "--- Listing files ---"
ls -la

# 1. Instalar Node.js si no está disponible (Solo si falla el comando node)
if ! command -v node >/dev/null 2>&1; then
    echo "--- Installing Node.js via Homebrew ---"
    export HOMEBREW_NO_AUTO_UPDATE=1
    brew install node
fi
node -v
npm -v

# 2. Instalar CocoaPods si no está disponible (Solo si falla el comando pod)
if ! command -v pod >/dev/null 2>&1; then
    echo "--- Installing CocoaPods via Homebrew ---"
    export HOMEBREW_NO_AUTO_UPDATE=1
    brew install cocoapods
fi
pod --version

# 3. Instalar dependencias de Node
echo "--- Running npm install ---"
npm install --legacy-peer-deps

# 4. Construir el proyecto Angular (genera carpeta www)
echo "--- Running npm run build ---"
npm run build -- --configuration production

# 5. Sincronizar Capacitor con iOS
echo "--- Running npx cap sync ios ---"
npx cap sync ios

# 6. Pod install en la carpeta de iOS
echo "--- Switching to iOS App directory ---"
cd ios/App || exit 1
echo "--- Current directory: $(pwd) ---"
echo "--- Running pod install ---"
pod install

echo "--- Post-clone script finished successfully ---"
