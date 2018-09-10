package com.coffee;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BatteryStatusModule extends ReactContextBaseJavaModule  {
    public BatteryStatusModule(ReactApplicationContext reactContext) {

        super(reactContext);
    }

    @Override
    public String getName() {
        return "BatteryStatus";
    }

    @ReactMethod
    public void getBatteryStatus(Callback successCallback) {
        Intent batteryIntent = getCurrentActivity().registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
        int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);

        if(level == -1 || scale == -1) {
            level = 0;
        }
        successCallback.invoke(((float)level / (float)scale) * 100.0f);
    }
}