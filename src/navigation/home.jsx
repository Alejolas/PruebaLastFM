import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as routes from './routes';
import Home from '../views/Home';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName={routes.HOME}
    screenOptions={{ headerTitleAlign: 'center' }}>
    <Stack.Screen
      component={Home}
      name={routes.HOME}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
