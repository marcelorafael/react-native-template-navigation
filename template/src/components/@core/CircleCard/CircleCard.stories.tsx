/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';


import { View, StyleSheet, Image, Alert } from 'react-native';

import CircleCard from '.';

const img =


    storiesOf('@core/CircleCard', module)
        .addDecorator(withKnobs)
        .add('Default', () => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                <CircleCard
                    withLabel
                    label='23/11'
                    onPress={() => Alert.alert('Fale Esteban', 'Tudo Beleza?')}
                >
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/0/07/Autobot_small.jpg' }} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
                </CircleCard>
            </View>
        ));
