/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';


import { View, Text } from 'react-native';

import Input from '.';

storiesOf('@core/Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={{flex: 1, justifyContent:'center', paddingHorizontal: 10}}>
      <Input
        value='Teste'
        placeholder='Input'
        onChangeText={() => {}}
      />
    </View>
  ));
