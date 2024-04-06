import React from 'react';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomePresentation from '../../presentation/HomePresentation';
import RegisterUserPresentation from '../../presentation/RegisterUserPresentation';

export default function AppRoutes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="HomePresentation"
                component={HomePresentation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterUserPresentation"
                component={RegisterUserPresentation}
            // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}