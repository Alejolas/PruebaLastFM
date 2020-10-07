import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import AppNavigator from './navigation';
import theme from './common/theme';

const onNavigationStateChange = (prevState, currentState) => {
  const currentScreen = getActiveRouteName(currentState);
  const prevScreen = getActiveRouteName(prevState);
  if (prevScreen !== currentScreen) {
    setCurrentScreen(currentScreen);
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AppNavigator onNavigationStateChange={onNavigationStateChange} />
    </ThemeProvider>
  );
};

export default App;
