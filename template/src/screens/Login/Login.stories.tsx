/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';


import { View, Text } from 'react-native';

import Login from '.';

storiesOf('screens/Login', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
      <Login />
  ));
