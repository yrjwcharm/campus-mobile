#!/usr/bin/env bash
echo "#### appcenter-post-build START ####"

npm install --global react-native-cli
npm install --global bugsnag-sourcemaps

BUGSNAG_KEY=$(node scripts/export-config-key.js BUGSNAG_KEY ci)

if [ -n "$APPCENTER_XCODE_PROJECT" ]
then
    echo "Generating React Native bundle for iOS..."
    react-native bundle \
        --platform ios \
        --dev false \
        --entry-file index.js \
        --bundle-output ios-release.bundle \
        --sourcemap-output ios-release.bundle.map
    
    echo "Uploading source map for iOS..."
    bugsnag-sourcemaps upload \
        --api-key $BUGSNAG_KEY \
        --app-version $APPCENTER_BUILD_ID \
        --source-map ios-release.bundle.map \
        --minified-url main.jsbundle \
        --minified-file ios-release.bundle \
        --upload-sources
else
    echo "Generating React Native bundle for Android..."
    react-native bundle \
        --platform android \
        --dev false \
        --entry-file index.js \
        --bundle-output android-release.bundle \
        --sourcemap-output android-release.bundle.map

    echo "Uploading source map for Android..."
    bugsnag-sourcemaps upload \
        --api-key $BUGSNAG_KEY \
        --app-version $APPCENTER_BUILD_ID \
        --source-map android-release.bundle.map \
        --minified-url index.android.bundle \
        --minified-file android-release.bundle \
        --upload-sources
fi

echo "#### appcenter-post-build END ####"
