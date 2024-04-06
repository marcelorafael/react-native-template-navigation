/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { View } from 'react-native';

import Button from '.';

storiesOf('@core/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}>
      <Button fullWidth title="Click here" color="green" />
    </View>
  ))
  .add('Container', () => (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}>
      <Button fullWidth variant="container" title="Clique" />
    </View>
  ))
  .add('Text', () => (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button variant="text" title="Clique" />
    </View>
  ));
