# Structure
```
|_android
|_ios
|_src
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
- node 10.15.3 [we indicate the you use [nvm](https://github.com/nvm-sh/nvm)]
- [react-native-cli](https://facebook.github.io/react-native/docs/getting-started)
- [fastlane](https://docs.fastlane.tools/) installed [sudo gem install fastlane -NV | brew cask install fastlane]

# Environment
## Linux
```
$ create file local.properties in android folder root of the project [local.properties data -> sdk.dir = /home/USERNAME/Android/Sdk]
$ sudo apt-get install node (or [nvm](https://github.com/nvm-sh/nvm))
$ npm install -g [react-native-cli](https://facebook.github.io/react-native/docs/getting-started)
```
## MacOS
```
$ brew install node (or [nvm](https://github.com/nvm-sh/nvm))
$ brew install watchman
$ npm install -g react-native-cli
```

# Install | Run 
## Android
```
$ git clone git@github.com:julianosbento/rn-boilerplate.git
$ npm install
$ npm run start (in one tab of terminal) //starts metro bundler
$ react-native run-android (in another tab)
```
## iOS [terminal]
```
$ git clone git@github.com:julianosbento/rn-boilerplate.git
$ npm install
$ bash shell/extra.sh
$ npm run start (in one tab of terminal) //starts metro bundler
$ react-native run-ios (in another tab)
```
## iOS [Xcode]
```
$ git clone git@github.com:julianosbento/rn-boilerplate.git
$ npm install
$ bash shell/extra.sh
$ Product > Build [or play at the left up corner]
```
# Deploy
## Android
```
$ fastlane android development
```
## iOS [terminal]
```
$ npm run ios:assets && fastlane ios development
```
## iOS [Xcode]
```
$ Product > Scheme > Edit scheme > Set Release to Relese (can't be Debug)
$ Set a "Generic device" [in devices list]
$ Product > Archive
```
# Docs
To document the project, just run ``` $ npm run doc ``` and will be generated a "docs/" directory in the root of the project, open the ```index.html``` file
# Debug
To debug the project, was implemented [Reactotron](https://github.com/infinitered/reactotron), you need to set your ip in the file ```./src/config/Reactotron.js```
# Bugs
## Metro bundler
If your metro bundler breaks in the middle of a build, acussing troubles with "watches" use:
```
$ bash shell/bug.sh