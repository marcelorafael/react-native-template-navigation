/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';


import { View, StyleSheet, Image } from 'react-native';

import CardQuantity from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  card: {
    width: '50%',
    aspectRatio: 2, // Para manter a proporção retangular
    backgroundColor: 'lightblue',
    marginHorizontal: 3,
  },
});


storiesOf('@core/CardQuantity', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <CardQuantity
          otherTitle='279'
          title='Pessoas'
          color='primary'
          icon={<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/166/166258.png'}} style={{width: 30, height: 30}} /> }
        />
        <CardQuantity
          title='Compras'
          otherTitle='2'
          color='primary'
          icon={<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/166/166258.png'}} style={{width: 30, height: 30}} /> }
        />
      </View>
      <View style={styles.row}>
        <CardQuantity
          otherTitle='55%'
          title='Total de Mulheres'
          color='primary'
          icon={<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/166/166258.png'}} style={{width: 30, height: 30}} /> }
        />
        <CardQuantity
          otherTitle='44%'
          title='Total de Homens'
          color='primary'
          icon={<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/166/166258.png'}} style={{width: 30, height: 30}} /> }
        />
      </View>
    </View>
  ));
