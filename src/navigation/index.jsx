import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './home';

export default props => {
  return (
    <NavigationContainer {...props}>
      <HomeStack />
    </NavigationContainer>
  );
};
