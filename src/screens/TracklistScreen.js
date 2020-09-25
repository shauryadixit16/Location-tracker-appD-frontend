import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';
const TracklistScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Spacer>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Trackdetail', { id: item._id })
              }
            >
              <ListItem title={item.name} />
            </TouchableOpacity>
          </Spacer>
        )}
      />
    </View>
  );
};

export default TracklistScreen;
