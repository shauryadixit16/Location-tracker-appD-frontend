import * as Location from 'expo-location';

const ten = 0.0001;

const getlocation = (inc) => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      altitudeAccuracy: 5,
      longitude: -122.0278186 + inc * ten,
      latitude: 37.33573141 + inc * ten,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getlocation(counter),
  });
  counter++;
}, 1000);
