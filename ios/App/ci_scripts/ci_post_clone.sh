#!/bin/sh

#  ci_post_clone.sh
#  App
#
#  Created by Antigravity.
#

echo "--- Starting post-clone script ---"

# The script runs from the ios/App/ci_scripts folder.
# We need to go up to where the Podfile is (ios/App).
cd ..

echo "--- Current directory: $(pwd) ---"

# Install CocoaPods
export HOMEBREW_NO_AUTO_UPDATE=1
echo "--- Installing CocoaPods via Homebrew ---"
brew install cocoapods

# Verify pod installation
echo "--- CocoaPods version: $(pod --version) ---"

# Install dependencies.
echo "--- Running pod install ---"
pod install

echo "--- Post-clone script finished ---"
