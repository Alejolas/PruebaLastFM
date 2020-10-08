import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import AppNavigator from './navigation';
import theme from './common/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
