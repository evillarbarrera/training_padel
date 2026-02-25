#!/bin/sh

#  ci_post_clone.sh
#  App
#
#  Created by Antigravity.
#

echo "--- Starting post-clone script ---"

# The script runs from ios/App/ci_scripts. 
# Go up to the root of the project (training/)
cd ../../../
echo "--- Current directory (root): $(pwd) ---"

# 1. Install Node dependencies
echo "--- Installing Node dependencies ---"
npm install

# 2. Build the Angular app
echo "--- Building Angular app ---"
npm run build

# 3. Use Capacitor to sync the build to the iOS project
# This will also run 'pod install' internally
echo "--- Syncing Capacitor project ---"
npx cap sync ios

echo "--- Post-clone script finished ---"
