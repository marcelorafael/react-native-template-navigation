/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';


import { View, Text } from 'react-native';

import MiniCard from '.';

storiesOf('@core/MiniCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center', paddingHorizontal: 10, backgroundColor:"#F5F5F5"}}>
      <MiniCard
        variant='small'
      >
        <Text>Igreja Batista da Pedreira</Text>
      </MiniCard>
    </View>
  ));
