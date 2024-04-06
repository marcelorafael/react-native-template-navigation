/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import dark from './src/theme/dark';
import light from './src/theme/light';

import AuthProvider from './src/contexts/auth';

import Routes from './src/Routes';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <View style={{ flex: 1 }}>
        <AuthProvider>
          <StatusBar backgroundColor='#E97812' />
          <Routes />
        </AuthProvider>
      </View>
    </ThemeProvider>
  );
};

export default App;

// export default require('./storybook').default;

// export { default } from './storybook';
