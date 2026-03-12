#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"

# Ir a la carpeta del proyecto
cd "$CI_PRIMARY_REPOSITORY_PATH/training"
echo "--- Current directory: $(pwd) ---"

# 1. Verificar herramientas (Node y CocoaPods suelen estar pre-instalados)
node -v
npm -v
pod --version

# 2. Instalar dependencias de Node
echo "--- Running npm install ---"
# Usamos --legacy-peer-deps para evitar conflictos de versiones en Angular 20
npm install --legacy-peer-deps

# 3. CONSTRUIR EL PROYECTO WEB (Genera la carpeta 'www')
# Esto es obligatorio para que Capacitor pueda sincronizar
echo "--- Running npm run build ---"
npm run build -- --configuration production

# 4. Sincronizar Capacitor
echo "--- Running npx cap sync ios ---"
npx cap sync ios

# 5. Moverse a la carpeta de iOS y ejecutar pod install
cd ios/App
echo "--- Running pod install in $(pwd) ---"
pod install

echo "--- Post-clone script finished successfully ---"
