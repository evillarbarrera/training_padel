#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Debugging Environment ---"
echo "Path: $PATH"
echo "Directory: $(pwd)"

# Xcode Cloud doesn't always have Node in the PATH. 
# We try to find it or install it if necessary.
# However, usually it's better to expect it or use a fallback.

if command -v npm >/dev/null 2>&1; then
    echo "npm is available at $(command -v npm)"
else
    echo "npm NOT found. Trying to add common paths..."
    export PATH=$PATH:/usr/local/bin:/opt/homebrew/bin
fi

# Try again
if ! command -v npm >/dev/null 2>&1; then
    echo "Error: npm is still not found. Xcode Cloud might need Node.js enabled in the workflow."
    exit 127
fi

echo "--- Repository Path: $CI_PRIMARY_REPOSITORY_PATH ---"
cd "$CI_PRIMARY_REPOSITORY_PATH"

# 1. Instalar dependencias
echo "--- npm install ---"
npm install

# 2. Build
echo "--- npm run build ---"
npm run build

# 3. Capacitor Sync
echo "--- npx cap sync ios ---"
npx cap sync ios

# 4. Pods
echo "--- Pod install ---"
cd ios/App
pod install

echo "--- CI Post-Clone Script Successful ---"
