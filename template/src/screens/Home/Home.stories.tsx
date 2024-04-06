/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { View, Text } from 'react-native';

import Home from '.';
import MiniCard from '../../components/@core/MiniCard';

storiesOf('screens/Home', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Home title='Olá!' name='Marcelo'>
      <View>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nesciunt veritatis quod ex cumque fugiat voluptatum soluta labore nostrum deleniti eaque expedita quas, aliquid at natus placeat quidem pariatur explicabo.</Text>
        <MiniCard />
      </View>
    </Home>
  ))

