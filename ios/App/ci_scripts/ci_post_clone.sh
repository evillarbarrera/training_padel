#!/sys/bin/sh

#  ci_post_clone.sh
#  App
#
#  Created by Antigravity.
#

# Install CocoaPods using Homebrew.
export HOMEBREW_NO_AUTO_UPDATE=1
brew install cocoapods

# Install dependencies.
# The script runs from the ci_scripts directory, so we go up to the App directory where the Podfile is.
cd ..
pod install
