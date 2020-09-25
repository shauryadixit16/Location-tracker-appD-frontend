import React, { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
export default (isFocused, callback) => {
  const [err, Seterr] = useState(null);
  const [subsciber, Setsubscriber] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      Setsubscriber(sub);
    } catch (e) {
      Seterr[e];
    }
  };
  useEffect(() => {
    if (isFocused) {
      startWatching();
    } else {
      subsciber.remove();
      Setsubscriber(null);
    }

    return () => {
      if (subsciber) {
        subsciber.remove();
      }
    };
  }, [isFocused, callback]);

  return [err];
};
