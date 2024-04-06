/* eslint-disable prettier/prettier */
// if you use expo remove this line
import React from 'react';
import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import dark from '../src/theme/dark';

import { loadStories } from './storyLoader';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// add DarkTheme provider to all stories
addDecorator(storyFn => (
  <ThemeProvider theme={dark}>{storyFn()}</ThemeProvider>
));

// import stories
configure(() => {
  // require('./stories');
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  // port: 7007, onDeviceUI: true,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
