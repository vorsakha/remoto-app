import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
}
