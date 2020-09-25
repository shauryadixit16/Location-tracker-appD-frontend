// import '../_mockLocation';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import { useContext, useCallback } from 'react';
import useLocation from '../hooks/useLocation';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Trackform from '../components/Trackform';
import { FontAwesome } from '@expo/vector-icons';
const TrackcreateScreen = ({ isFocused }) => {
  const { addlocation, state } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addlocation(location, state.recording),
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);
  return (
    <SafeAreaView>
      <Spacer>
        <Text h2>Create Screen</Text>
        {err ? <Text>{err}</Text> : null}
      </Spacer>
      <Map />
      <Trackform />
    </SafeAreaView>
  );
};
TrackcreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />,
};

export default withNavigationFocus(TrackcreateScreen);
