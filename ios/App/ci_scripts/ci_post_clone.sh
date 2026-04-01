#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"

# 1. Navegar al root del repositorio
cd "$CI_PRIMARY_REPOSITORY_PATH"
echo "--- Directory: $(pwd) ---"

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "!!! Error: No se encontró package.json en $(pwd). Verificando estructura..."
    ls -R
    exit 1
fi

# 2. Configurar Node.js
# Xcode Cloud suele traer Node.js instalado, lo instalamos solo si falta o es muy antiguo
if ! command -v node >/dev/null 2>&1; then
    echo "--- Installing Node.js via Homebrew ---"
    export HOMEBREW_NO_AUTO_UPDATE=1
    brew install node
else
    echo "--- Node.js version: $(node -v) ---"
fi

# 3. Instalar CocoaPods
if ! command -v pod >/dev/null 2>&1; then
    echo "--- Installing CocoaPods via Homebrew ---"
    export HOMEBREW_NO_AUTO_UPDATE=1
    brew install cocoapods
else
    echo "--- CocoaPods version: $(pod --version) ---"
fi

# 4. Instalar dependencias de Node
echo "--- Running npm install ---"
# Limpiar caché si es necesario y usar legacy-peer-deps para evitar conflictos en Ionic/Angular
npm install --legacy-peer-deps --no-audit --no-fund

# 5. Construir el proyecto Angular
echo "--- Running npm run build ---"
# Aumentar memoria para el build de Angular en CI
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build -- --configuration production

# 6. Sincronizar Capacitor
echo "--- Running npx cap sync ios ---"
npx cap sync ios

# 7. Pod install en carpeta iOS
echo "--- Switching to iOS App directory ---"
cd ios/App || exit 1
echo "--- Final Pod Install ---"
# En Xcode Cloud a veces es necesario forzar la arquitectura para el simulador o usar repo-update
pod install --repo-update

echo "--- Post-clone script finished successfully ---"
