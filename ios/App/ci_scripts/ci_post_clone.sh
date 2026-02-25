#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "--- Starting CI Post-Clone Script ---"

# The script runs from ios/App/ci_scripts folder.
# We just need to go to ios/App and run pod install.
# Since we committed 'www' and synced locally, the native project is ready.

cd ..
echo "--- Current directory: $(pwd) ---"

# Install CocoaPods
export HOMEBREW_NO_AUTO_UPDATE=1
echo "--- Installing CocoaPods via Homebrew ---"
brew install cocoapods

# Install dependencies.
echo "--- Running pod install ---"
pod install

echo "--- Post-clone script finished ---"
