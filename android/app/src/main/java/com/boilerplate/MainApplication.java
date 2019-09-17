package com.boilerplate;

import android.app.Application;
import android.support.multidex.MultiDex;
import android.content.Context;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

public class MainApplication extends NavigationApplication {
  
  @Override
  protected ReactGateway createReactGateway() {
      ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
      return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
      );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
  }

  protected void attachBaseContext(Context base) {
    super.attachBaseContext(base);
    MultiDex.install(this);
  }
}