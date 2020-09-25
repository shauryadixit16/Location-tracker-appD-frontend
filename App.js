import React from 'react';
import AccountScreen from './src/screens/AccountScreen';
import TracklistScreen from './src/screens/TracklistScreen';
import TrackdetailScreen from './src/screens/TrackdetailScreen';
import TrackcreateScreen from './src/screens/TrackcreateScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import BlankScreen from './src/screens/BlankScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Setnavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const Tracks = createStackNavigator({
  Tracklist: TracklistScreen,
  Trackdetail: TrackdetailScreen,
});

Tracks.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />,
};

const Switchnavigator = createSwitchNavigator(
  {
    Blank: BlankScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      Tracks,
      Trackcreate: TrackcreateScreen,
      Account: AccountScreen,
    }),
  },
  {
    initialRouteName: 'loginFlow',
  }
);

const App = createAppContainer(Switchnavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => Setnavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
