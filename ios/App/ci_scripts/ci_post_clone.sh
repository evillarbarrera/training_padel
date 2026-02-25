#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"
echo "--- Repository Path: $CI_PRIMARY_REPOSITORY_PATH ---"

# 1. Moverse a la raíz del proyecto (donde está package.json)
cd "$CI_PRIMARY_REPOSITORY_PATH"

# 2. Instalar dependencias de Node.js
echo "--- Installing Node.js dependencies ---"
npm install

# 3. Compilar la aplicación web (Angular)
echo "--- Building Web App (NG Build) ---"
npm run build

# 4. Sincronizar Capacitor
# Esto copia 'www' a 'ios/App/App/public'
echo "--- Syncing Capacitor ---"
npx cap sync ios

# 5. Asegurar que CocoaPods se instale correctamente en el directorio de iOS
echo "--- Final Pod Install ---"
cd ios/App
pod install

echo "--- CI Post-Clone Script Completed Successfully ---"
