import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
const TrackdetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const track = state.find((track) => track._id === navigation.getParam('id'));
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{track.name}</Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...track.locations[0].coords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

export default TrackdetailScreen;
