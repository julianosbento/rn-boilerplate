# Structure
```
|_android
|_ios
|_src
  |_animations
  |_assets
  |_components
  |_config
  |_i18n
  |_routers
  |_store
    |_ducks
    |_sagas  
  |_services
  |_utils
  |_views
```
# Requesites
- node 10.15.3
- react-native-cli
- fastlane installed [sudo gem install fastlane -NV | brew cask install fastlane]
- API: https://mobile-api-agroclimapro.climatempo.com.br/api/v1

# Environment
## Linux
```
$ create file local.properties in android folder root of the project [local.properties data -> sdk.dir = /home/USERNAME/Android/Sdk]
$ sudo apt-get install node (or nvm)
$ npm install -g react-native-cli
```
## MacOS
```
$ brew install node (or nvm)
$ brew install watchman
$ npm install -g react-native-cli
```

# Install | Run 
## Android
```
$ git clone git@bitbucket.org:climatempoteam/agroclimapro-app.git
$ npm install
$ npm run start (in one tab of terminal) //starts metro bundler
$ react-native run-android (in another tab)
```
## iOS [terminal]
```
$ git clone git@bitbucket.org:climatempoteam/agroclimapro-app.git
$ npm install
$ bash shell/extra.sh
$ npm run start (in one tab of terminal) //starts metro bundler
$ react-native run-ios (in another tab)
```
## iOS [Xcode]
```
$ git clone git@bitbucket.org:climatempoteam/agroclimapro-app.git
$ npm install
$ bash shell/extra.sh
$ Product > Build [or play at the left up corner]
```
# Deploy
## Android
```
$ fastlane android development
```
## iOS
```
$ npm run ios:assets && fastlane ios development
```
# Bugs
## Metro bundler
If your metro bundler breaks in the middle of a build use:
```
$ bash shell/bug.sh