#!/usr/bin/env bash

(rm -rf ~/.rncache && cd node_modules/react-native && cp scripts/*.sh ./ && ./ios-install-third-party.sh && cd third-party/glog-0.3.? && ./configure && ../../scripts/ios-configure-glog.sh)
wget https://s3.ap-south-1.amazonaws.com/zivost/xcode10_fix/libfishhook.a -O node_modules/react-native/Libraries/WebSocket/libfishhook.a