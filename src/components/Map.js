import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { useContext } from 'react';

const Map = () => {
  const { state } = useContext(LocationContext);
  if (state.current === null) {
    return null;
  }

  return (
    <MapView
      style={{ height: 300 }}
      initialRegion={{
        ...state.current.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Circle
        center={state.current.coords}
        radius={30}
        strokeColor='rgba(158,158,255,1.0)'
        fillColor='rgba(158,158,255,0.3)'
      />
      <Polyline coordinates={state.locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

export default Map;
