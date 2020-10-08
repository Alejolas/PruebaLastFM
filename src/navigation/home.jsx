import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as routes from './routes';
import Home from '../views/Home';
import Artists from '../views/Artists';
import Songs from '../views/Songs';
import styles from '../common/styles';

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
    <Stack.Screen
      component={Artists}
      name={routes.ARTISTS}
      options={{
        headerShown: true,
        headerStyle: styles.header,
      }}
    />
    <Stack.Screen
      component={Songs}
      name={routes.SONGS}
      options={{ headerShown: true, headerStyle: styles.header }}
    />
  </Stack.Navigator>
);
